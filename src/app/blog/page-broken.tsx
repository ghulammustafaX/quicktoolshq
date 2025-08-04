import Layout from '@/components/layout/Layout';
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
const BookIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const FireIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
  </svg>
);

const TrendingIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const ArrowRightIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

export default function BlogPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <BookIcon className="w-16 h-16 text-white/90" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                QuickToolsHQ Blog
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Expert insights, comprehensive guides, and tool reviews to supercharge your productivity
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                  <BookIcon className="w-4 h-4" />
                  10+ In-depth Guides
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                  <FireIcon className="w-4 h-4" />
                  Tool Reviews & Comparisons
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                  <TrendingIcon className="w-4 h-4" />
                  Productivity Tips
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Featured Post */}
          {featuredPost && (
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">✨ Featured Article</h2>
                <p className="text-xl text-gray-600">Our most comprehensive guide this month</p>
              </div>
              
              <Link href={`/blog/${featuredPost.slug}`}>
                <article className="group bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-700 cursor-pointer">
                  <div className="md:flex">
                    <div className={`md:w-3/5 h-80 md:h-96 bg-gradient-to-br ${featuredPost.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/20 to-black/60"></div>
                      
                      <div className="absolute top-6 left-6">
                        <div className="flex items-center gap-3">
                          <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                            <FireIcon className="w-4 h-4" />
                            FEATURED
                          </span>
                          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            🔥 TRENDING
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
                          <span>📖 {featuredPost.readTime}</span>
                          <span>📅 {featuredPost.date}</span>
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
                      <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-800 transition-colors">
                        <span>Read Full Article</span>
                        <ArrowRightIcon className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </section>
          )}

          {/* Blog Stats */}
          <section className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-blue-100">Expert Articles</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">50k+</div>
                <div className="text-purple-100">Monthly Readers</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-green-100">Tools Reviewed</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-orange-100">Satisfaction Rate</div>
              </div>
            </div>
          </section>

          {/* Category Filter */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 rounded-full border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300 font-medium"
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* Latest Articles */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">📚 Latest Articles</h2>
              <p className="text-xl text-gray-600">Stay updated with our latest insights and guides</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <article className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center text-white/90 text-xs gap-3">
                          <span>📖 {post.readTime}</span>
                          <span>📅 {post.date}</span>
                        </div>
                      </div>
                      
                      {/* Category Icon */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <BookIcon className="text-white" />
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
                        <span className="text-indigo-600 font-semibold group-hover:text-indigo-800 transition-colors">
                          Read More
                        </span>
                        <ArrowRightIcon className="text-indigo-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">📬 Never Miss an Update!</h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Get the latest productivity tips, tool reviews, and exclusive guides delivered to your inbox weekly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50"
                />
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-indigo-200 mt-4">Join 50,000+ productivity enthusiasts. Unsubscribe anytime.</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
