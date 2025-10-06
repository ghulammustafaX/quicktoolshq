import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Your Data is Safe | QuickToolsHQ',
  description: 'Our comprehensive privacy policy explains how we protect your data. All processing happens in your browser - we don\'t collect, store, or share any personal information.',
  keywords: 'privacy policy, data protection, user privacy, no tracking, secure tools, data safety',
  alternates: {
  canonical: 'https://www.quicktoolshq.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy - Your Data is Safe | QuickToolsHQ',
    description: 'Learn about our commitment to privacy. All processing happens in your browser.',
  url: 'https://www.quicktoolshq.com/privacy-policy',
    type: 'website',
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
