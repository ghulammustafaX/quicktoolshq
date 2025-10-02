import Layout from '@/components/layout/Layout';
import ToolLayout from '@/components/layout/ToolLayout';
import ImageConverter from '@/components/tools/ImageConverter';

export default function ImageConverterPage() {
  return (
    <Layout>
      <ToolLayout
        title="Image Converter"
        description="Convert images between different formats - JPG, PNG, WebP, BMP, and more. Free online image format converter."
      >
        <ImageConverter />
      </ToolLayout>
      
      {/* Image Format Guide */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Image Format Guide
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">
                When to use JPG
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Photos and complex images</li>
                <li>• When file size matters</li>
                <li>• Web images and sharing</li>
                <li>• No transparency needed</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">
                When to use PNG
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Images with transparency</li>
                <li>• Simple graphics and logos</li>
                <li>• When quality is crucial</li>
                <li>• Screenshots and diagrams</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Additional Image Converter Information */}
        <div style={{backgroundColor: '#eef8ff'}} className="rounded-lg p-8 mb-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Free Image Converter - Convert Images Between Formats
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Convert images between popular formats including JPG, PNG, WebP, BMP, GIF, and TIFF. 
            Our free online image converter supports batch processing and maintains high quality during conversion. 
            Perfect for web developers, photographers, and content creators.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border">
              <strong className="text-gray-900 block mb-1">Multiple Formats</strong>
              <p className="text-sm text-gray-600">JPG, PNG, WebP, BMP, GIF</p>
            </div>
            <div className="bg-white rounded-lg p-4 border">
              <strong className="text-gray-900 block mb-1">High Quality</strong>
              <p className="text-sm text-gray-600">Preserves image quality</p>
            </div>
            <div className="bg-white rounded-lg p-4 border">
              <strong className="text-gray-900 block mb-1">Batch Processing</strong>
              <p className="text-sm text-gray-600">Convert multiple images</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* SEO Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="prose max-w-none">
          <div style={{backgroundColor: '#eef8ff'}} className="rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Free Image Converter - Convert Images Between Formats
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Convert images between popular formats including JPG, PNG, WebP, BMP, GIF, and TIFF. 
              Our free online image converter supports batch processing and maintains high quality during conversion. 
              Perfect for web developers, photographers, and content creators.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">Multiple Formats</strong>
                <p className="text-sm text-gray-600">JPG, PNG, WebP, BMP, GIF</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">High Quality</strong>
                <p className="text-sm text-gray-600">Preserves image quality</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">Batch Processing</strong>
                <p className="text-sm text-gray-600">Convert multiple images</p>
              </div>
            </div>
          </div>
          
          <div style={{backgroundColor: '#fffbea'}} className="rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Why Choose Our Image Converter?
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Universal Format Support:</strong> Convert between all major image formats</li>
              <li><strong>Privacy Protected:</strong> All processing happens in your browser</li>
              <li><strong>No File Size Limits:</strong> Convert images of any size</li>
              <li><strong>Quality Preservation:</strong> Maintains original image quality</li>
              <li><strong>Fast Processing:</strong> Instant conversion results</li>
              <li><strong>Batch Conversion:</strong> Convert multiple images at once</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-8 border">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Supported Image Formats
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Input Formats</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• JPEG/JPG - Most common web format</li>
                  <li>• PNG - Supports transparency</li>
                  <li>• WebP - Modern web format</li>
                  <li>• BMP - Windows bitmap</li>
                  <li>• GIF - Animated images</li>
                  <li>• TIFF - High quality images</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Output Formats</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• JPEG - Best for photos</li>
                  <li>• PNG - Best for graphics with transparency</li>
                  <li>• WebP - Smaller file sizes</li>
                  <li>• BMP - Uncompressed format</li>
                  <li>• PDF - Document format</li>
                  <li>• ICO - Icon format</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const metadata = {
  title: 'Free Image Converter Online - Convert Images Between Formats | QuickTools HQ',
  description: 'Convert images between JPG, PNG, WebP, BMP, GIF, and TIFF formats. Free online image converter with batch processing and quality preservation.',
  keywords: 'image converter, convert jpg to png, convert png to jpg, convert webp, image format converter, convert images online, jpg converter, png converter, webp converter, bmp converter, gif converter, tiff converter, batch image converter, free image converter, online image conversion, convert images free, image format changer, picture converter, photo converter, convert pictures online',
  alternates: {
    canonical: 'https://quicktoolshq.com/tools/image-converter',
  },
  openGraph: {
    title: 'Free Image Converter - Convert Images Between Formats',
    description: 'Convert images between multiple formats with our free online tool. Supports JPG, PNG, WebP, BMP, and more.',
    url: 'https://quicktoolshq.com/tools/image-converter',
    type: 'website',
  }
};
