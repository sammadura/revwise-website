import { NextRequest, NextResponse } from 'next/server';

interface AutocompleteSuggestion {
  placePrediction?: {
    placeId: string;
    text: { text: string };
    structuredFormat?: {
      mainText: { text: string };
      secondaryText: { text: string };
    };
  };
}

interface AutocompleteResponse {
  suggestions?: AutocompleteSuggestion[];
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
  }

  try {
    const { input } = await request.json();

    if (!input || typeof input !== 'string' || input.trim().length < 2) {
      return NextResponse.json({ suggestions: [] });
    }

    const response = await fetch('https://places.googleapis.com/v1/places:autocomplete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
      },
      body: JSON.stringify({
        input: input.trim(),
        includedPrimaryTypes: ['establishment'],
      }),
    });

    if (!response.ok) {
      console.error(`[AUTOCOMPLETE] Error ${response.status}: ${await response.text()}`);
      return NextResponse.json({ suggestions: [] });
    }

    const data: AutocompleteResponse = await response.json();

    const suggestions = (data.suggestions ?? [])
      .filter((s) => s.placePrediction)
      .map((s) => ({
        placeId: s.placePrediction!.placeId,
        name: s.placePrediction!.structuredFormat?.mainText.text ?? s.placePrediction!.text.text,
        address: s.placePrediction!.structuredFormat?.secondaryText.text ?? '',
        fullText: s.placePrediction!.text.text,
      }));

    return NextResponse.json({ suggestions });
  } catch (error) {
    console.error('[AUTOCOMPLETE] Error:', error);
    return NextResponse.json({ suggestions: [] });
  }
}
