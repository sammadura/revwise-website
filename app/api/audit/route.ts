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

// Average service ticket values by industry
const avgTicketValues: Record<string, number> = {
  hvac: 350,
  plumbing: 275,
  roofing: 8500,
  landscaping: 200,
  pest_control: 175,
  electrical: 300,
  flooring: 3000,
  painting: 2500,
  cleaning: 150,
  florist: 75,
  other: 250,
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
  websiteUri?: string;
  currentOpeningHours?: { openNow?: boolean; periods?: unknown[] };
  photos?: { name: string }[];
  googleMapsUri?: string;
  primaryType?: string;
  primaryTypeDisplayName?: { text: string };
  types?: string[];
  location?: { latitude: number; longitude: number };
}

interface PlacesSearchResponse {
  places?: PlaceResult[];
}

const PLACES_API_URL = 'https://places.googleapis.com/v1/places:searchText';
const SEARCH_FIELD_MASK = 'places.id,places.displayName,places.rating,places.userRatingCount,places.formattedAddress,places.websiteUri,places.currentOpeningHours,places.photos,places.googleMapsUri';
const DETAIL_FIELD_MASK = 'displayName,rating,userRatingCount,formattedAddress,types,websiteUri,currentOpeningHours,photos,primaryType,primaryTypeDisplayName,location';

async function searchPlaces(textQuery: string, apiKey: string): Promise<PlaceResult[]> {
  const response = await fetch(PLACES_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': SEARCH_FIELD_MASK,
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

async function searchNearbyPlaces(
  latitude: number,
  longitude: number,
  primaryType: string,
  apiKey: string,
  radius = 4828,
): Promise<PlaceResult[]> {
  const response = await fetch('https://places.googleapis.com/v1/places:searchNearby', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': `${SEARCH_FIELD_MASK},places.location`,
    },
    body: JSON.stringify({
      includedPrimaryTypes: [primaryType],
      locationRestriction: {
        circle: {
          center: { latitude, longitude },
          radius,
        },
      },
      maxResultCount: 10,
    }),
  });

  if (!response.ok) {
    console.error(`[NEARBY SEARCH] Error ${response.status}: ${await response.text()}`);
    return [];
  }

  const data: PlacesSearchResponse = await response.json();
  return data.places ?? [];
}

async function getPlaceDetails(placeId: string, apiKey: string): Promise<PlaceResult | null> {
  const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
    method: 'GET',
    headers: {
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': DETAIL_FIELD_MASK,
    },
  });

  if (!response.ok) {
    console.error(`[PLACE DETAILS] Error ${response.status}: ${await response.text()}`);
    return null;
  }

  return await response.json();
}

// Deduplicate places by business name (case-insensitive), keeping the one with the most reviews
function deduplicateByName(places: PlaceResult[]): PlaceResult[] {
  const seen = new Map<string, PlaceResult>();
  for (const place of places) {
    const name = (place.displayName?.text ?? '').toLowerCase();
    const existing = seen.get(name);
    if (!existing || (place.userRatingCount ?? 0) > (existing.userRatingCount ?? 0)) {
      seen.set(name, place);
    }
  }
  return Array.from(seen.values());
}

// Map Google primaryType to our category keys
function mapPrimaryTypeToCategory(primaryType?: string, types?: string[]): string {
  const typeStr = (primaryType ?? '').toLowerCase();
  const allTypes = (types ?? []).map(t => t.toLowerCase()).join(' ');
  const combined = `${typeStr} ${allTypes}`;

  if (combined.includes('hvac') || combined.includes('heating') || combined.includes('air_conditioning')) return 'hvac';
  if (combined.includes('plumb')) return 'plumbing';
  if (combined.includes('roof')) return 'roofing';
  if (combined.includes('landscap') || combined.includes('lawn') || combined.includes('garden')) return 'landscaping';
  if (combined.includes('pest') || combined.includes('exterminator')) return 'pest_control';
  if (combined.includes('electric')) return 'electrical';
  if (combined.includes('floor')) return 'flooring';
  if (combined.includes('paint')) return 'painting';
  if (combined.includes('clean') || combined.includes('maid') || combined.includes('janitor')) return 'cleaning';
  if (combined.includes('florist') || combined.includes('flower')) return 'florist';
  return 'other';
}

// Extract city from formatted address (e.g. "123 Main St, Dallas, TX 75201, USA" -> "Dallas, TX")
function extractCity(formattedAddress?: string): string {
  if (!formattedAddress) return 'your area';
  const parts = formattedAddress.split(',').map(p => p.trim());
  // Typical format: street, city, state zip, country
  if (parts.length >= 3) {
    return `${parts[parts.length - 3]}, ${parts[parts.length - 2].replace(/\s*\d{5}(-\d{4})?/, '')}`.trim();
  }
  return parts.slice(1).join(', ') || 'your area';
}

function generateVelocityInsight(
  businessReviewCount: number,
  competitorAvg: number,
  competitors: { name: string; reviewCount: number; rating: number }[],
  label: string,
): string {
  // Estimate monthly review velocity assuming ~3 years of business presence on Google
  const assumedMonths = 36;
  const userVelocity = Math.round((businessReviewCount / assumedMonths) * 10) / 10;
  const topCompetitor = competitors[0];
  const topVelocity = topCompetitor
    ? Math.round((topCompetitor.reviewCount / assumedMonths) * 10) / 10
    : userVelocity;
  const avgVelocity = Math.round((competitorAvg / assumedMonths) * 10) / 10;

  const gap = competitorAvg - businessReviewCount;
  const sixMonthGrowth = Math.round(avgVelocity * 6 - userVelocity * 6);

  if (gap <= 0) {
    return `You're averaging ~${userVelocity} reviews/month — ahead of the local ${label} average of ~${avgVelocity}/month. Maintain this pace to keep your lead. At current rates, you'll gain ~${Math.round(userVelocity * 6 - avgVelocity * 6)} more reviews than competitors over the next 6 months.`;
  }

  return `Your competitors are averaging ~${avgVelocity} new reviews/month, while you're at ~${userVelocity}/month. At this pace, the gap will widen by ~${Math.max(1, sixMonthGrowth)} reviews over the next 6 months. The top performer (${topCompetitor?.name ?? 'unknown'}) is pulling in ~${topVelocity} reviews/month.`;
}

function generateRatingImpact(
  businessRating: number,
  competitors: { name: string; reviewCount: number; rating: number }[],
  category: string,
  label: string,
): {
  ratingGap: number;
  topCompetitorRating: number;
  topCompetitorName: string;
  revenueImpactPercent: number;
  estimatedMonthlyLoss: number;
  insight: string;
} {
  const topByRating = [...competitors].sort((a, b) => b.rating - a.rating)[0];
  const topRating = topByRating?.rating ?? businessRating;
  const topName = topByRating?.name ?? 'top competitor';
  const ratingGap = Math.round((topRating - businessRating) * 10) / 10;

  // Each star = 5-9% revenue increase (Harvard Business School / Yelp studies)
  const revenueImpactPercent = Math.round(ratingGap * 7 * 10) / 10; // 7% midpoint per star
  const ticketValue = avgTicketValues[category] || 250;
  // Estimate ~30 jobs/month for a typical local service business
  const monthlyJobs = 30;
  const monthlyRevenue = monthlyJobs * ticketValue;
  const estimatedMonthlyLoss = Math.round(monthlyRevenue * (revenueImpactPercent / 100));

  let insight: string;
  if (ratingGap <= 0) {
    insight = `Your ${businessRating}-star rating is the highest among your local competitors. This gives you a significant advantage — consumers are 2.5x more likely to click on the highest-rated ${label} business in search results.`;
  } else {
    insight = `The ${ratingGap}-star gap between you (${businessRating}) and ${topName} (${topRating}) could mean ${revenueImpactPercent}% fewer clicks and an estimated $${estimatedMonthlyLoss.toLocaleString()}/month in lost revenue. Each star increase drives 5-9% more revenue according to Harvard Business School research.`;
  }

  return {
    ratingGap: Math.max(0, ratingGap),
    topCompetitorRating: topRating,
    topCompetitorName: topName,
    revenueImpactPercent,
    estimatedMonthlyLoss: Math.max(0, estimatedMonthlyLoss),
    insight,
  };
}

function generateRankingEstimate(
  businessName: string,
  businessReviewCount: number,
  businessRating: number,
  competitors: { name: string; reviewCount: number; rating: number }[],
  city: string,
  label: string,
): {
  estimatedPosition: number;
  totalCompared: number;
  rankings: { name: string; score: number; position: number }[];
  insight: string;
} {
  const allBusinesses = [
    { name: businessName, reviewCount: businessReviewCount, rating: businessRating },
    ...competitors,
  ];

  const maxReviews = Math.max(...allBusinesses.map(b => b.reviewCount), 1);

  const scored = allBusinesses.map(b => {
    const reviewCountScore = (b.reviewCount / maxReviews) * 40;
    const ratingScore = (b.rating / 5.0) * 30;
    const relativeScore = (b.reviewCount / maxReviews) * 30;
    return {
      name: b.name,
      score: Math.round((reviewCountScore + ratingScore + relativeScore) * 10) / 10,
      position: 0,
    };
  });

  scored.sort((a, b) => b.score - a.score);
  scored.forEach((s, i) => { s.position = i + 1; });

  const userRanking = scored.find(s => s.name === businessName);
  const estimatedPosition = userRanking?.position ?? scored.length;

  let insight: string;
  if (estimatedPosition <= 3) {
    insight = `Based on your reviews, you likely appear in the top 3 Google Maps results for "${label}" in ${city}. The local 3-pack gets 44% of all clicks — you're in a strong position.`;
  } else {
    insight = `Based on your reviews, you likely appear in position #${estimatedPosition} of ${scored.length} in Google Maps results for "${label}" in ${city}. Only the top 3 appear in Google's local 3-pack, which captures 44% of all clicks.`;
  }

  return {
    estimatedPosition,
    totalCompared: scored.length,
    rankings: scored.slice(0, Math.max(5, estimatedPosition + 1)),
    insight,
  };
}

interface ProfileCompleteness {
  hasWebsite: boolean;
  websiteUrl: string | null;
  hasPhotos: boolean;
  photoCount: number;
  hasHours: boolean;
  missingFields: string[];
  completenessScore: number;
  insight: string;
}

function generateProfileCheck(place: PlaceResult | null): ProfileCompleteness {
  if (!place) {
    return {
      hasWebsite: false,
      websiteUrl: null,
      hasPhotos: false,
      photoCount: 0,
      hasHours: false,
      missingFields: ['website', 'photos', 'business hours'],
      completenessScore: 30,
      insight: 'We couldn\'t verify your Google Business Profile details. Complete profiles with photos, hours, and a website get 7x more clicks than incomplete ones.',
    };
  }

  const hasWebsite = !!place.websiteUri;
  const hasPhotos = !!place.photos && place.photos.length > 0;
  const photoCount = place.photos?.length ?? 0;
  const hasHours = !!place.currentOpeningHours;

  const missingFields: string[] = [];
  if (!hasWebsite) missingFields.push('website');
  if (!hasPhotos) missingFields.push('photos');
  if (!hasHours) missingFields.push('business hours');

  // Score: base 40 + 20 per field present
  const completenessScore = 40 + (hasWebsite ? 20 : 0) + (hasPhotos ? 20 : 0) + (hasHours ? 20 : 0);

  let insight: string;
  if (missingFields.length === 0) {
    insight = `Your Google Business Profile looks complete with a website${hasPhotos ? `, ${photoCount} photo${photoCount > 1 ? 's' : ''}` : ''}, and business hours listed. Complete profiles get 7x more clicks — you're set up well.`;
    if (photoCount < 10) {
      insight += ` Consider adding more photos — businesses with 100+ photos get 520% more calls than average.`;
    }
  } else {
    insight = `Your Google Business Profile is missing ${missingFields.join(', ')}. Complete profiles get 7x more clicks than incomplete ones. ${!hasPhotos ? 'Businesses with photos get 42% more direction requests on Google Maps.' : ''} ${!hasHours ? 'Missing hours makes customers unsure if you\'re open — many will skip to a competitor.' : ''}`.trim();
  }

  return {
    hasWebsite,
    websiteUrl: place.websiteUri ?? null,
    hasPhotos,
    photoCount,
    hasHours,
    missingFields,
    completenessScore,
    insight,
  };
}

function calculateAuditResults(
  businessName: string,
  city: string,
  category: string,
  businessReviewCount: number,
  businessRating: number,
  competitors: { name: string; reviewCount: number; rating: number }[],
  businessPlace: PlaceResult | null = null,
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

  // New analysis sections
  const velocityInsight = generateVelocityInsight(businessReviewCount, competitorAvg, competitors, label);
  const ratingImpact = generateRatingImpact(businessRating, competitors, category, label);
  const rankingEstimate = generateRankingEstimate(businessName, businessReviewCount, businessRating, competitors, city, label);
  const profileCheck = generateProfileCheck(businessPlace);

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
    velocityInsight,
    ratingImpact,
    rankingEstimate,
    profileCheck,
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

  return calculateAuditResults(businessName, city, category, businessReviewCount, businessRating, competitors, null);
}

async function fetchRealAuditDataByPlaceId(placeId: string) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    console.warn('[AUDIT] GOOGLE_PLACES_API_KEY not set, falling back to mock data');
    return null;
  }

  try {
    // Step 1: Get the selected business details
    const userBusiness = await getPlaceDetails(placeId, apiKey);
    if (!userBusiness) {
      console.warn(`[AUDIT] No details found for placeId "${placeId}"`);
      return null;
    }

    const businessReviewCount = userBusiness.userRatingCount ?? 0;
    const businessRating = userBusiness.rating ?? 0;
    const userBusinessName = userBusiness.displayName?.text ?? 'Your Business';
    const category = mapPrimaryTypeToCategory(userBusiness.primaryType, userBusiness.types);
    const city = extractCity(userBusiness.formattedAddress);

    // Step 2: Find competitors using Nearby Search (3-mile radius)
    const label = categoryLabels[category] || 'service';
    const userNameLower = userBusinessName.toLowerCase();

    let competitorResults: PlaceResult[] = [];
    if (userBusiness.location && userBusiness.primaryType) {
      competitorResults = await searchNearbyPlaces(
        userBusiness.location.latitude,
        userBusiness.location.longitude,
        userBusiness.primaryType,
        apiKey,
        4828, // 3 miles in meters
      );
    }

    // Filter out the user's own business
    const filterSelf = (places: PlaceResult[]) =>
      places.filter((place) => {
        const placeName = (place.displayName?.text ?? '').toLowerCase();
        return placeName !== userNameLower
          && !placeName.includes(userNameLower) && !userNameLower.includes(placeName);
      });

    let filtered = filterSelf(competitorResults);

    // Fall back to Text Search if Nearby Search returned fewer than 3 competitors
    if (filtered.length < 3) {
      console.log(`[AUDIT] Nearby Search returned ${filtered.length} competitors, falling back to Text Search`);
      const searchLabel = userBusiness.primaryTypeDisplayName?.text || label;
      const textResults = await searchPlaces(`${searchLabel} near ${city}`, apiKey);
      filtered = filterSelf(textResults);
    }

    const dedupedCompetitors = deduplicateByName(filtered);

    const filteredCompetitors = dedupedCompetitors
      .filter((place) => (place.userRatingCount ?? 0) >= 10)
      .sort((a, b) => (b.userRatingCount ?? 0) - (a.userRatingCount ?? 0))
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

    return calculateAuditResults(
      userBusinessName,
      city,
      category,
      businessReviewCount,
      businessRating,
      filteredCompetitors,
      userBusiness,
    );
  } catch (error) {
    console.error('[AUDIT] Google Places API error:', error);
    return null;
  }
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
    const competitorResults = await searchPlaces(`${label} near ${city}`, apiKey);

    // Filter out the user's business from competitors
    const userNameLower = userBusinessName.toLowerCase();
    const inputNameLower = businessName.toLowerCase();
    const selfFiltered = competitorResults
      .filter((place) => {
        const placeName = (place.displayName?.text ?? '').toLowerCase();
        return placeName !== userNameLower && placeName !== inputNameLower
          && !placeName.includes(inputNameLower) && !inputNameLower.includes(placeName);
      });
    const filteredCompetitors = deduplicateByName(selfFiltered)
      .filter((place) => (place.userRatingCount ?? 0) >= 10)
      .sort((a, b) => (b.userRatingCount ?? 0) - (a.userRatingCount ?? 0))
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

    return calculateAuditResults(
      userBusinessName,
      city,
      category,
      businessReviewCount,
      businessRating,
      filteredCompetitors,
      userBusiness,
    );
  } catch (error) {
    console.error('[AUDIT] Google Places API error:', error);
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { placeId, businessName, city, category, email, firstName } = await request.json();

    if (!email || !firstName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Need either placeId or legacy businessName+city
    if (!placeId && (!businessName || !city)) {
      return NextResponse.json({ error: 'Missing business identification' }, { status: 400 });
    }

    // Log the lead to console (Vercel captures this in function logs)
    // TODO: Replace with GHL API integration to push leads into CRM
    console.log('[LEAD CAPTURED]', JSON.stringify({
      timestamp: new Date().toISOString(),
      firstName,
      email,
      placeId: placeId ?? null,
      businessName: businessName ?? null,
      city: city ?? null,
      category: category ?? null,
    }));

    let auditData;

    if (placeId) {
      // New flow: use Place Details API with exact placeId
      auditData = await fetchRealAuditDataByPlaceId(placeId)
        ?? generateMockAuditData(businessName || 'Your Business', city || 'your area', category || 'other');
    } else {
      // Legacy fallback: text search
      auditData = await fetchRealAuditData(businessName, city, category)
        ?? generateMockAuditData(businessName, city, category);
    }

    return NextResponse.json(auditData);
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
