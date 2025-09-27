import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Homepage
    {
      url: 'https://quicktoolshq.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    
    // Main sections
    {
      url: 'https://quicktoolshq.com/tools',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://quicktoolshq.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://quicktoolshq.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // Legal pages
    {
      url: 'https://quicktoolshq.com/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: 'https://quicktoolshq.com/terms-of-service',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },

    // Tools - High priority for conversion
    {
      url: 'https://quicktoolshq.com/tools/bmi-calculator',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://quicktoolshq.com/tools/word-counter',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://quicktoolshq.com/tools/unit-converter',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://quicktoolshq.com/tools/text-case-converter',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://quicktoolshq.com/tools/password-generator',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://quicktoolshq.com/tools/image-compressor',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://quicktoolshq.com/tools/image-converter',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://quicktoolshq.com/tools/pdf-compress',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://quicktoolshq.com/tools/pdf-compressor',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://quicktoolshq.com/tools/pdf-converter',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Blog posts - Good for SEO and content marketing
    {
      url: 'https://quicktoolshq.com/blog/best-ai-writing-tools-content-generators-2025',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://quicktoolshq.com/blog/best-free-online-image-compression-tools-2025',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://quicktoolshq.com/blog/best-online-collaboration-tools-remote-teams-2025',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://quicktoolshq.com/blog/essential-online-tools-professionals-2025',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://quicktoolshq.com/blog/how-to-merge-pdf-files-online-free-2025',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://quicktoolshq.com/blog/optimize-images-web-quality',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://quicktoolshq.com/blog/pdf-tools-guide',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://quicktoolshq.com/blog/privacy-digital-age-data-safety',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://quicktoolshq.com/blog/text-processing-automation-tools-save-time-2025',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://quicktoolshq.com/blog/ultimate-pdf-conversion-guide-2025',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
