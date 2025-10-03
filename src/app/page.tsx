import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/Layout";

export default function Home() {
  const tools = [
    {
      name: 'BMI Calculator',
      description: 'Calculate your Body Mass Index and health status',
      href: '/tools/bmi-calculator',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      name: 'Word Counter',
      description: 'Count words, characters, and analyze text',
      href: '/tools/word-counter',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      name: 'Unit Converter',
      description: 'Convert between different units of measurement',
      href: '/tools/unit-converter',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      name: 'Text Case Converter',
      description: 'Convert text between different cases',
      href: '/tools/text-case-converter',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      )
    },
    {
      name: 'Password Generator',
      description: 'Generate secure passwords with custom options',
      href: '/tools/password-generator',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      name: 'Image Converter',
      description: 'Convert PNG to JPG and JPG to PNG with quality control',
      href: '/tools/image-converter',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'PDF Converter',
      description: 'Convert images to PDF and PDF to images',
      href: '/tools/pdf-converter',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      name: 'Image Compressor',
      description: 'Compress PNG, JPG images without quality loss',
      href: '/tools/image-compressor',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      name: 'PDF Compressor',
      description: 'Reduce PDF file size while maintaining quality',
      href: '/tools/pdf-compressor',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      )
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Hero Section with Modern Design */}
        <div className="relative bg-gradient-to-br from-[#00B5AD] via-[#009B94] to-[#008B82] text-white overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-48 h-48 bg-white rounded-full mix-blend-overlay filter blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-2000"></div>
          </div>
          
          {/* Geometric Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/20 rounded-lg rotate-45 animate-spin-slow"></div>
            <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-white/30 rounded-full animate-bounce-slow"></div>
            <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/10 rounded-lg rotate-12 animate-float"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="mb-8 animate-fade-in">
                <span className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium border border-white/30">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white mr-3"></span>
                  Free • Instant • No Signup Required
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-slide-up">
                <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  QuickTools HQ
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed animate-slide-up delay-500">
                Transform your workflow with our collection of lightning-fast, 
                professional-grade tools. Zero downloads, zero hassle.
              </p>
              
              <div className="mt-12 animate-slide-up delay-1000">
                <Link
                  href="#tools"
                  className="group inline-flex items-center px-8 py-4 bg-white text-[#00B5AD] font-bold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105"
                >
                  <span className="mr-3">Explore Tools</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Tools Grid */}
        <section id="tools" className="py-20 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, #00B5AD 2px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-[#4A5565] border border-gray-200 mb-6">
                <span className="w-2 h-2 bg-[#00B5AD] rounded-full mr-3 animate-pulse"></span>
                Choose Your Tool
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#4A5565] mb-6">
                <span className="bg-gradient-to-r from-[#00B5AD] to-[#008B82] bg-clip-text text-transparent">
                  Powerful Tools at Your Fingertips
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Click any tool below to start using it immediately. All tools work in your browser 
                with no setup required.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className="group block"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 overflow-hidden animate-fade-in-up min-h-[280px] flex flex-col">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00B5AD]/5 via-transparent to-[#008B82]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-[#00B5AD]/10 to-[#008B82]/10 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center mb-6">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#00B5AD] to-[#008B82] rounded-2xl flex items-center justify-center text-white text-3xl mr-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                            {tool.icon}
                          </div>
                          <div className="absolute -inset-1 bg-gradient-to-br from-[#00B5AD] to-[#008B82] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[#4A5565] group-hover:text-[#00B5AD] transition-colors duration-300">
                            {tool.name}
                          </h3>
                          <div className="w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-[#00B5AD] to-[#008B82] transition-all duration-500 mt-1"></div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed mb-6 flex-grow">
                        {tool.description}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center text-[#00B5AD] group-hover:text-[#009B94] transition-colors duration-300 font-medium">
                          <span className="mr-2">Try it now</span>
                          <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        
                        <div className="opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-6 h-6 text-[#00B5AD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00B5AD] to-transparent"></div>
          </div>
          
          {/* Floating Shapes */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-[#00B5AD]/10 to-[#008B82]/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-[#008B82]/10 to-[#00B5AD]/10 rounded-lg rotate-45 animate-float delay-1000"></div>
          
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-[#4A5565] border border-gray-200 mb-6">
                <span className="w-2 h-2 bg-[#00B5AD] rounded-full mr-3 animate-pulse"></span>
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#4A5565] mb-6">
                <span className="bg-gradient-to-r from-[#00B5AD] to-[#008B82] bg-clip-text text-transparent">
                  Built for the Modern Web
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Experience the perfect blend of speed, security, and simplicity. 
                Our tools are crafted for professionals who value efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-3xl">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#00B5AD] to-[#008B82] rounded-3xl flex items-center justify-center mx-auto shadow-xl">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#4A5565]">
                  Lightning Fast
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  No waiting, no loading screens. Our tools are optimized for instant results 
                  that save you precious time.
                </p>
              </div>
              
              <div className="text-center p-8 rounded-3xl">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#00B5AD] to-[#008B82] rounded-3xl flex items-center justify-center mx-auto shadow-xl">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#4A5565]">
                  100% Private
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your data never leaves your browser. We don&apos;t store, track, 
                  or analyze anything you do. Complete privacy guaranteed.
                </p>
              </div>
              
              <div className="text-center p-8 rounded-3xl">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#00B5AD] to-[#008B82] rounded-3xl flex items-center justify-center mx-auto shadow-xl">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#4A5565]">
                  Always Free
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  No subscriptions, no hidden fees, no limits. Professional tools 
                  that remain completely free forever.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Modern CTA Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#00B5AD] via-[#009B94] to-[#008B82] overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white rounded-full mix-blend-overlay filter blur-2xl animate-pulse delay-1000"></div>
            </div>
          </div>
          
          {/* Geometric Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-20 w-32 h-32 border border-white/20 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 border border-white/30 rounded-lg rotate-45 animate-bounce-slow"></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium text-white border border-white/30">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                Ready to get started?
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Workflow Today
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of professionals who have already discovered the power 
              of instant, reliable tools that just work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="#tools"
                className="group relative inline-flex items-center px-10 py-5 bg-white text-[#00B5AD] font-bold text-lg rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105"
              >
                <span className="mr-3">Start Using Tools</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute -inset-1 bg-white rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </Link>
              
              <div className="flex items-center space-x-4 text-white/90">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 relative">
                     <Image
                      src="/assets/user-1.jpg"
                      alt="User-1"
                      fill
                      className="rounded-full border-2 border-white/30 object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 relative">
                    <Image
                      src="/assets/user-2.jpg"
                      alt="User-2"
                      fill
                      className="rounded-full border-2 border-white/30 object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 relative">
                    <Image
                      src="/assets/user-3.jpg"
                      alt="User-3"
                      fill
                      className="rounded-full border-2 border-white/30 object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded-full border-2 border-white/30 backdrop-blur-md flex items-center justify-center text-sm font-bold">
                    +1k
                  </div>
                </div>
                <span className="text-sm font-medium">
                  Trusted by professionals worldwide
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
