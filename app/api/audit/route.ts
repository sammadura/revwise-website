import { NextRequest, NextResponse } from 'next/server';

// For MVP: Generate realistic audit data based on the business category and city
// TODO: Replace with real Google Places API integration
function generateAuditData(businessName: string, city: string, category: string) {
  const businessReviewCount = Math.floor(Math.random() * 35) + 8;
  const businessRating = Number((4.0 + Math.random() * 0.9).toFixed(1));

  const competitorPrefixes: Record<string, string[]> = {
    hvac: ['Premium Air', 'Elite Climate', 'Metro Heating', 'City Comfort'],
    plumbing: ['AllFlow', 'Metro Plumbing', 'City Pipes', 'ProDrain'],
    roofing: ['TopShield', 'Metro Roofing', 'City Roof Pros', 'Summit Roofing'],
    landscaping: ['GreenScape', 'Metro Lawn', 'City Gardens', 'ProYard'],
    pest_control: ['BugShield', 'Metro Pest', 'City Exterminators', 'ProPest'],
    electrical: ['PowerPro', 'Metro Electric', 'City Wiring', 'ProVolt'],
    flooring: ['FloorCraft', 'Metro Floors', 'City Flooring', 'ProFloor'],
    painting: ['ColorPro', 'Metro Painters', 'City Paint Co', 'ProCoat'],
    cleaning: ['SparkleClean', 'Metro Maids', 'City Cleaners', 'ProClean'],
    florist: ['Bloom & Co', 'Metro Flowers', 'City Blooms', 'ProFloral'],
    other: ['ProService', 'Metro Services', 'City Pros', 'Elite Service'],
  };

  const prefixes = competitorPrefixes[category] || competitorPrefixes.other;
  const cityShort = city.split(',')[0].trim();

  const competitors = prefixes.map((prefix, i) => ({
    name: `${prefix} ${cityShort}`,
    reviewCount: Math.floor(Math.random() * 150) + 50 + (i === 0 ? 80 : 0),
    rating: Number((4.2 + Math.random() * 0.7).toFixed(1)),
  }));

  competitors.sort((a, b) => b.reviewCount - a.reviewCount);

  const competitorAvg = Math.round(competitors.reduce((sum, c) => sum + c.reviewCount, 0) / competitors.length);
  const gap = competitorAvg - businessReviewCount;
  const estimatedMissedCalls = Math.max(0, Math.round(gap * 0.8));

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

    // Log the lead to console (Vercel captures this in function logs)
    // TODO: Replace with GHL API integration to push leads into CRM
    console.log('[LEAD CAPTURED]', JSON.stringify({
      timestamp: new Date().toISOString(),
      firstName,
      email,
      businessName,
      city,
      category,
    }));

    // Generate audit data
    const auditData = generateAuditData(businessName, city, category);

    // Brief delay for realism
    await new Promise(resolve => setTimeout(resolve, 1500));

    return NextResponse.json(auditData);
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
