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
    gradient: 'from-purple-500 to-pink-500',
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
    gradient: 'from-blue-500 to-cyan-500',
    tags: ['Images', 'Compression', 'Web Performance']
  },
  {
    slug: 'best-online-collaboration-tools-remote-teams-2025',
    title: 'Best Online Collaboration Tools for Remote Teams 2025',
    excerpt: 'Discover the top collaboration tools that keep remote teams connected and productive in 2025.',
    category: 'Productivity',
    readTime: '14 min read',
    date: 'January 22, 2025',
    gradient: 'from-green-500 to-emerald-500',
    tags: ['Collaboration', 'Remote Work', 'Team Management']
  },
  {
    slug: 'essential-online-tools-professionals-2025',
    title: 'Essential Online Tools for Professionals 2025: Complete Toolkit',
    excerpt: 'The ultimate collection of essential online tools every professional needs to boost productivity and efficiency.',
    category: 'Professional Tools',
    readTime: '18 min read',
    date: 'January 20, 2025',
    gradient: 'from-orange-500 to-red-500',
    tags: ['Professional', 'Tools', 'Productivity']
  },
  {
    slug: 'how-to-merge-pdf-files-online-free-2025',
    title: 'How to Merge PDF Files Online Free 2025: Step-by-Step Guide',
    excerpt: 'Learn how to merge PDF files online for free with our comprehensive step-by-step guide.',
    category: 'PDF Tools',
    readTime: '8 min read',
    date: 'January 18, 2025',
    gradient: 'from-indigo-500 to-purple-500',
    tags: ['PDF', 'File Management', 'Tutorial']
  },
  {
    slug: 'optimize-images-web-quality',
    title: 'Optimize Images for Web Quality: Complete Performance Guide',
    excerpt: 'Master image optimization for web performance. Learn formats, compression techniques, and best practices.',
    category: 'Web Performance',
    readTime: '15 min read',
    date: 'January 15, 2025',
    gradient: 'from-teal-500 to-blue-500',
    tags: ['Web Performance', 'Images', 'SEO']
  },
  {
    slug: 'pdf-tools-guide',
    title: 'PDF Tools Guide: Master Document Management in 2025',
    excerpt: 'Complete guide to PDF tools and document management. Convert, compress, merge, and optimize PDFs like a pro.',
    category: 'Document Tools',
    readTime: '20 min read',
    date: 'January 12, 2025',
    gradient: 'from-rose-500 to-pink-500',
    tags: ['PDF', 'Document Management', 'Productivity']
  },
  {
    slug: 'privacy-digital-age-data-safety',
    title: 'Privacy in Digital Age: Data Safety & Protection Guide 2025',
    excerpt: 'Comprehensive guide to digital privacy and data protection. Learn essential security practices for 2025.',
    category: 'Security',
    readTime: '25 min read',
    date: 'January 10, 2025',
    gradient: 'from-gray-600 to-gray-800',
    tags: ['Privacy', 'Security', 'Data Protection']
  },
  {
    slug: 'text-processing-automation-tools-save-time-2025',
    title: 'Text Processing Automation Tools Save Time 2025',
    excerpt: 'Discover powerful text processing and automation tools that save hours of manual work daily.',
    category: 'Automation',
    readTime: '11 min read',
    date: 'January 8, 2025',
    gradient: 'from-amber-500 to-orange-500',
    tags: ['Automation', 'Text Processing', 'Time Saving']
  },
  {
    slug: 'ultimate-pdf-conversion-guide-2025',
    title: 'Ultimate PDF Conversion Guide 2025: All Formats Covered',
    excerpt: 'The complete guide to PDF conversion. Convert to/from Word, Excel, images, and more with ease.',
    category: 'PDF Tools',
    readTime: '22 min read',
    date: 'January 5, 2025',
    gradient: 'from-violet-500 to-purple-500',
    tags: ['PDF', 'Conversion', 'File Formats']
  }
];

// Get featured and regular posts
const featuredPost = blogPosts.find(post => post.featured);
const regularPosts = blogPosts.filter(post => !post.featured);

// Get unique categories
const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

// SVG Icons
const ClockIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CalendarIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const FireIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
  </svg>
);

const ChevronRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? regularPosts 
    : regularPosts.filter(post => post.category === selectedCategory);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Category Filter - Moved to top */}
        <section className="bg-white py-12 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full border-2 font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'text-white border-[#00B5AD] bg-[#00B5AD]'
                      : 'text-[#00B5AD] border-[#00B5AD] hover:text-white hover:bg-[#00B5AD]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8" style={{ color: '#00B5AD' }}>
              QuickToolsHQ Blog
            </h1>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Featured Post */}
          {featuredPost && (
            <section className="mb-20">
              <Link href={`/blog/${featuredPost.slug}`}>
                <article className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-700 cursor-pointer">
                  <div className="md:flex">
                    <div className={`md:w-3/5 h-80 md:h-96 bg-gradient-to-br ${featuredPost.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/20 to-black/60"></div>
                      
                      <div className="absolute top-6 left-6">
                        <div className="flex items-center gap-3">
                          <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                            <FireIcon className="text-white" />
                            FEATURED
                          </span>
                          <span style={{ backgroundColor: '#00B5AD' }} className="text-white px-3 py-1 rounded-full text-xs font-bold">
                            TRENDING
                          </span>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {featuredPost.tags.map((tag, index) => (
                            <span key={index} className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center text-white/90 text-sm gap-4">
                          <span className="flex items-center gap-1">
                            <ClockIcon className="text-white" />
                            {featuredPost.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <CalendarIcon className="text-white" />
                            {featuredPost.date}
                          </span>
                          <span className="bg-white/20 px-2 py-1 rounded text-xs">{featuredPost.category}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center">
                      <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-indigo-600 transition-colors">
                        {featuredPost.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center text-[#00B5AD] font-semibold group-hover:text-indigo-800 transition-colors">
                        <span>Read Full Article</span>
                        <ChevronRightIcon className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </section>
          )}

          {/* Latest Articles */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Article</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <article className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center text-white/90 text-xs gap-3">
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
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
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
                        <span className="text-[#00B5AD] font-semibold group-hover:opacity-80 transition-colors">
                          Read More
                        </span>
                        <ChevronRightIcon className="text-[#00B5AD] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>

          {/* Newsletter Signup - Improved Design */}
          <section className="mb-16">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-10"></div>
                <div className="relative px-8 py-12 md:px-16 md:py-16">
                  <div className="max-w-3xl mx-auto text-center">
                    <div className="mb-8">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00B5AD' }}>
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
                        <button 
                          className="text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                          style={{ backgroundColor: '#00B5AD' }}
                        >
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
      </div>
    </Layout>
  );
}
