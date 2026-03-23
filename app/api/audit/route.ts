import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// For MVP: Generate realistic audit data based on the business category and city
// TODO: Replace with real Google Places API integration
function generateAuditData(businessName: string, city: string, category: string) {
  // Simulate a realistic review count for the business (lower end — these are our prospects)
  const businessReviewCount = Math.floor(Math.random() * 35) + 8; // 8-42 reviews
  const businessRating = Number((4.0 + Math.random() * 0.9).toFixed(1)); // 4.0-4.9

  // Category-specific competitor data (higher review counts)
  const competitorPrefixes: Record<string, string[]> = {
    hvac: ['Premium Air', 'Elite Climate', 'Metro Heating', 'City Comfort', 'ProTemp'],
    plumbing: ['AllFlow', 'Metro Plumbing', 'City Pipes', 'ProDrain', 'Elite Plumbing'],
    roofing: ['TopShield', 'Metro Roofing', 'City Roof Pros', 'Summit Roofing', 'ProRoof'],
    landscaping: ['GreenScape', 'Metro Lawn', 'City Gardens', 'ProYard', 'Elite Landscape'],
    pest_control: ['BugShield', 'Metro Pest', 'City Exterminators', 'ProPest', 'Elite Pest'],
    electrical: ['PowerPro', 'Metro Electric', 'City Wiring', 'ProVolt', 'Elite Electric'],
    flooring: ['FloorCraft', 'Metro Floors', 'City Flooring', 'ProFloor', 'Elite Floors'],
    painting: ['ColorPro', 'Metro Painters', 'City Paint Co', 'ProCoat', 'Elite Painting'],
    cleaning: ['SparkleClean', 'Metro Maids', 'City Cleaners', 'ProClean', 'Elite Cleaning'],
    florist: ['Bloom & Co', 'Metro Flowers', 'City Blooms', 'ProFloral', 'Elite Flowers'],
    other: ['ProService', 'Metro Services', 'City Pros', 'Elite Service', 'TopChoice'],
  };

  const prefixes = competitorPrefixes[category] || competitorPrefixes.other;
  const cityShort = city.split(',')[0].trim();

  const competitors = prefixes.slice(0, 4).map((prefix, i) => ({
    name: `${prefix} ${cityShort}`,
    reviewCount: Math.floor(Math.random() * 150) + 50 + (i === 0 ? 80 : 0), // First competitor has the most
    rating: Number((4.2 + Math.random() * 0.7).toFixed(1)),
  }));

  // Sort competitors by review count descending
  competitors.sort((a, b) => b.reviewCount - a.reviewCount);

  const competitorAvg = Math.round(competitors.reduce((sum, c) => sum + c.reviewCount, 0) / competitors.length);
  const gap = competitorAvg - businessReviewCount;
  const estimatedMissedCalls = Math.max(0, Math.round(gap * 0.8)); // ~0.8 calls per review gap

  return {
    business: {
      name: businessName,
      city,
      reviewCount: businessReviewCount,
      rating: businessRating,
    },
    competitors,
    gap: Math.max(0, gap),
    competitorAvg,
    estimatedMissedCalls,
  };
}

export async function POST(request: NextRequest) {
  try {
    const { businessName, city, category, email, firstName } = await request.json();

    if (!businessName || !city || !email || !firstName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Log the lead
    const lead = {
      timestamp: new Date().toISOString(),
      firstName,
      email,
      businessName,
      city,
      category,
    };

    // Store leads in a JSON file (MVP — replace with GHL integration later)
    const leadsPath = path.join(process.cwd(), 'leads.json');
    let leads = [];
    try {
      const existing = await fs.readFile(leadsPath, 'utf-8');
      leads = JSON.parse(existing);
    } catch {
      // File doesn't exist yet, start fresh
    }
    leads.push(lead);
    await fs.writeFile(leadsPath, JSON.stringify(leads, null, 2));

    // Generate audit data
    const auditData = generateAuditData(businessName, city, category);

    // Simulate a brief delay for realism
    await new Promise(resolve => setTimeout(resolve, 1500));

    return NextResponse.json(auditData);
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
