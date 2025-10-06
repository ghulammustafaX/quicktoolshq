import Layout from '@/components/layout/Layout';

// Professional SVG Icons
const ShieldIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const GlobeIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9 3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const LightningIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const CogIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const UsersIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const InnovationIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const CheckIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function AboutPage() {
  const features = [
    {
      title: "Privacy-First Design",
      description: "All processing happens locally in your browser. Your data never leaves your device, ensuring complete privacy and security for sensitive information.",
      icon: ShieldIcon
    },
    {
      title: "Global Accessibility",
      description: "Our tools work seamlessly across all devices and browsers. Access professional-grade utilities anywhere, anytime, on any platform.",
      icon: GlobeIcon
    },
    {
      title: "Lightning Fast Performance",
      description: "Optimized algorithms and modern web technologies deliver instant results. No waiting, no delays - just efficient productivity tools.",
      icon: LightningIcon
    },
    {
      title: "Intuitive User Experience",
      description: "Clean, professional interfaces designed for efficiency. Every feature is carefully crafted to enhance your workflow and productivity.",
      icon: CogIcon
    },
    {
      title: "Community-Driven Development",
      description: "Built based on real user feedback and needs. We continuously evolve our platform to serve the growing community of professionals.",
      icon: UsersIcon
    },
    {
      title: "Continuous Innovation",
      description: "Regular updates and new tool additions keep you ahead of the curve. We're committed to expanding our toolkit based on emerging needs.",
      icon: InnovationIcon
    }
  ];

  const values = [
    "Completely free forever - no hidden fees or premium tiers",
    "No registration or account creation required",
    "Privacy-protected with local-only processing",
    "Professional-grade accuracy and reliability",
    "Mobile-responsive design for all devices",
    "Regular updates and new tool additions",
    "Community-driven feature development",
    "Open-source commitment to transparency"
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Empowering Digital Productivity
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              QuickToolsHQ is the premier destination for professional online tools. We believe powerful 
              utilities should be accessible to everyone, completely free, and respectful of your privacy.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-[#00B5AD] to-[#009B94] text-white rounded-2xl p-8 mx-auto max-w-4xl shadow-xl">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Our Mission</h2>
            <p className="text-xl text-white/95 leading-relaxed">
              To democratize access to professional-grade digital tools by providing free, secure, 
              and efficient utilities that enhance productivity for individuals and businesses worldwide.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Why Choose QuickToolsHQ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We've built our platform around the principles that matter most to professionals: 
              privacy, performance, and accessibility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-16 h-16 mx-auto mb-6 text-[#00B5AD] group-hover:text-[#009B94] transition-colors duration-300">
                    <IconComponent className="w-full h-full" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Commitment */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Our Commitment to You</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We're committed to providing exceptional value through our comprehensive suite of tools, 
                all while maintaining the highest standards of privacy and security.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 text-[#00B5AD] mt-1">
                    <CheckIcon className="w-full h-full" />
                  </div>
                  <span className="text-gray-700 font-medium leading-relaxed">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-[#00B5AD] to-[#009B94] text-white rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Get in Touch</h2>
          <p className="text-xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed">
            Have questions, suggestions, or need a custom tool? We'd love to hear from you. 
            Your feedback drives our continuous improvement and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:hello@quicktoolshq.com" 
              className="inline-flex items-center bg-white text-[#00B5AD] px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </a>
            <a 
              href="mailto:hello@quicktoolshq.com" 
              className="inline-flex items-center bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00B5AD] transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m0 0v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              Send Feedback
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const metadata = {
  title: 'About QuickToolsHQ - Professional Online Tools Platform',
  description: 'Learn about QuickToolsHQ\'s mission to provide free, secure, and professional online tools. Discover our commitment to privacy, performance, and accessibility.',
  keywords: 'about quicktools, online tools platform, free web tools, privacy-focused tools, professional utilities, productivity tools',
  alternates: {
  canonical: 'https://www.quicktoolshq.com/about',
  },
  openGraph: {
    title: 'About QuickToolsHQ - Professional Online Tools Platform',
    description: 'Learn about QuickToolsHQ\'s mission to provide free, secure, and professional online tools.',
  url: 'https://www.quicktoolshq.com/about',
    type: 'website',
  },
};

