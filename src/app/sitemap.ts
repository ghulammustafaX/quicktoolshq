import { MetadataRoute } from 'next'

/**
 * Last Updated: October 2, 2025
 * Total Pages: 26 (Homepage + Tools + Blog Posts + Legal Pages)
 * 
 * This sitemap includes all pages for optimal SEO and search engine discovery:
 * - Main navigation pages (4)
 * - All productivity tools (10) 
 * - All blog articles (10)
 * - Legal/policy pages (2)
 * 
 */

export default function sitemap(): MetadataRoute.Sitemap {
  // Use specific date for last major update
  const lastUpdate = new Date('2025-10-02T00:00:00.000Z');
  const currentDate = new Date();
  
  // Base domain
  const baseUrl = 'https://quicktoolshq.com';
  
  // ============================================================================
  // MAIN NAVIGATION PAGES (Priority: 1.0 - 0.9)
  // ============================================================================
  const mainPages = [
    {
      url: baseUrl,
      lastModified: lastUpdate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: lastUpdate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: lastUpdate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastUpdate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // ============================================================================
  // LEGAL & POLICY PAGES (Priority: 0.5)
  // ============================================================================
  const legalPages = [
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: lastUpdate,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: lastUpdate,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ];

  // ============================================================================
  // PRODUCTIVITY TOOLS (Priority: 0.8) - High conversion value
  // ============================================================================
  const toolPages = [
    `${baseUrl}/tools/bmi-calculator`,
    `${baseUrl}/tools/word-counter`,
    `${baseUrl}/tools/unit-converter`,
    `${baseUrl}/tools/text-case-converter`,
    `${baseUrl}/tools/password-generator`,
    `${baseUrl}/tools/image-compressor`,
    `${baseUrl}/tools/image-converter`,
    `${baseUrl}/tools/pdf-compress`,
    `${baseUrl}/tools/pdf-compressor`,
    `${baseUrl}/tools/pdf-converter`,
  ].map(url => ({
    url,
    lastModified: lastUpdate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // ============================================================================
  // BLOG ARTICLES (Priority: 0.7) - Content marketing & SEO
  // ============================================================================
  const blogPosts = [
    `${baseUrl}/blog/best-ai-writing-tools-content-generators-2025`,
    `${baseUrl}/blog/best-free-online-image-compression-tools-2025`,
    `${baseUrl}/blog/best-online-collaboration-tools-remote-teams-2025`,
    `${baseUrl}/blog/essential-online-tools-professionals-2025`,
    `${baseUrl}/blog/how-to-merge-pdf-files-online-free-2025`,
    `${baseUrl}/blog/optimize-images-web-quality`,
    `${baseUrl}/blog/pdf-tools-guide`,
    `${baseUrl}/blog/privacy-digital-age-data-safety`,
    `${baseUrl}/blog/text-processing-automation-tools-save-time-2025`,
    `${baseUrl}/blog/ultimate-pdf-conversion-guide-2025`,
  ].map(url => ({
    url,
    lastModified: lastUpdate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // ============================================================================
  // SITEMAP SUMMARY & RETURN
  // ============================================================================
  const allPages = [
    ...mainPages,
    ...legalPages,
    ...toolPages,
    ...blogPosts,
  ];

  // Log sitemap stats for development
  if (process.env.NODE_ENV === 'development') {
    console.log(`
QuickToolsHQ Sitemap Generated
════════════════════════════════════
Main Pages:    ${mainPages.length}
Legal Pages:   ${legalPages.length}
Tool Pages:    ${toolPages.length}
Blog Posts:    ${blogPosts.length}
════════════════════════════════════
Total Pages:   ${allPages.length}
Base URL:      ${baseUrl}
Last Updated:  ${lastUpdate.toISOString()}
Generated:     ${currentDate.toISOString()}
════════════════════════════════════
    `);
  }

  return allPages;
}
