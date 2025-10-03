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
  metadataBase: new URL('https://quicktoolshq.com'),
  alternates: {
    canonical: 'https://quicktoolshq.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/assets/logo.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/assets/logo.svg', type: 'image/svg+xml' },
    ],
    other: [
      { rel: 'mask-icon', url: '/assets/logo.svg', color: '#00B5AD' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quicktoolshq.com',
    title: 'QuickToolsHQ - Your HQ for Fast Online Tools',
    description: 'Access powerful calculators, converters, text utilities, and file processing tools all in one place. Fast, free, and always available.',
    siteName: 'QuickToolsHQ',
    images: [
      {
        url: 'https://quicktoolshq.com/assets/logo.svg',
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
    images: ['https://quicktoolshq.com/assets/logo.svg'],
    creator: '@QuickToolsHQ',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code-here', // Replace with your actual Google Search Console verification code
  },
  category: 'technology',
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
        "@id": "https://quicktoolshq.com/#website",
        "name": "QuickToolsHQ",
        "description": "Access powerful calculators, converters, text utilities, and file processing tools all in one place. Fast, free, and always available.",
        "url": "https://quicktoolshq.com",
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://quicktoolshq.com/tools/{search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },
        "publisher": {
          "@id": "https://quicktoolshq.com/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://quicktoolshq.com/#organization",
        "name": "QuickToolsHQ",
        "url": "https://quicktoolshq.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://quicktoolshq.com/assets/logo.svg",
          "width": 512,
          "height": 512
        },
        "sameAs": [
          "https://twitter.com/QuickToolsHQ",
          "https://github.com/quicktoolshq"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Support",
          "email": "hello@quicktoolshq.com",
          "url": "https://quicktoolshq.com/about"
        }
      },
      {
        "@type": "WebApplication",
        "name": "QuickToolsHQ Online Tools",
        "url": "https://quicktoolshq.com/tools",
        "description": "Free online tools including BMI calculator, word counter, unit converter, PDF tools, and more",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.6",
          "reviewCount": "127",
          "bestRating": "5",
          "worstRating": "1"
        },
        "featureList": [
          "BMI Calculator",
          "Word Counter",
          "Unit Converter",
          "Text Case Converter",
          "Password Generator",
          "PDF Converter",
          "Image Compressor",
          "Image Converter"
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
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