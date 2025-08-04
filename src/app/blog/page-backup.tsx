"use client";

import Layout from '../../components/layout/Layout';
import Link from 'next/link';

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

// SVG Icons
const ChevronRightIcon = ({ className = "w-2 h-2" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const BookOpenIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const SparklesIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const DocumentTextIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const StarIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const TrendingUpIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

export default function BlogPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
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

        {/* Featured Article */}
        {featuredPost && (
          <div className="mb-16">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 border border-gray-200">
                <span className="w-2 h-2 bg-[#00B5AD] rounded-full mr-3 animate-pulse"></span>
                Featured Article
              </div>
            </div>
            
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="group bg-gradient-to-br from-[#00B5AD] to-[#009B94] text-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className="w-full h-full rounded-full border-4 border-white transform rotate-45 animate-spin-slow"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10 animate-pulse">
                  <SparklesIcon className="w-full h-full text-white" />
                </div>
                <div className="absolute top-1/2 right-8 w-16 h-16 opacity-5">
                  <TrendingUpIcon className="w-full h-full text-white animate-bounce" />
                </div>
                
                <div className="flex flex-col md:flex-row items-center relative z-10">
                  <div className="md:w-1/4 mb-6 md:mb-0 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 text-white/90 group-hover:text-white transition-colors duration-300 animate-bounce">
                      <BookOpenIcon className="w-full h-full" />
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                        TRENDING
                      </span>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4 md:pl-8 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-white/90 transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-white/90 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                    
                    {/* Tags with featured badge */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                      <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-pulse">
                        <StarIcon className="w-3 h-3" />
                        FEATURED
                      </span>
                      {featuredPost.tags.map((tag, index) => (
                        <span key={index} className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Enhanced button */}
                    <div className="group/button inline-block">
                      <button className="relative inline-flex items-center bg-white text-[#00B5AD] px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 overflow-hidden">
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-1000"></div>
                        
                        <span className="relative z-10 mr-3">Read Full Article</span>
                        
                        {/* Enhanced arrow */}
                        <div className="relative z-10 w-7 h-7 bg-[#00B5AD] rounded-full flex items-center justify-center group-hover/button:rotate-12 group-hover/button:scale-110 transition-all duration-300">
                          <ChevronRightIcon className="text-white group-hover/button:translate-x-0.5 transition-transform" />
                        </div>
                        
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-2xl bg-[#00B5AD]/20 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300 blur-sm"></div>
                        
                        {/* Border animation */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-[#00B5AD]/30 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Latest Articles */}
        <div className="mb-16">
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 border border-gray-200">
              <span className="w-2 h-2 bg-[#00B5AD] rounded-full mr-3 animate-pulse"></span>
              Choose Your Article
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="bg-gradient-to-br from-[#00B5AD] to-[#009B94] p-6 text-white relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white/5 rounded-full"></div>
                    
                    {/* Number badge */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                    
                    {/* Icon */}
                    <div className="absolute bottom-2 right-2 opacity-20 group-hover:opacity-30 transition-opacity">
                      <DocumentTextIcon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="text-center pt-8">
                      <div className="w-10 h-10 mx-auto mb-4 text-white/90 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        <BookOpenIcon className="w-full h-full" />
                      </div>
                      <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-white/90 transition-colors">
                        {post.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs hover:bg-[#00B5AD] hover:text-white transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-[#00B5AD] font-semibold group-hover:text-[#008B82] transition-colors">
                        Read More
                      </span>
                      <div className="w-7 h-7 bg-[#00B5AD] rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                        <ChevronRightIcon className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
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
