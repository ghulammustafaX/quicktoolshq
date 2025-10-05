import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Force HTTPS and non-www
  if (hostname.startsWith('www.')) {
    // Redirect www to non-www with 301 permanent redirect
    const newUrl = new URL(request.url);
    newUrl.hostname = 'quicktoolshq.com';
    newUrl.protocol = 'https:';
    
    return NextResponse.redirect(newUrl, {
      status: 301,
      headers: {
        'X-Robots-Tag': 'noindex, nofollow',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }

  // Force HTTPS for non-www
  if (url.protocol === 'http:') {
    url.protocol = 'https:';
    return NextResponse.redirect(url, {
      status: 301,
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|assets).*)',
  ],
};
