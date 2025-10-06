import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1,
      }
    ],
    sitemap: 'https://www.quicktoolshq.com/sitemap.xml',
    host: 'https://www.quicktoolshq.com',
  }
}
