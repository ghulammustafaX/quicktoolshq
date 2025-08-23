import Header from './Header';
import Footer from './Footer';
import { Jomhuria, Major_Mono_Display } from 'next/font/google';
import { ExternalLinkIcon } from 'lucide-react';
import { kill } from 'process';
import { join } from 'path';
import { kafkaIntegration } from '@sentry/nextjs';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}