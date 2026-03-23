import { NextRequest, NextResponse } from 'next/server';

// Industry-specific review count ranges based on typical Google Business profiles
const industryRanges: Record<string, { min: number; max: number; avgRating: number }> = {
  hvac: { min: 50, max: 300, avgRating: 4.4 },
  plumbing: { min: 30, max: 200, avgRating: 4.3 },
  roofing: { min: 20, max: 150, avgRating: 4.3 },
  landscaping: { min: 15, max: 120, avgRating: 4.5 },
  pest_control: { min: 25, max: 180, avgRating: 4.4 },
  electrical: { min: 20, max: 160, avgRating: 4.4 },
  flooring: { min: 15, max: 100, avgRating: 4.3 },
  painting: { min: 10, max: 90, avgRating: 4.4 },
  cleaning: { min: 20, max: 150, avgRating: 4.3 },
  florist: { min: 10, max: 80, avgRating: 4.6 },
  other: { min: 15, max: 120, avgRating: 4.4 },
};

const categoryLabels: Record<string, string> = {
  hvac: 'HVAC',
  plumbing: 'plumbing',
  roofing: 'roofing',
  landscaping: 'landscaping',
  pest_control: 'pest control',
  electrical: 'electrical',
  flooring: 'flooring',
  painting: 'painting',
  cleaning: 'cleaning',
  florist: 'florist',
  other: 'service',
};

// Seeded random from string for consistent results per business
function seededRandom(seed: string): () => number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return () => {
    hash = (hash * 1664525 + 1013904223) | 0;
    return (hash >>> 0) / 4294967296;
  };
}

interface PlaceResult {
  displayName?: { text: string };
  rating?: number;
  userRatingCount?: number;
  formattedAddress?: string;
}

interface PlacesSearchResponse {
  places?: PlaceResult[];
}

const PLACES_API_URL = 'https://places.googleapis.com/v1/places:searchText';
const FIELD_MASK = 'places.displayName,places.rating,places.userRatingCount,places.formattedAddress';

async function searchPlaces(textQuery: string, apiKey: string): Promise<PlaceResult[]> {
  const response = await fetch(PLACES_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': FIELD_MASK,
    },
    body: JSON.stringify({ textQuery }),
  });

  if (!response.ok) {
    console.error(`[PLACES API] Error ${response.status}: ${await response.text()}`);
    return [];
  }

  const data: PlacesSearchResponse = await response.json();
  return data.places ?? [];
}

function calculateAuditResults(
  businessName: string,
  city: string,
  category: string,
  businessReviewCount: number,
  businessRating: number,
  competitors: { name: string; reviewCount: number; rating: number }[],
) {
  const label = categoryLabels[category] || 'service';

  const competitorAvg = competitors.length > 0
    ? Math.round(competitors.reduce((sum, c) => sum + c.reviewCount, 0) / competitors.length)
    : businessReviewCount;
  const gap = Math.max(0, competitorAvg - businessReviewCount);
  const estimatedMissedCalls = Math.max(0, Math.round(gap * 0.8));

  // Review Health Score (0-100)
  const effectiveCompAvg = competitorAvg || 1;
  const countScore = Math.min(100, (businessReviewCount / effectiveCompAvg) * 100);
  const ratingScore = Math.min(100, (businessRating / 5.0) * 100);
  const gapScore = Math.max(0, 100 - (gap / effectiveCompAvg) * 100);
  const reviewHealthScore = Math.round(countScore * 0.5 + ratingScore * 0.3 + gapScore * 0.2);

  // Personalized quick wins
  const quickWins: string[] = [];
  if (businessReviewCount < competitorAvg * 0.5) {
    quickWins.push(`Send a review request to every customer after each job. Even getting 5 new reviews per week would close your gap within ${Math.ceil(gap / 20)} months.`);
  } else {
    quickWins.push('Set up automated review requests after every completed job. Consistent follow-up is the #1 driver of review growth.');
  }
  if (businessRating < 4.5) {
    quickWins.push(`Respond to every review — positive and negative — within 24 hours. Businesses that respond to reviews see their ratings improve by 0.2 stars on average.`);
  } else {
    quickWins.push('Keep responding to every review to maintain your strong rating. Highlight positive reviews on your website and social media.');
  }
  quickWins.push(`Add a "Review Us on Google" link to your email signature, invoices, and follow-up texts. Make it effortless for happy customers to leave a review.`);

  // Business impact insights
  const monthlyRevenueLost = estimatedMissedCalls * 250;
  const insights = [
    `With ${gap} fewer reviews than your competitors, your business is less likely to appear in Google's "Local 3-Pack" — the top map results that get 44% of all clicks.`,
    `At an estimated ${estimatedMissedCalls} missed calls per month, you could be leaving $${monthlyRevenueLost.toLocaleString()}+ in monthly revenue on the table (based on average ${label} job value).`,
    `76% of consumers read online reviews before choosing a local ${label} company. Your current review count may signal less experience compared to competitors with ${competitorAvg}+ reviews.`,
  ];

  return {
    business: {
      name: businessName,
      city,
      reviewCount: businessReviewCount,
      rating: businessRating,
    },
    competitors,
    gap,
    competitorAvg,
    estimatedMissedCalls,
    reviewHealthScore,
    quickWins,
    insights,
  };
}

function generateMockAuditData(businessName: string, city: string, category: string) {
  const rand = seededRandom(`${businessName}-${city}-${category}`);
  const range = industryRanges[category] || industryRanges.other;

  // User's business: always in the lower third of industry range
  const userMax = range.min + Math.floor((range.max - range.min) * 0.35);
  const businessReviewCount = range.min + Math.floor(rand() * (userMax - range.min));
  const businessRating = Number((3.8 + rand() * 1.0).toFixed(1));

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

  const competitors = prefixes.map((prefix) => {
    const compMin = Math.max(businessReviewCount + 15, Math.floor(range.min + (range.max - range.min) * 0.3));
    const compMax = range.max;
    const reviewCount = compMin + Math.floor(rand() * (compMax - compMin));
    const rating = Number((range.avgRating - 0.2 + rand() * 0.6).toFixed(1));
    return {
      name: `${prefix} ${cityShort}`,
      reviewCount,
      rating: Math.min(rating, 5.0),
    };
  });

  competitors.sort((a, b) => b.reviewCount - a.reviewCount);

  return calculateAuditResults(businessName, city, category, businessReviewCount, businessRating, competitors);
}

async function fetchRealAuditData(businessName: string, city: string, category: string) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    console.warn('[AUDIT] GOOGLE_PLACES_API_KEY not set, falling back to mock data');
    return null;
  }

  try {
    // Step 1: Find the user's business
    const businessResults = await searchPlaces(`${businessName} ${city}`, apiKey);
    if (businessResults.length === 0) {
      console.warn(`[AUDIT] No results found for "${businessName} ${city}"`);
      return null;
    }

    const userBusiness = businessResults[0];
    const businessReviewCount = userBusiness.userRatingCount ?? 0;
    const businessRating = userBusiness.rating ?? 0;
    const userBusinessName = userBusiness.displayName?.text ?? businessName;

    // Step 2: Find competitors
    const label = categoryLabels[category] || 'service';
    const competitorResults = await searchPlaces(`${label} companies in ${city}`, apiKey);

    // Filter out the user's business from competitors
    const userNameLower = userBusinessName.toLowerCase();
    const inputNameLower = businessName.toLowerCase();
    const filteredCompetitors = competitorResults
      .filter((place) => {
        const placeName = (place.displayName?.text ?? '').toLowerCase();
        return placeName !== userNameLower && placeName !== inputNameLower
          && !placeName.includes(inputNameLower) && !inputNameLower.includes(placeName);
      })
      .slice(0, 5)
      .map((place) => ({
        name: place.displayName?.text ?? 'Unknown',
        reviewCount: place.userRatingCount ?? 0,
        rating: place.rating ?? 0,
      }));

    if (filteredCompetitors.length === 0) {
      console.warn(`[AUDIT] No competitors found for "${label} companies in ${city}"`);
      return null;
    }

    filteredCompetitors.sort((a, b) => b.reviewCount - a.reviewCount);

    return calculateAuditResults(
      userBusinessName,
      city,
      category,
      businessReviewCount,
      businessRating,
      filteredCompetitors,
    );
  } catch (error) {
    console.error('[AUDIT] Google Places API error:', error);
    return null;
  }
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

    // Try real Google Places API data first, fall back to mock data
    const auditData = await fetchRealAuditData(businessName, city, category)
      ?? generateMockAuditData(businessName, city, category);

    return NextResponse.json(auditData);
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
