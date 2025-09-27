import { MetadataRoute } from 'next'

/**
 * QuickToolsHQ - Complete Sitemap Generator
 * Generated: September 27, 2025
 * Total Pages: 25+ (Homepage + Tools + Blog Posts + Legal Pages)
 * 
 * This sitemap includes all pages for optimal SEO and search engine discovery:
 * - Main navigation pages (5)
 * - All productivity tools (10) 
 * - All blog articles (10)
 * - Legal/policy pages (2)
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  
  // Base domain
  const baseUrl = 'https://quicktoolshq.com';
  
  // ============================================================================
  // 📍 MAIN NAVIGATION PAGES (Priority: 1.0 - 0.6)
  // ============================================================================
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
      description: '🏠 Homepage - Main landing page'
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      description: '🛠️ Tools Index - All productivity tools'
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      description: '📝 Blog Index - All articles and guides'
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      description: '👋 About Page - Company information'
    },
  ];

  // ============================================================================
  // ⚖️ LEGAL & POLICY PAGES (Priority: 0.4)
  // ============================================================================
  const legalPages = [
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.4,
      description: '🔒 Privacy Policy - Data protection info'
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.4,
      description: '📄 Terms of Service - Usage terms'
    },
  ];

  // ============================================================================
  // 🛠️ PRODUCTIVITY TOOLS (Priority: 0.8) - High conversion value
  // ============================================================================
  const toolPages = [
    {
      url: `${baseUrl}/tools/bmi-calculator`,
      description: '⚖️ BMI Calculator - Body Mass Index tool'
    },
    {
      url: `${baseUrl}/tools/word-counter`,
      description: '📊 Word Counter - Text analysis tool'
    },
    {
      url: `${baseUrl}/tools/unit-converter`,
      description: '🔄 Unit Converter - Measurement conversions'
    },
    {
      url: `${baseUrl}/tools/text-case-converter`,
      description: '🔤 Text Case Converter - Text formatting'
    },
    {
      url: `${baseUrl}/tools/password-generator`,
      description: '🔐 Password Generator - Secure passwords'
    },
    {
      url: `${baseUrl}/tools/image-compressor`,
      description: '🖼️ Image Compressor - Optimize images'
    },
    {
      url: `${baseUrl}/tools/image-converter`,
      description: '🎨 Image Converter - Format conversion'
    },
    {
      url: `${baseUrl}/tools/pdf-compress`,
      description: '📄 PDF Compress - Reduce PDF size'
    },
    {
      url: `${baseUrl}/tools/pdf-compressor`,
      description: '📁 PDF Compressor - Advanced compression'
    },
    {
      url: `${baseUrl}/tools/pdf-converter`,
      description: '🔄 PDF Converter - Format conversion'
    },
  ].map(tool => ({
    url: tool.url,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    description: tool.description
  }));

  // ============================================================================
  // 📝 BLOG ARTICLES (Priority: 0.7) - Content marketing & SEO
  // ============================================================================
  const blogPosts = [
    {
      url: `${baseUrl}/blog/best-ai-writing-tools-content-generators-2025`,
      description: '🤖 AI Writing Tools Guide - Best content generators'
    },
    {
      url: `${baseUrl}/blog/best-free-online-image-compression-tools-2025`,
      description: '🖼️ Image Compression Guide - Free online tools'
    },
    {
      url: `${baseUrl}/blog/best-online-collaboration-tools-remote-teams-2025`,
      description: '👥 Collaboration Tools - Remote team solutions'
    },
    {
      url: `${baseUrl}/blog/essential-online-tools-professionals-2025`,
      description: '💼 Professional Tools - Essential online resources'
    },
    {
      url: `${baseUrl}/blog/how-to-merge-pdf-files-online-free-2025`,
      description: '📋 PDF Merge Guide - Free online methods'
    },
    {
      url: `${baseUrl}/blog/optimize-images-web-quality`,
      description: '⚡ Image Optimization - Web performance tips'
    },
    {
      url: `${baseUrl}/blog/pdf-tools-guide`,
      description: '📄 PDF Tools Guide - Complete overview'
    },
    {
      url: `${baseUrl}/blog/privacy-digital-age-data-safety`,
      description: '🔒 Digital Privacy - Data safety in 2025'
    },
    {
      url: `${baseUrl}/blog/text-processing-automation-tools-save-time-2025`,
      description: '⚡ Text Automation - Time-saving tools'
    },
    {
      url: `${baseUrl}/blog/ultimate-pdf-conversion-guide-2025`,
      description: '🔄 PDF Conversion Guide - Complete tutorial'
    },
  ].map(post => ({
    url: post.url,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    description: post.description
  }));

  // ============================================================================
  // 📊 SITEMAP SUMMARY & RETURN
  // ============================================================================
  const allPages = [
    ...mainPages,
    ...legalPages,
    ...toolPages,
    ...blogPosts,
  ];

  // Log sitemap stats for development
  if (process.env.NODE_ENV === 'development') {
    console.log(`📊 QuickToolsHQ Sitemap Generated:
    🏠 Main Pages: ${mainPages.length}
    ⚖️ Legal Pages: ${legalPages.length}
    🛠️ Tool Pages: ${toolPages.length}
    📝 Blog Posts: ${blogPosts.length}
    📄 Total Pages: ${allPages.length}
    🌐 Base URL: ${baseUrl}
    📅 Generated: ${currentDate.toISOString()}
    `);
  }

  // Return clean sitemap without description field (not part of MetadataRoute.Sitemap)
  return allPages.map(({ description, ...page }) => page);
}
