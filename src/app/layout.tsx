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
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quicktoolshq.com',
    title: 'QuickToolsHQ - Your HQ for Fast Online Tools',
    description: 'Access powerful calculators, converters, text utilities, and file processing tools all in one place. Fast, free, and always available.',
    siteName: 'QuickToolsHQ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuickToolsHQ - Your HQ for Fast Online Tools',
    description: 'Access powerful calculators, converters, text utilities, and file processing tools all in one place.',
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
    google: 'google-site-verification-code-here', // Google Search Console verification code
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "QuickToolsHQ",
    "description": "Access powerful calculators, converters, text utilities, and file processing tools all in one place. Fast, free, and always available.",
    "url": "https://quicktoolshq.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://quicktoolshq.com/tools/{search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "QuickToolsHQ",
      "url": "https://quicktoolshq.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://quicktoolshq.com/assets/logo.svg"
      }
    }
  };

  return (
    <html lang="en">
      <head>
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
        
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/assets/logo.svg" />
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