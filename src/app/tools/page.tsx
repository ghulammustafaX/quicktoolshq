import Layout from '@/components/layout/Layout';
import Link from 'next/link';

// SVG Icon Components

const DocumentIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ConvertIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>
);

const SecurityIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const FileIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const UtilityIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const HeartIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const MoneyIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
);

export default function ToolsPage() {
  const tools = [
    {
      name: 'BMI Calculator',
      description: 'Calculate your Body Mass Index and understand your weight status with detailed health insights',
      href: '/tools/bmi-calculator',
      category: 'Health',
      icon: HeartIcon
    },
    {
      name: 'Word Counter',
      description: 'Count words, characters, paragraphs, and analyze text statistics with reading time estimates',
      href: '/tools/word-counter',
      category: 'Text',
      icon: DocumentIcon
    },
    {
      name: 'Unit Converter',
      description: 'Convert between different units of measurement with precision and accuracy',
      href: '/tools/unit-converter',
      category: 'Conversion',
      icon: ConvertIcon
    },
    {
      name: 'Text Case Converter',
      description: 'Transform text to uppercase, lowercase, camelCase, and multiple other formats',
      href: '/tools/text-case-converter',
      category: 'Text',
      icon: DocumentIcon
    },
    {
      name: 'Password Generator',
      description: 'Generate secure, cryptographically strong passwords with custom complexity options',
      href: '/tools/password-generator',
      category: 'Security',
      icon: SecurityIcon
    },
    {
      name: 'PDF Converter',
      description: 'Convert images to PDF with advanced layout options and professional formatting',
      href: '/tools/pdf-converter',
      category: 'Files',
      icon: FileIcon
    },
    {
      name: 'PDF Compressor',
      description: 'Reduce PDF file size while maintaining optimal quality and readability',
      href: '/tools/pdf-compress',
      category: 'Files',
      icon: FileIcon
    },
    {
      name: 'Image Converter',
      description: 'Convert between different image formats (PNG, JPG, WebP) with quality controls',
      href: '/tools/image-converter',
      category: 'Files',
      icon: FileIcon
    },
    {
      name: 'Image Compressor',
      description: 'Optimize and compress images to reduce file size without quality loss',
      href: '/tools/image-compressor',
      category: 'Files',
      icon: FileIcon
    },
    {
      name: 'QR Code Generator',
      description: 'Create customizable QR codes for text, URLs, and business applications',
      href: '/tools/qr-generator',
      category: 'Utilities',
      icon: UtilityIcon,
      comingSoon: true
    },
    {
      name: 'Calorie Calculator',
      description: 'Calculate daily caloric needs and track nutrition goals with personalized recommendations',
      href: '/tools/calorie-calculator',
      category: 'Health',
      icon: HeartIcon,
      comingSoon: true
    },
    {
      name: 'Loan Calculator',
      description: 'Calculate loan payments, interest rates, and amortization schedules with detailed breakdowns',
      href: '/tools/loan-calculator',
      category: 'Finance',
      icon: MoneyIcon,
      comingSoon: true
    }
  ];

  const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    'Health': HeartIcon,
    'Text': DocumentIcon,
    'Conversion': ConvertIcon,
    'Security': SecurityIcon,
    'Files': FileIcon,
    'Utilities': UtilityIcon,
    'Finance': MoneyIcon
  };

  const categories = [...new Set(tools.map(tool => tool.category))];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">Professional Online Tools</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive collection of professional-grade online tools. Built for productivity, 
            privacy, and performance. No registration required, completely free forever.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold border border-green-200">
              ✓ No Registration Required
            </span>
            <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200">
              ✓ Privacy Protected
            </span>
            <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold border border-purple-200">
              ✓ Always Free
            </span>
          </div>
        </div>

        {/* Featured Tools */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Featured Tools</h2>
            <p className="text-lg text-gray-600">Our most popular and powerful tools</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools
              .filter(tool => ['PDF Converter', 'Word Counter', 'Unit Converter'].includes(tool.name))
              .map(tool => {
                const IconComponent = tool.icon;
                return (
                  <div
                    key={tool.name}
                    className="group bg-gradient-to-br from-[#00B5AD] to-[#009B94] text-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-6 text-white/90 group-hover:text-white transition-colors duration-300">
                        <IconComponent className="w-full h-full" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 tracking-tight">{tool.name}</h3>
                      <p className="text-white/90 mb-8 leading-relaxed">{tool.description}</p>
                      <Link 
                        href={tool.href} 
                        className="inline-flex items-center bg-white text-[#00B5AD] px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 group-hover:scale-105 shadow-lg"
                      >
                        Try Now
                        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Tools by Category */}
        {categories.map(category => {
          const CategoryIcon = categoryIcons[category];
          return (
            <div key={category} className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 text-[#00B5AD] mr-4">
                  <CategoryIcon className="w-full h-full" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{category} Tools</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tools
                  .filter(tool => tool.category === category)
                  .map(tool => {
                    const IconComponent = tool.icon;
                    return (
                      <div
                        key={tool.name}
                        className={`group bg-white rounded-xl shadow-sm border border-gray-100 p-8 transition-all duration-300 ${
                          tool.comingSoon 
                            ? 'opacity-75 cursor-not-allowed' 
                            : 'hover:shadow-xl hover:-translate-y-1 cursor-pointer'
                        }`}
                      >
                        <div className="text-center">
                          <div className={`w-12 h-12 mx-auto mb-6 transition-colors duration-300 ${
                            tool.comingSoon ? 'text-gray-400' : 'text-[#00B5AD] group-hover:text-[#009B94]'
                          }`}>
                            <IconComponent className="w-full h-full" />
                          </div>
                          <h3 className="text-xl font-bold mb-3 text-gray-900 tracking-tight flex items-center justify-center gap-2">
                            {tool.name}
                            {tool.comingSoon && (
                              <span className="text-xs bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">
                                Coming Soon
                              </span>
                            )}
                          </h3>
                          <p className="text-gray-600 mb-6 leading-relaxed">{tool.description}</p>
                          {tool.comingSoon ? (
                            <span className="text-gray-400 font-medium">
                              Available Soon
                            </span>
                          ) : (
                            <Link 
                              href={tool.href} 
                              className="inline-flex items-center text-[#00B5AD] font-semibold hover:text-[#009B94] transition-colors duration-300 group-hover:underline"
                            >
                              Use Tool
                              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </Link>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Need a Specific Tool?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We&apos;re constantly innovating and adding new tools based on user feedback. 
            Let us know what productivity tool you need next!
          </p>
          <a 
            href="mailto:hello@quicktoolshq.com" 
            className="inline-flex items-center bg-[#00B5AD] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#009B94] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Request a Tool
          </a>
        </div>
      </div>
    </Layout>
  );
}

export const metadata = {
  title: 'Professional Online Tools - Calculators, Converters & Utilities | QuickToolsHQ',
  description: 'Access our comprehensive collection of professional-grade online tools including PDF converters, calculators, text utilities, and file processors. Fast, secure, and always free.',
  keywords: 'online tools, PDF converter, calculators, converters, text utilities, file tools, productivity tools, free online tools',
};
