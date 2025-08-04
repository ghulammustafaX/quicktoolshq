import Layout from '@/components/layout/Layout';
import Link from 'next/link';

// Professional SVG Icons
const ImageIcon = ({ className = "w-8 h-8" }) => (
 <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
 </svg>
);

const ClockIcon = ({ className = "w-8 h-8" }) => (
 <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
 </svg>
);

const UserIcon = ({ className = "w-8 h-8" }) => (
 <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
 </svg>
);

const CheckIcon = ({ className = "w-8 h-8" }) => (
 <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
 </svg>
);

const TrendingDownIcon = ({ className = "w-8 h-8" }) => (
 <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
 </svg>
);

const ZapIcon = ({ className = "w-8 h-8" }) => (
 <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
 </svg>
);

const EyeIcon = ({ className = "w-8 h-8" }) => (
 <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
 </svg>
);

export default function OptimizeImagesWeb() {
 const imageFormats = [
 {
 format: "JPEG",
 description: "Best for photographs and images with many colors",
 compression: "Lossy",
 useCase: "Photos, complex images with gradients",
 qualityRange: "60-85% for web",
 fileSize: "Small to Medium"
 },
 {
 format: "PNG",
 description: "Ideal for graphics with transparency and sharp edges",
 compression: "Lossless",
 useCase: "Logos, icons, screenshots, graphics with text",
 qualityRange: "100% (lossless)",
 fileSize: "Medium to Large"
 },
 {
 format: "WebP",
 description: "Modern format with superior compression and quality",
 compression: "Both",
 useCase: "All image types, modern browsers",
 qualityRange: "80-90% for web",
 fileSize: "Small"
 },
 {
 format: "AVIF",
 description: "Next-generation format with excellent compression",
 compression: "Both",
 useCase: "Future-forward projects, supported browsers",
 qualityRange: "50-80% for web",
 fileSize: "Very Small"
 }
 ];

 const optimizationTechniques = [
 {
 technique: "Proper Sizing",
 description: "Resize images to their display dimensions",
 impact: "60-80% file size reduction",
 difficulty: "Easy",
 implementation: "Use responsive images with srcset attribute"
 },
 {
 technique: "Compression Optimization",
 description: "Balance quality and file size through smart compression",
 impact: "40-70% file size reduction",
 difficulty: "Medium",
 implementation: "Adjust quality settings based on image content"
 },
 {
 technique: "Format Selection",
 description: "Choose the optimal format for each image type",
 impact: "20-50% file size reduction",
 difficulty: "Easy",
 implementation: "JPEG for photos, PNG for graphics, WebP for modern browsers"
 },
 {
 technique: "Progressive Loading",
 description: "Load images gradually for better perceived performance",
 impact: "Improved user experience",
 difficulty: "Medium",
 implementation: "Use progressive JPEG or lazy loading techniques"
 }
 ];

 const qualitySettings = [
 {
 quality: "95-100%",
 useCase: "Print-ready images, professional photography",
 fileSize: "Very Large",
 recommended: false,
 note: "Unnecessary for web use"
 },
 {
 quality: "85-95%",
 useCase: "High-quality web images, hero images",
 fileSize: "Large",
 recommended: true,
 note: "Minimal quality loss, good for important visuals"
 },
 {
 quality: "75-85%",
 useCase: "Standard web images, product photos",
 fileSize: "Medium",
 recommended: true,
 note: "Best balance of quality and size for most uses"
 },
 {
 quality: "60-75%",
 useCase: "Thumbnails, background images, large galleries",
 fileSize: "Small",
 recommended: true,
 note: "Noticeable but acceptable quality loss"
 },
 {
 quality: "Below 60%",
 useCase: "Very small thumbnails, placeholder images",
 fileSize: "Very Small",
 recommended: false,
 note: "Significant quality degradation"
 }
 ];

 return (
 <Layout>
 <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
 {/* Breadcrumb */}
 <nav className="mb-8">
 <ol className="flex items-center space-x-2 text-sm text-gray-500">
 <li><Link href="/" className="hover:text-[#00B5AD]">Home</Link></li>
 <li>/</li>
 <li><Link href="/blog" className="hover:text-[#00B5AD]">Blog</Link></li>
 <li>/</li>
 <li className="text-gray-900">Optimize Images for Web</li>
 </ol>
 </nav>

 {/* Article Header */}
 <header className="mb-12">
 <div className="mb-6">
 <span className="bg-[#00B5AD]/10 text-[#00B5AD] px-4 py-2 rounded-full text-sm font-semibold">
 Tutorials
 </span>
 </div>
 
 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
 How to Optimize Images for Web Without Losing Quality
 </h1>
 
 <p className="text-xl text-gray-600 mb-8 leading-relaxed">
 Master the art of image optimization with professional techniques that dramatically reduce file sizes while maintaining visual quality. Learn format selection, compression strategies, and performance optimization for faster websites and better user experiences.
 </p>
 
 <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
 <div className="flex items-center">
 <UserIcon className="w-4 h-4 mr-2" />
 <span>Lisa Park</span>
 </div>
 <div className="flex items-center">
 <ClockIcon className="w-4 h-4 mr-2" />
 <span>5 min read</span>
 </div>
 <div className="flex items-center">
 <ImageIcon className="w-4 h-4 mr-2" />
 <span>December 3, 2024</span>
 </div>
 </div>
 
 <div className="flex flex-wrap gap-2 mb-8">
 {["Images", "Optimization", "Web Performance", "Compression", "Quality"].map((tag) => (
 <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
 {tag}
 </span>
 ))}
 </div>
 </header>

 {/* Hero Image */}
 <div className="mb-12">
 <div className="w-full h-64 bg-gradient-to-br from-[#00B5AD] to-[#009B94] rounded-2xl flex items-center justify-center">
 <ImageIcon className="w-24 h-24 text-white" />
 </div>
 </div>

 {/* Introduction */}
 <div className="prose prose-lg max-w-none mb-12">
 <p className="text-gray-700 leading-relaxed mb-6">
 Images account for over 60% of a typical webpage's size, making optimization crucial for performance, user experience, and SEO rankings. The challenge lies in achieving the perfect balance: maximum quality with minimum file size.
 </p>
 
 <p className="text-gray-700 leading-relaxed mb-8">
 This comprehensive guide will transform you from someone who simply uploads images to a professional who understands the nuances of web optimization, compression algorithms, and performance impact.
 </p>

 {/* Performance Impact Stats */}
 <div className="bg-blue-50 rounded-xl p-8 mb-12">
 <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Impact of Image Optimization</h3>
 <div className="grid md:grid-cols-3 gap-6">
 <div className="text-center">
 <div className="w-16 h-16 mx-auto mb-4 text-[#00B5AD]">
 <ZapIcon className="w-full h-full" />
 </div>
 <div className="text-3xl font-bold text-[#00B5AD] mb-2">75%</div>
 <h4 className="text-lg font-bold text-gray-900 mb-2">Faster Loading</h4>
 <p className="text-gray-600 text-sm">Properly optimized images can reduce page load times by up to 75%</p>
 </div>
 
 <div className="text-center">
 <div className="w-16 h-16 mx-auto mb-4 text-[#00B5AD]">
 <TrendingDownIcon className="w-full h-full" />
 </div>
 <div className="text-3xl font-bold text-[#00B5AD] mb-2">90%</div>
 <h4 className="text-lg font-bold text-gray-900 mb-2">Size Reduction</h4>
 <p className="text-gray-600 text-sm">Advanced compression can reduce file sizes by 80-90% without visible quality loss</p>
 </div>
 
 <div className="text-center">
 <div className="w-16 h-16 mx-auto mb-4 text-[#00B5AD]">
 <EyeIcon className="w-full h-full" />
 </div>
 <div className="text-3xl font-bold text-[#00B5AD] mb-2">40%</div>
 <h4 className="text-lg font-bold text-gray-900 mb-2">Better SEO</h4>
 <p className="text-gray-600 text-sm">Page speed improvements can increase search rankings by 20-40%</p>
 </div>
 </div>
 </div>
 </div>

 {/* Image Formats Section */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
 <ImageIcon className="w-8 h-8 text-[#00B5AD] mr-3" />
 Understanding Image Formats
 </h2>
 
 <p className="text-gray-700 leading-relaxed mb-8">
 Choosing the right format is the foundation of image optimization. Each format has strengths and ideal use cases:
 </p>

 <div className="space-y-6">
 {imageFormats.map((format, index) => (
 <div key={index} className="bg-white border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
 <div className="flex items-start justify-between mb-4">
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-2">{format.format}</h3>
 <p className="text-gray-700 mb-3">{format.description}</p>
 </div>
 <span className={`px-3 py-1 rounded-full text-xs font-semibold ml-4 ${
 format.fileSize === 'Very Small' ? 'bg-gray-100 text-gray-700' :
 format.fileSize === 'Small' ? 'bg-gray-100 text-gray-700' :
 format.fileSize === 'Medium' ? 'bg-gray-100 text-gray-700' :
 'bg-gray-100 text-gray-700'
 }`}>
 {format.fileSize}
 </span>
 </div>
 
 <div className="grid md:grid-cols-3 gap-4 text-sm">
 <div>
 <span className="font-semibold text-gray-900">Compression:</span>
 <p className="text-gray-600">{format.compression}</p>
 </div>
 <div>
 <span className="font-semibold text-gray-900">Best for:</span>
 <p className="text-gray-600">{format.useCase}</p>
 </div>
 <div>
 <span className="font-semibold text-gray-900">Quality Range:</span>
 <p className="text-gray-600">{format.qualityRange}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* Quality Settings Guide */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Quality Settings Guide</h2>
 
 <p className="text-gray-700 leading-relaxed mb-8">
 Understanding quality settings is crucial for optimization. Here's a professional breakdown of when to use different quality levels:
 </p>

 <div className="space-y-4">
 {qualitySettings.map((setting, index) => (
 <div key={index} className={`border rounded-lg p-6 ${setting.recommended ? 'border-[#00B5AD] bg-green-50' : 'border-gray-200'}`}>
 <div className="flex items-center justify-between mb-3">
 <h3 className="text-lg font-bold text-gray-900">{setting.quality} Quality</h3>
 <div className="flex items-center space-x-3">
 <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
 setting.fileSize === 'Very Large' ? 'bg-gray-100 text-gray-700' :
 setting.fileSize === 'Large' ? 'bg-gray-100 text-gray-700' :
 setting.fileSize === 'Medium' ? 'bg-gray-100 text-gray-700' :
 setting.fileSize === 'Small' ? 'bg-gray-100 text-gray-700' :
 'bg-gray-100 text-gray-700'
 }`}>
 {setting.fileSize}
 </span>
 {setting.recommended && (
 <span className="bg-[#00B5AD] text-white px-2 py-1 rounded text-xs font-semibold">
 Recommended
 </span>
 )}
 </div>
 </div>
 <p className="text-gray-700 mb-2">{setting.useCase}</p>
 <p className="text-gray-600 text-sm italic">{setting.note}</p>
 </div>
 ))}
 </div>
 </section>

 {/* Optimization Techniques */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Optimization Techniques</h2>
 
 <div className="grid md:grid-cols-2 gap-6">
 {optimizationTechniques.map((technique, index) => (
 <div key={index} className="bg-white border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
 <div className="flex items-start justify-between mb-4">
 <h3 className="text-xl font-bold text-gray-900">{technique.technique}</h3>
 <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
 technique.difficulty === 'Easy' ? 'bg-gray-100 text-gray-700' :
 'bg-gray-100 text-gray-700'
 }`}>
 {technique.difficulty}
 </span>
 </div>
 <p className="text-gray-700 mb-4">{technique.description}</p>
 <div className="bg-gray-50 rounded-lg p-4 mb-4">
 <div className="flex items-center justify-between mb-2">
 <span className="font-semibold text-gray-900">Impact:</span>
 <span className="font-bold text-[#00B5AD]">{technique.impact}</span>
 </div>
 <div>
 <span className="font-semibold text-gray-900 block mb-1">Implementation:</span>
 <p className="text-gray-600 text-sm">{technique.implementation}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* Step-by-Step Guide */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step Optimization Workflow</h2>
 
 <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
 <div className="space-y-6">
 <div className="flex items-start space-x-4">
 <span className="bg-[#00B5AD] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
 <div>
 <h4 className="font-bold text-gray-900 mb-2">Analyze Your Current Images</h4>
 <p className="text-gray-700 mb-2">Audit existing images to identify optimization opportunities. Look for large files, inappropriate formats, and oversized dimensions.</p>
 <p className="text-sm text-gray-600 italic">Use browser dev tools to identify largest images impacting performance.</p>
 </div>
 </div>
 
 <div className="flex items-start space-x-4">
 <span className="bg-[#00B5AD] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
 <div>
 <h4 className="font-bold text-gray-900 mb-2">Choose the Right Format</h4>
 <p className="text-gray-700 mb-2">Select formats based on content: JPEG for photos, PNG for graphics with transparency, WebP for modern browsers.</p>
 <p className="text-sm text-gray-600 italic">Consider using multiple formats with fallbacks for maximum compatibility.</p>
 </div>
 </div>
 
 <div className="flex items-start space-x-4">
 <span className="bg-[#00B5AD] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
 <div>
 <h4 className="font-bold text-gray-900 mb-2">Resize to Display Dimensions</h4>
 <p className="text-gray-700 mb-2">Never load larger images than needed. Resize images to their maximum display size and use responsive images for different screen sizes.</p>
 <p className="text-sm text-gray-600 italic">A 300px wide image should never be loaded at 1200px width.</p>
 </div>
 </div>
 
 <div className="flex items-start space-x-4">
 <span className="bg-[#00B5AD] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
 <div>
 <h4 className="font-bold text-gray-900 mb-2">Apply Intelligent Compression</h4>
 <p className="text-gray-700 mb-2">Use our Image Compressor to find the optimal balance between quality and file size. Start with 80% quality and adjust based on visual inspection.</p>
 <p className="text-sm text-gray-600 italic">Different image types require different compression approaches.</p>
 </div>
 </div>
 
 <div className="flex items-start space-x-4">
 <span className="bg-[#00B5AD] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
 <div>
 <h4 className="font-bold text-gray-900 mb-2">Implement Progressive Loading</h4>
 <p className="text-gray-700 mb-2">Use lazy loading and progressive JPEGs to improve perceived performance. Load images as users scroll to reduce initial page load time.</p>
 <p className="text-sm text-gray-600 italic">This technique is especially important for image-heavy pages.</p>
 </div>
 </div>
 
 <div className="flex items-start space-x-4">
 <span className="bg-[#00B5AD] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
 <div>
 <h4 className="font-bold text-gray-900 mb-2">Monitor and Measure Performance</h4>
 <p className="text-gray-700 mb-2">Use tools like Google PageSpeed Insights to measure the impact of your optimizations and identify further improvements.</p>
 <p className="text-sm text-gray-600 italic">Regular monitoring ensures continued optimal performance.</p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Advanced Techniques */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Optimization Techniques</h2>
 
 <div className="space-y-6">
 <div className="bg-purple-50 rounded-xl p-6">
 <h3 className="text-xl font-bold text-gray-900 mb-4">Responsive Images with Srcset</h3>
 <p className="text-gray-700 mb-4">
 Serve different image sizes based on device capabilities and screen size. This ensures mobile users don't download desktop-sized images.
 </p>
 <div className="bg-white rounded-lg p-4 font-mono text-sm text-gray-700 overflow-x-auto">
 <code>
 &lt;img src="image-800w.jpg"<br/>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;srcset="image-400w.jpg 400w,<br/>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;image-800w.jpg 800w,<br/>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;image-1200w.jpg 1200w"<br/>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sizes="(max-width: 600px) 400px, 800px"<br/>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alt="Optimized responsive image" /&gt;
 </code>
 </div>
 </div>
 
 <div className="bg-green-50 rounded-xl p-6">
 <h3 className="text-xl font-bold text-gray-900 mb-4">WebP with Fallbacks</h3>
 <p className="text-gray-700 mb-4">
 Use the picture element to serve WebP to supported browsers while providing JPEG fallbacks for older browsers.
 </p>
 <div className="bg-white rounded-lg p-4 font-mono text-sm text-gray-700 overflow-x-auto">
 <code>
 &lt;picture&gt;<br/>
 &nbsp;&nbsp;&lt;source srcset="image.webp" type="image/webp"&gt;<br/>
 &nbsp;&nbsp;&lt;source srcset="image.jpg" type="image/jpeg"&gt;<br/>
 &nbsp;&nbsp;&lt;img src="image.jpg" alt="Fallback image"&gt;<br/>
 &lt;/picture&gt;
 </code>
 </div>
 </div>
 
 <div className="bg-yellow-50 rounded-xl p-6">
 <h3 className="text-xl font-bold text-gray-900 mb-4">Lazy Loading Implementation</h3>
 <p className="text-gray-700 mb-4">
 Modern browsers support native lazy loading, which defers image loading until they're needed.
 </p>
 <div className="bg-white rounded-lg p-4 font-mono text-sm text-gray-700 overflow-x-auto">
 <code>
 &lt;img src="image.jpg" loading="lazy" alt="Lazy loaded image" /&gt;
 </code>
 </div>
 </div>
 </div>
 </section>

 {/* Common Mistakes */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Optimization Mistakes to Avoid</h2>
 
 <div className="space-y-4">
 <div className="bg-red-50 border-l-4 border-red-500 p-6">
 <h4 className="font-bold text-red-800 mb-2">Over-Compression</h4>
 <p className="text-gray-700 text-sm">Setting quality too low results in visible artifacts. Always visually inspect compressed images before publishing.</p>
 </div>
 
 <div className="bg-red-50 border-l-4 border-red-500 p-6">
 <h4 className="font-bold text-red-800 mb-2">Wrong Format Choice</h4>
 <p className="text-gray-700 text-sm">Using PNG for photos or JPEG for graphics with transparency leads to unnecessarily large files or quality loss.</p>
 </div>
 
 <div className="bg-red-50 border-l-4 border-red-500 p-6">
 <h4 className="font-bold text-red-800 mb-2">Ignoring Mobile Users</h4>
 <p className="text-gray-700 text-sm">Serving desktop-sized images to mobile devices wastes bandwidth and slows loading times.</p>
 </div>
 
 <div className="bg-red-50 border-l-4 border-red-500 p-6">
 <h4 className="font-bold text-red-800 mb-2">Not Testing Performance</h4>
 <p className="text-gray-700 text-sm">Failing to measure the impact of optimizations means missing opportunities for further improvements.</p>
 </div>
 </div>
 </section>

 {/* Tools and Resources */}
 <section className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Image Optimization Tools</h2>
 
 <div className="bg-white border rounded-xl p-8">
 <div className="grid md:grid-cols-2 gap-8">
 <div>
 <h3 className="text-lg font-bold text-gray-900 mb-4">QuickToolsHQ Image Tools</h3>
 <div className="space-y-3">
 <Link 
 href="/tools/image-compressor"
 className="flex items-center p-3 bg-[#00B5AD]/10 rounded-lg hover:bg-[#00B5AD]/20 transition-colors duration-300"
 >
 <ImageIcon className="w-5 h-5 text-[#00B5AD] mr-3" />
 <div>
 <span className="font-semibold text-gray-900 block">Image Compressor</span>
 <span className="text-sm text-gray-600">Reduce file sizes without quality loss</span>
 </div>
 </Link>
 
 <Link 
 href="/tools/image-converter"
 className="flex items-center p-3 bg-[#00B5AD]/10 rounded-lg hover:bg-[#00B5AD]/20 transition-colors duration-300"
 >
 <ImageIcon className="w-5 h-5 text-[#00B5AD] mr-3" />
 <div>
 <span className="font-semibold text-gray-900 block">Image Converter</span>
 <span className="text-sm text-gray-600">Convert between different image formats</span>
 </div>
 </Link>
 </div>
 </div>
 
 <div>
 <h3 className="text-lg font-bold text-gray-900 mb-4">Performance Testing</h3>
 <div className="space-y-2 text-sm">
 <div className="flex items-center">
 <CheckIcon className="w-4 h-4 text-[#00B5AD] mr-2" />
 <span className="text-gray-700">Google PageSpeed Insights</span>
 </div>
 <div className="flex items-center">
 <CheckIcon className="w-4 h-4 text-[#00B5AD] mr-2" />
 <span className="text-gray-700">GTmetrix Performance Analysis</span>
 </div>
 <div className="flex items-center">
 <CheckIcon className="w-4 h-4 text-[#00B5AD] mr-2" />
 <span className="text-gray-700">WebPageTest Speed Testing</span>
 </div>
 <div className="flex items-center">
 <CheckIcon className="w-4 h-4 text-[#00B5AD] mr-2" />
 <span className="text-gray-700">Browser Developer Tools</span>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Call to Action */}
 <div className="bg-gradient-to-r from-[#00B5AD] to-[#009B94] rounded-2xl p-8 text-white mb-12">
 <div className="text-center">
 <h3 className="text-2xl font-bold mb-4">Start Optimizing Your Images Today</h3>
 <p className="text-lg text-white/90 mb-6">
 Use our free image optimization tools to reduce file sizes and improve website performance
 </p>
 <div className="flex flex-wrap justify-center gap-4">
 <Link
 href="/tools/image-compressor"
 className="bg-white text-[#00B5AD] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
 >
 Try Image Compressor
 </Link>
 <Link
 href="/tools/image-converter"
 className="bg-white text-[#00B5AD] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
 >
 Convert Image Format
 </Link>
 <Link
 href="/tools"
 className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#00B5AD] transition-colors duration-300"
 >
 View All Tools
 </Link>
 </div>
 </div>
 </div>

 {/* Author Bio */}
 <div className="bg-gray-50 rounded-xl p-8 mb-12">
 <div className="flex items-start space-x-4">
 <div className="w-16 h-16 bg-gradient-to-br from-[#00B5AD] to-[#009B94] rounded-full flex items-center justify-center">
 <UserIcon className="w-8 h-8 text-white" />
 </div>
 <div>
 <h4 className="text-lg font-bold text-gray-900 mb-2">Lisa Park</h4>
 <p className="text-gray-600 leading-relaxed">
 Lisa is a web performance specialist and UX designer with 6 years of experience optimizing websites for Fortune 500 companies. 
 She specializes in image optimization, progressive web apps, and performance-driven design. Lisa regularly speaks at web 
 development conferences and contributes to open-source performance tools.
 </p>
 </div>
 </div>
 </div>

 {/* Navigation */}
 <div className="flex justify-between items-center pt-8 border-t">
 <Link href="/blog" className="text-[#00B5AD] font-semibold hover:text-[#009B94] transition-colors">
 ← Back to Blog
 </Link>
 <div className="text-sm text-gray-500">
 Share this article:
 <span className="ml-2">
 <a href="#" className="text-[#00B5AD] hover:text-[#009B94] mx-1">Twitter</a>
 <a href="#" className="text-[#00B5AD] hover:text-[#009B94] mx-1">LinkedIn</a>
 <a href="#" className="text-[#00B5AD] hover:text-[#009B94] mx-1">Facebook</a>
 </span>
 </div>
 </div>
 </article>
 </Layout>
 );
}

export const metadata = {
 title: 'Image Optimization Guide: Reduce File Size Without Quality Loss | QuickToolsHQ',
 description: 'Master image optimization for web with expert techniques. Learn compression, format selection, and performance optimization to improve website speed and SEO.',
 keywords: 'image optimization, image compression, web performance, image formats, JPEG compression, PNG optimization, WebP images, website speed, SEO optimization',
 openGraph: {
 title: 'How to Optimize Images for Web Without Losing Quality',
 description: 'Complete guide to image optimization covering compression techniques, format selection, and performance best practices for faster websites.',
 type: 'article',
 publishedTime: '2024-12-03T00:00:00.000Z',
 authors: ['Lisa Park'],
 tags: ['Images', 'Optimization', 'Web Performance', 'Tutorial'],
 },
 twitter: {
 card: 'summary_large_image',
 title: 'Master Image Optimization for Web Performance',
 description: 'Learn professional techniques to optimize images for web - reduce file sizes by 90% without quality loss.',
 }
};
