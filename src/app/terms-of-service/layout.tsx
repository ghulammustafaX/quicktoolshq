import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Usage Terms | QuickToolsHQ',
  description: 'Read our terms of service to understand your rights and responsibilities when using QuickToolsHQ. Free tools with clear, fair usage terms.',
  keywords: 'terms of service, usage terms, terms and conditions, user agreement, service terms',
  alternates: {
  canonical: 'https://www.quicktoolshq.com/terms-of-service',
  },
  openGraph: {
    title: 'Terms of Service - Usage Terms | QuickToolsHQ',
    description: 'Read our terms of service to understand your rights and responsibilities.',
  url: 'https://www.quicktoolshq.com/terms-of-service',
    type: 'website',
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
