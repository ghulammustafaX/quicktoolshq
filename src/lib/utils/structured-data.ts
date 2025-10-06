/**
 * Structured Data Utilities for QuickToolsHQ
 * Generates page-specific schema markup optimized for Google & Bing
 */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateWebPageSchema(
  url: string,
  name: string,
  description: string,
  breadcrumbs?: BreadcrumbItem[],
  dateModified?: string
) {
  const schema: any = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    "url": url,
    "name": name,
    "description": description,
    "isPartOf": {
      "@id": "https://www.quicktoolshq.com/#website"
    },
    "about": {
      "@id": "https://www.quicktoolshq.com/#organization"
    },
    "dateModified": dateModified || new Date().toISOString()
  };

  if (breadcrumbs) {
    schema.breadcrumb = generateBreadcrumbSchema(breadcrumbs);
  }

  return schema;
}

export function generateSoftwareApplicationSchema(
  name: string,
  url: string,
  description: string,
  features: string[]
) {
  return {
    "@type": "SoftwareApplication",
    "@id": `${url}#software`,
    "name": name,
    "url": url,
    "description": description,
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript. Compatible with Chrome, Firefox, Safari, Edge.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "featureList": features,
    "provider": {
      "@id": "https://www.quicktoolshq.com/#organization"
    }
  };
}

export function generateHowToSchema(
  name: string,
  description: string,
  steps: Array<{name: string; text: string}>,
  url: string
) {
  return {
    "@type": "HowTo",
    "name": name,
    "description": description,
    "url": url,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  };
}

export function generateFAQSchema(faqs: Array<{question: string; answer: string}>) {
  return {
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  datePublished: string,
  dateModified: string,
  imageUrl?: string
) {
  const schema: any = {
    "@type": "Article",
    "@id": `${url}#article`,
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@id": "https://www.quicktoolshq.com/#organization"
    },
    "publisher": {
      "@id": "https://www.quicktoolshq.com/#organization"
    },
    "mainEntityOfPage": {
      "@id": url
    }
  };

  if (imageUrl) {
    schema.image = {
      "@type": "ImageObject",
      "url": imageUrl
    };
  }

  return schema;
}

// Tool-specific schema generators
export const TOOL_SCHEMAS = {
  "bmi-calculator": () => generateSoftwareApplicationSchema(
    "BMI Calculator",
    "https://www.quicktoolshq.com/tools/bmi-calculator",
    "Calculate your Body Mass Index (BMI) instantly with our free online calculator. Determine if your weight is healthy based on height and weight.",
    ["BMI Calculation", "Health Assessment", "Weight Analysis", "Body Mass Index"]
  ),

  "word-counter": () => generateSoftwareApplicationSchema(
    "Word Counter",
    "https://www.quicktoolshq.com/tools/word-counter",
    "Count words, characters, paragraphs, and sentences in your text. Free online word counting tool for writers and students.",
    ["Word Count", "Character Count", "Text Analysis", "Writing Tools"]
  ),

  "unit-converter": () => generateSoftwareApplicationSchema(
    "Unit Converter",
    "https://www.quicktoolshq.com/tools/unit-converter",
    "Convert between different units of measurement including length, weight, temperature, and volume. Fast and accurate conversions.",
    ["Unit Conversion", "Measurement Tools", "Length Converter", "Weight Converter"]
  ),

  "pdf-compressor": () => generateSoftwareApplicationSchema(
    "PDF Compressor",
    "https://www.quicktoolshq.com/tools/pdf-compressor",
    "Compress PDF files online for free. Reduce PDF file size while maintaining quality. Secure browser-based compression.",
    ["PDF Compression", "File Size Reduction", "PDF Optimization", "Document Tools"]
  )
};