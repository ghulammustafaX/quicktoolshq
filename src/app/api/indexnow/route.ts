import { NextRequest, NextResponse } from 'next/server';
import { submitUrl, submitUrls, submitAllPages } from '../../../lib/utils/indexnow';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, url, urls } = body;

    let result;

    switch (action) {
      case 'single':
        if (!url) {
          return NextResponse.json({ error: 'URL is required for single submission' }, { status: 400 });
        }
        result = await submitUrl(url);
        break;

      case 'bulk':
        if (!urls || !Array.isArray(urls)) {
          return NextResponse.json({ error: 'URLs array is required for bulk submission' }, { status: 400 });
        }
        result = await submitUrls(urls);
        break;

      case 'all':
        result = await submitAllPages();
        break;

      default:
        return NextResponse.json({ error: 'Invalid action. Use: single, bulk, or all' }, { status: 400 });
    }

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }

  try {
    const result = await submitUrl(url);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}