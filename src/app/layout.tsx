import type { Metadata } from "next";
import { Amethysta, Inter, Kdam_Thmor_Pro, Noto_Sans_Wancho, Stick } from "next/font/google";
import "./globals.css";
import { PageEmbeddingMismatchedContextError } from "pdf-lib";
import { text } from "stream/consumers";
import { BookHeart } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = { 
  title: {
    default: "QuickToolsHQ - Your HQ for Fast Online Tools",
    template: "%s | QuickToolsHQ"
  },
  description: "Access powerful calculators, converters, text utilities, and file processing tools all in one place. Fast, free, and always available at QuickToolsHQ.",
  keywords: "online tools, calculators, converters, text utilities, file tools, BMI calculator, unit converter, word counter, free online calculator, pdf compressor, image converter, text case converter, password generator, online productivity tools, web tools 2025, free utility tools, measurement converter, health calculator, text analysis tools",
  authors: [{ name: "QuickToolsHQ" }],
  creator: "QuickToolsHQ",
  publisher: "QuickToolsHQ",
  metadataBase: new URL('https://www.quicktoolshq.com'),
  alternates: {
    canonical: 'https://www.quicktoolshq.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/assets/logo.svg', type: 'image/svg+xml' },
      { url: '/assets/quicktoolLogo.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/quicktoolLogo.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/logo.svg', type: 'image/svg+xml' },
      { url: '/assets/quicktoolLogo.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/assets/logo.svg', color: '#00B5AD' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.quicktoolshq.com',
    title: 'QuickToolsHQ - Your HQ for Fast Online Tools',
    description: 'Access powerful calculators, converters, text utilities, and file processing tools all in one place. Fast, free, and always available.',
    siteName: 'QuickToolsHQ',
    images: [
      {
        url: 'https://www.quicktoolshq.com/assets/quicktoolLogo.png',
        width: 1200,
        height: 630,
        alt: 'QuickToolsHQ - Free Online Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuickToolsHQ - Your HQ for Fast Online Tools',
    description: 'Access powerful calculators, converters, text utilities, and file processing tools all in one place.',
    images: ['https://www.quicktoolshq.com/assets/quicktoolLogo.png'],
    creator: '@QuickToolsHQ',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  verification: {
    google: 'google-site-verification-code-here', // Replace with your actual Google Search Console verification code
    // yandex: 'yandex-verification-code-here', // Add if you want Yandex verification
    // bing: 'bing-verification-code-here', // Add if you want Bing verification
  },
  category: 'technology',
  classification: 'business',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'theme-color': '#00B5AD',
    'msapplication-TileColor': '#00B5AD',
    'format-detection': 'telephone=no'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.quicktoolshq.com/#website",
        "name": "QuickToolsHQ",
        "alternateName": "Quick Tools HQ",
        "description": "Access powerful calculators, converters, text utilities, and file processing tools all in one place. Fast, free, and always available.",
        "url": "https://www.quicktoolshq.com",
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.quicktoolshq.com/tools?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },
        "publisher": {
          "@id": "https://www.quicktoolshq.com/#organization"
        },
        "mainEntity": {
          "@id": "https://www.quicktoolshq.com/#webpage"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.quicktoolshq.com/#webpage",
        "url": "https://www.quicktoolshq.com",
        "name": "QuickToolsHQ - Free Online Tools & Calculators",
        "isPartOf": {
          "@id": "https://www.quicktoolshq.com/#website"
        },
        "about": {
          "@id": "https://www.quicktoolshq.com/#organization"
        },
        "primaryImageOfPage": {
          "@id": "https://www.quicktoolshq.com/#logo"
        },
        "datePublished": "2024-01-01T00:00:00+00:00",
        "dateModified": "2025-10-03T00:00:00+00:00",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.quicktoolshq.com"
            }
          ]
        }
      },
      {
        "@type": "Organization",
        "@id": "https://www.quicktoolshq.com/#organization",
        "name": "QuickToolsHQ",
        "alternateName": "Quick Tools HQ",
        "url": "https://www.quicktoolshq.com",
        "logo": {
          "@id": "https://www.quicktoolshq.com/#logo"
        },
        "image": {
          "@id": "https://www.quicktoolshq.com/#logo"
        },
        "description": "Provider of free online tools and utilities for productivity, calculations, and file processing.",
        "foundingDate": "2024-01-01",
        "knowsAbout": [
          "Online Tools",
          "Calculators", 
          "File Conversion",
          "Text Processing",
          "Image Optimization",
          "PDF Tools"
        ],
        "sameAs": [
          "https://twitter.com/QuickToolsHQ",
          "https://github.com/quicktoolshq"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Support",
          "email": "hello@quicktoolshq.com",
          "url": "https://www.quicktoolshq.com/about",
          "availableLanguage": "English"
        }
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.quicktoolshq.com/#logo",
        "url": "https://www.quicktoolshq.com/assets/quicktoolLogo.png",
        "contentUrl": "https://www.quicktoolshq.com/assets/quicktoolLogo.png",
        "width": 512,
        "height": 512,
        "caption": "QuickToolsHQ Logo",
        "encodingFormat": "image/png"
      },
      {
        "@type": "WebApplication",
        "@id": "https://www.quicktoolshq.com/#webapplication",
        "name": "QuickToolsHQ Online Tools",
        "alternateName": "Quick Tools Collection",
        "url": "https://www.quicktoolshq.com/tools",
        "description": "Free online tools including BMI calculator, word counter, unit converter, PDF tools, image compressor, and more productivity utilities",
        "applicationCategory": "UtilitiesApplication",
        "applicationSubCategory": "Productivity Tools",
        "operatingSystem": "Any",
        "browserRequirements": "Requires JavaScript. Compatible with Chrome, Firefox, Safari, Edge.",
        "softwareVersion": "1.0",
        "releaseNotes": "Latest version with enhanced tools and improved performance",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "priceValidUntil": "2026-12-31",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.6",
          "reviewCount": "127",
          "bestRating": "5",
          "worstRating": "1"
        },
        "featureList": [
          "BMI Calculator - Calculate Body Mass Index",
          "Word Counter - Count words, characters, and paragraphs",
          "Unit Converter - Convert between different units",
          "Text Case Converter - Change text case formats",
          "Password Generator - Create secure passwords",
          "PDF Compressor - Reduce PDF file size",
          "PDF Converter - Convert files to PDF format",
          "Image Compressor - Optimize image file size",
          "Image Converter - Convert between image formats"
        ],
        "screenshot": "https://www.quicktoolshq.com/assets/quicktoolLogo.png",
        "softwareHelp": "https://www.quicktoolshq.com/about",
        "provider": {
          "@id": "https://www.quicktoolshq.com/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Performance hints */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        {/* IndexNow API Key for Search Engine Real-time Indexing */}
        <meta name="IndexNow" content="4847ead0e24841db8a62b80bd0a762c9" />
        
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9WDMFWMTJJ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9WDMFWMTJJ');
            `,
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}