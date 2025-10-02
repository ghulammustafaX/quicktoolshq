import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Expert Guides & Tutorials | QuickToolsHQ',
  description: 'Discover expert guides, tutorials, and insights about online tools, productivity, and digital workflows. Learn how to make the most of free online tools.',
  keywords: 'online tools blog, productivity guides, tool tutorials, tech guides, digital workflow, tool reviews, productivity tips',
  alternates: {
    canonical: 'https://quicktoolshq.com/blog',
  },
  openGraph: {
    title: 'Blog - Expert Guides & Tutorials | QuickToolsHQ',
    description: 'Discover expert guides, tutorials, and insights about online tools and productivity.',
    url: 'https://quicktoolshq.com/blog',
    type: 'website',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
