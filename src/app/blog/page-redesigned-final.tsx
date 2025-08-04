"use client";

import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { useState } from 'react';

// Blog Post Data
const blogPosts = [
  {
    slug: 'best-ai-writing-tools-content-generators-2025',
    title: 'Best AI Writing Tools & Content Generators 2025: Boost Productivity by 500%',
    excerpt: 'Discover 12 cutting-edge AI writing tools that revolutionize content creation. Complete analysis of features, pricing, and real-world performance tests.',
    category: 'AI Tools',
    readTime: '16 min read',
    date: 'January 28, 2025',
    tags: ['AI', 'Writing', 'Productivity', 'Content Creation'],
    featured: true
  },
  {
    slug: 'best-free-online-image-compression-tools-2025',
    title: 'Best Free Online Image Compression Tools 2025: Reduce File Size by 80%',
    excerpt: 'Complete guide to the best free image compression tools. Reduce file sizes by up to 80% while maintaining quality.',
    category: 'Image Tools',
    readTime: '12 min read',
    date: 'January 25, 2025',
    tags: ['Images', 'Compression', 'Web Performance']
  },
  {
    slug: 'best-online-collaboration-tools-remote-teams-2025',
    title: 'Best Online Collaboration Tools for Remote Teams 2025',
    excerpt: 'Discover the top collaboration tools that keep remote teams connected and productive in 2025.',
    category: 'Productivity',
    readTime: '14 min read',
    date: 'January 22, 2025',
    tags: ['Collaboration', 'Remote Work', 'Team Management']
  },
  {
    slug: 'essential-online-tools-professionals-2025',
    title: 'Essential Online Tools for Professionals 2025: Complete Toolkit',
    excerpt: 'The ultimate collection of essential online tools every professional needs to boost productivity and efficiency.',
    category: 'Professional Tools',
    readTime: '18 min read',
    date: 'January 20, 2025',
    tags: ['Professional', 'Tools', 'Productivity']
  },
  {
    slug: 'how-to-merge-pdf-files-online-free-2025',
    title: 'How to Merge PDF Files Online Free 2025: Step-by-Step Guide',
    excerpt: 'Learn how to merge PDF files online for free with our comprehensive step-by-step guide.',
    category: 'PDF Tools',
    readTime: '8 min read',
    date: 'January 18, 2025',
    tags: ['PDF', 'File Management', 'Tutorial']
  },
  {
    slug: 'optimize-images-web-quality',
    title: 'Optimize Images for Web Quality: Complete Performance Guide',
    excerpt: 'Master image optimization for web performance. Learn formats, compression techniques, and best practices.',
    category: 'Web Performance',
    readTime: '15 min read',
    date: 'January 15, 2025',
    tags: ['Web Performance', 'Images', 'SEO']
  },
  {
    slug: 'pdf-tools-guide',
    title: 'PDF Tools Guide: Master Document Management in 2025',
    excerpt: 'Complete guide to PDF tools and document management. Convert, compress, merge, and optimize PDFs like a pro.',
    category: 'Document Tools',
    readTime: '20 min read',
    date: 'January 12, 2025',
    tags: ['PDF', 'Document Management', 'Productivity']
  },
  {
    slug: 'privacy-digital-age-data-safety',
    title: 'Privacy in Digital Age: Data Safety & Protection Guide 2025',
    excerpt: 'Comprehensive guide to digital privacy and data protection. Learn essential security practices for 2025.',
    category: 'Security',
    readTime: '25 min read',
    date: 'January 10, 2025',
    tags: ['Privacy', 'Security', 'Data Protection']
  },
  {
    slug: 'text-processing-automation-tools-save-time-2025',
    title: 'Text Processing Automation Tools Save Time 2025',
    excerpt: 'Discover powerful text processing and automation tools that save hours of manual work daily.',
    category: 'Automation',
    readTime: '11 min read',
    date: 'January 8, 2025',
    tags: ['Automation', 'Text Processing', 'Time Saving']
  },
  {
    slug: 'ultimate-pdf-conversion-guide-2025',
    title: 'Ultimate PDF Conversion Guide 2025: All Formats Covered',
    excerpt: 'The complete guide to PDF conversion. Convert to/from Word, Excel, images, and more with ease.',
    category: 'PDF Tools',
    readTime: '22 min read',
    date: 'January 5, 2025',
    tags: ['PDF', 'Conversion', 'File Formats']
  }
];

// Get featured and regular posts
const featuredPost = blogPosts.find(post => post.featured);
const regularPosts = blogPosts.filter(post => !post.featured);

// SVG Icons - Smaller sizes for better design
const ClockIcon = ({ className = "w-3 h-3" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CalendarIcon = ({ className = "w-3 h-3" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const FireIcon = ({ className = "w-3 h-3" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
  </svg>
);

const ChevronRightIcon = ({ className = "w-3 h-3" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const BookOpenIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

export default function BlogPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header - Matching tools page style */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">QuickToolsHQ Blog</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Expert insights, comprehensive guides, and tool reviews to supercharge your productivity. 
            Stay updated with the latest trends in online tools and workflow automation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold border border-green-200">
              ✓ Expert Insights
            </span>
            <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200">
              ✓ In-depth Guides
            </span>
            <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold border border-purple-200">
              ✓ Tool Reviews
            </span>
          </div>
        </div>

        {/* Featured Article - Smaller size */}
        {featuredPost && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Featured Article</h2>
              <p className="text-lg text-gray-600">Our most comprehensive guide this month</p>
            </div>
            
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="group bg-gradient-to-br from-[#00B5AD] to-[#009B94] text-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/4 mb-6 md:mb-0 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 text-white/90 group-hover:text-white transition-colors duration-300 animate-pulse">
                      <BookOpenIcon className="w-full h-full" />
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <FireIcon className="text-white" />
                        FEATURED
                      </span>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4 md:pl-8 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-white/90 transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-white/90 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                    
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 text-sm">
                      <span className="flex items-center gap-1 text-white/80">
                        <ClockIcon className="text-white" />
                        {featuredPost.readTime}
                      </span>
                      <span className="flex items-center gap-1 text-white/80">
                        <CalendarIcon className="text-white" />
                        {featuredPost.date}
                      </span>
                      <span className="bg-white/20 px-2 py-1 rounded text-xs">{featuredPost.category}</span>
                    </div>
                    
                    <div className="inline-flex items-center bg-white text-[#00B5AD] px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 group-hover:scale-105 shadow-lg">
                      <span>Read Full Article</span>
                      <ChevronRightIcon className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Latest Articles - Matching tools page grid style */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Choose Your Article</h2>
            <p className="text-lg text-gray-600">Explore our comprehensive collection of guides and insights</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="bg-gradient-to-br from-[#00B5AD] to-[#009B94] p-6 text-white relative overflow-hidden">
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-4 text-white/90 group-hover:text-white transition-colors duration-300">
                        <BookOpenIcon className="w-full h-full" />
                      </div>
                      <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-white/90 transition-colors">
                        {post.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center justify-center gap-4 text-xs text-white/80">
                      <span className="flex items-center gap-1">
                        <ClockIcon className="text-white" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="text-white" />
                        {post.date}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-[#00B5AD] font-semibold group-hover:text-[#008B82] transition-colors">
                        Read More
                      </span>
                      <ChevronRightIcon className="text-[#00B5AD] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup - Keep same as requested */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-10"></div>
              <div className="relative px-8 py-12 md:px-16 md:py-16">
                <div className="max-w-3xl mx-auto text-center">
                  <div className="mb-8">
                    <div className="w-16 h-16 mx-auto mb-6 bg-[#00B5AD] rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stay in the Loop</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                      Get the latest productivity tips, tool reviews, and exclusive guides delivered straight to your inbox. No spam, just value.
                    </p>
                  </div>
                  
                  <div className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 px-6 py-4 border border-gray-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00B5AD] focus:border-transparent"
                      />
                      <button className="bg-[#00B5AD] text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                        Subscribe
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                      Join 50,000+ productivity enthusiasts. Unsubscribe anytime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
