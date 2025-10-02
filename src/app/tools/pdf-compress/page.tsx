import Layout from '../../../components/layout/Layout';
import ToolLayout from '../../../components/layout/ToolLayout';
import PDFCompressor from '../../../components/tools/PDFCompressor';

export default function PDFCompressorPage() {
  return (
    <Layout>
      <ToolLayout
        title="PDF Compressor"
        description="Reduce PDF file size while maintaining quality. Compress PDFs online for free."
      >
        <PDFCompressor />
      </ToolLayout>
      
      {/* SEO Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="prose max-w-none">
          <div style={{backgroundColor: '#eef8ff'}} className="rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Free PDF Compressor - Reduce File Size Online
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Compress PDF files online for free while maintaining document quality. Our PDF compressor reduces file sizes by up to 70% using advanced compression algorithms.
              All compression happens locally in your browser - your documents never leave your device. 
              Perfect for email sharing, web uploads, and storage management.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">100% Secure</strong>
                <p className="text-sm text-gray-600">Browser-based processing</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">Fast Compression</strong>
                <p className="text-sm text-gray-600">Instant results</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">Quality Preserved</strong>
                <p className="text-sm text-gray-600">Maintains readability</p>
              </div>
            </div>
          </div>
          
          {/* Why Choose Our PDF Compressor */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Why Choose Our PDF Compressor?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-gray-900">Smart Compression:</strong>
                    <p className="text-sm text-gray-700">Reduces file size while preserving quality</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-gray-900">No Upload Required:</strong>
                    <p className="text-sm text-gray-700">Process files locally in your browser</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-gray-900">Privacy Protected:</strong>
                    <p className="text-sm text-gray-700">Your documents stay on your device</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-gray-900">Multiple Formats:</strong>
                    <p className="text-sm text-gray-700">Works with all PDF versions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-gray-900">Free to Use:</strong>
                    <p className="text-sm text-gray-700">No registration or payment required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 mb-8 border">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              PDF Compression Features
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Compression Methods</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Image optimization</li>
                  <li>• Font compression</li>
                  <li>• Metadata removal</li>
                  <li>• Stream optimization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Quality Options</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• High quality compression</li>
                  <li>• Medium quality balanced</li>
                  <li>• Maximum compression</li>
                  <li>• Custom settings</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 mb-8 border">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              How to Use the PDF Compressor
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <strong className="text-gray-900">Upload your PDF</strong>
                  <p className="text-gray-600 text-sm">Select one or multiple PDF files to compress</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <strong className="text-gray-900">Choose compression level</strong>
                  <p className="text-gray-600 text-sm">Select between maximum, balanced, or high quality compression</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <strong className="text-gray-900">Start compression</strong>
                  <p className="text-gray-600 text-sm">Click compress and watch the progress bar</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                <div>
                  <strong className="text-gray-900">Download compressed PDF</strong>
                  <p className="text-gray-600 text-sm">Save your optimized PDF with reduced file size</p>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{backgroundColor: '#fffbea'}} className="rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Compression Performance by Quality Level
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Maximum Compression</h4>
                <div className="space-y-2">
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Size Reduction</span>
                    <span className="font-medium">50-80%</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Quality</span>
                    <span className="font-medium">Good</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Best For</span>
                    <span className="font-medium">Storage</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Balanced</h4>
                <div className="space-y-2">
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Size Reduction</span>
                    <span className="font-medium">20-40%</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Quality</span>
                    <span className="font-medium">Excellent</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Best For</span>
                    <span className="font-medium">General use</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">High Quality</h4>
                <div className="space-y-2">
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Size Reduction</span>
                    <span className="font-medium">5-15%</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Quality</span>
                    <span className="font-medium">Premium</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Best For</span>
                    <span className="font-medium">Professional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{backgroundColor: '#fffbea'}} className="rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              When to Use PDF Compression
            </h3>
            <div className="space-y-3">
              <p className="text-gray-700">
                <strong>Email Attachments:</strong> Reduce PDF file sizes to meet email attachment limits while maintaining document quality. 
                Perfect for sharing reports, contracts, and presentations via email.
              </p>
              <p className="text-gray-700">
                <strong>Web Upload:</strong> Compress PDFs for faster website uploads and better user experience. 
                Smaller files mean faster page loads and improved site performance.
              </p>
              <p className="text-gray-700">
                <strong>Storage Management:</strong> Free up disk space by compressing your document archives and collections. 
                Maintain your documents while using less storage space.
              </p>
              <p className="text-gray-700">
                <strong>Document Sharing:</strong> Optimize PDFs for cloud sharing platforms that have file size restrictions. 
                Ensure your documents upload quickly while meeting platform requirements.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 mb-8 border">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Will compression affect PDF quality?</h4>
                <p className="text-gray-700 text-sm">Our smart compression algorithms minimize quality loss while maximizing file size reduction. You can choose different compression levels based on your needs.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">What types of PDFs can be compressed?</h4>
                <p className="text-gray-700 text-sm">We support all standard PDF versions and formats. The tool works best with PDFs containing images, which typically see the greatest size reduction.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Can I compress password-protected PDFs?</h4>
                <p className="text-gray-700 text-sm">Currently, our tool works with unprotected PDFs. Password-protected or encrypted PDFs need to be unlocked before compression.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Are my PDFs stored on your servers?</h4>
                <p className="text-gray-700 text-sm">No, all compression happens locally in your browser. Your PDF files never leave your device, ensuring complete privacy and security.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const metadata = {
  title: 'Free PDF Compressor Online - Reduce PDF File Size | QuickTools HQ',
  description: 'Compress PDF files online for free while maintaining document quality. Reduce file size up to 70% using advanced compression algorithms.',
  keywords: 'pdf compressor, compress pdf online, reduce pdf size, free pdf compression, pdf file size reducer, online pdf compressor, compress pdf free, pdf optimization, pdf size reducer, minimize pdf, shrink pdf files, pdf file compressor, compress documents online, pdf quality compression, reduce pdf file size online, free online pdf compressor, pdf compression tool, compress large pdf files, pdf file optimization, small pdf files',
  alternates: {
    canonical: 'https://quicktoolshq.com/tools/pdf-compress',
  },
  openGraph: {
    title: 'Free PDF Compressor - Reduce PDF File Size Online',
    description: 'Compress PDF files online for free while maintaining document quality. Professional PDF compression tool.',
    url: 'https://quicktoolshq.com/tools/pdf-compress',
    type: 'website',
  }
};
