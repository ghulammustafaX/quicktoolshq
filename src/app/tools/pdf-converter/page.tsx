import Layout from '@/components/layout/Layout';
import ToolLayout from '@/components/layout/ToolLayout';
import PDFConverter from '@/components/tools/PDFConverter';

export default function PDFConverterPage() {
  return (
    <Layout>
      <ToolLayout
        title="PDF Converter"
        description="Convert images and Word documents to PDF, or extract images from PDF files. Free online PDF converter with batch processing support."
      >
        <PDFConverter />
      </ToolLayout>
      
      {/* SEO Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="prose max-w-none">
          <div style={{backgroundColor: '#eef8ff'}} className="rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Free PDF Converter - Convert Images and Documents to PDF Online
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Convert images and Word documents to PDF, or extract images from PDF files with our free online PDF converter. 
              Supports JPG, PNG, Word documents, and batch processing. All conversions happen locally in your browser for maximum privacy and security. 
              Perfect for document management, archiving, and file format standardization.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">100% Secure</strong>
                <p className="text-sm text-gray-600">No file uploads to servers</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">Batch Processing</strong>
                <p className="text-sm text-gray-600">Convert multiple files at once</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">Instant Results</strong>
                <p className="text-sm text-gray-600">Fast browser-based conversion</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 mb-8 border">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              How to Use the PDF Converter
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <strong className="text-gray-900">Select conversion type</strong>
                  <p className="text-gray-600 text-sm">Choose to convert images to PDF or extract images from PDF</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <strong className="text-gray-900">Upload your files</strong>
                  <p className="text-gray-600 text-sm">Select one or multiple files to convert or process</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <strong className="text-gray-900">Configure settings</strong>
                  <p className="text-gray-600 text-sm">Adjust page size, orientation, and quality options</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                <div>
                  <strong className="text-gray-900">Download results</strong>
                  <p className="text-gray-600 text-sm">Get your converted PDF or extracted images</p>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{backgroundColor: '#fffbea'}} className="rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Supported Conversion Types
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Images to PDF</h4>
                <div className="space-y-2">
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">JPG/JPEG</span>
                    <span className="font-medium">Supported</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">PNG</span>
                    <span className="font-medium">Supported</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Multiple images</span>
                    <span className="font-medium">Single PDF</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Page settings</span>
                    <span className="font-medium">Customizable</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">PDF to Images</h4>
                <div className="space-y-2">
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Extract format</span>
                    <span className="font-medium">JPG, PNG</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">All pages</span>
                    <span className="font-medium">Individual images</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Quality</span>
                    <span className="font-medium">High resolution</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Batch download</span>
                    <span className="font-medium">ZIP archive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{backgroundColor: '#fffbea'}} className="rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              PDF Conversion Use Cases
            </h3>
            <div className="space-y-3">
              <p className="text-gray-700">
                <strong>Document Archiving:</strong> Convert important documents and images to PDF format for long-term storage and compatibility. 
                PDF ensures your documents look the same on any device or platform.
              </p>
              <p className="text-gray-700">
                <strong>Photo Albums:</strong> Create PDF photo albums from your image collections. 
                Perfect for sharing memories, creating digital scrapbooks, or professional portfolios.
              </p>
              <p className="text-gray-700">
                <strong>Business Reports:</strong> Combine multiple images, charts, and documents into a single PDF file. 
                Ideal for presentations, reports, and professional documentation.
              </p>
              <p className="text-gray-700">
                <strong>Image Extraction:</strong> Extract high-quality images from PDF documents for editing, web use, or printing. 
                Useful for recovering images from scanned documents or presentations.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 mb-8 border">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Are my files stored on your servers?</h4>
                <p className="text-gray-700 text-sm">No, all PDF conversion and processing happens locally in your browser. Your files never leave your device, ensuring complete privacy and security.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">What file formats are supported?</h4>
                <p className="text-gray-700 text-sm">For conversion to PDF: JPG, PNG, and other common image formats. For extraction: PDF files to extract images as JPG or PNG files.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Can I convert multiple images to one PDF?</h4>
                <p className="text-gray-700 text-sm">Yes, you can select multiple images and combine them into a single PDF document. You can also adjust the order and page settings.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">What happens to image quality during conversion?</h4>
                <p className="text-gray-700 text-sm">Our converter maintains high image quality during PDF conversion. You can adjust compression settings to balance file size and quality according to your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const metadata = {
  title: 'Free PDF Converter - Images to PDF, PDF to Images Online | QuickToolsHQ',
  description: 'Convert images and documents to PDF or extract images from PDF files. Free online PDF converter with batch processing and quality.',
  keywords: 'PDF converter, images to PDF, PDF to images, convert to PDF, PDF extractor, online PDF converter, JPG to PDF, PNG to PDF, PDF to JPG, PDF to PNG, document converter, PDF tools, free PDF converter, batch PDF conversion, merge images to PDF',
  alternates: {
    canonical: 'https://quicktoolshq.com/tools/pdf-converter',
  },
  openGraph: {
    title: 'Free PDF Converter - Convert Images and Documents to PDF Online',
    description: 'Convert images and documents to PDF or extract images from PDF files with our free online converter.',
    url: 'https://quicktoolshq.com/tools/pdf-converter',
    type: 'website',
  }
};
