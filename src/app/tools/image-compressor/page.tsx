import Layout from '@/components/layout/Layout';
import ToolLayout from '@/components/layout/ToolLayout';
import ImageCompressor from '@/components/tools/ImageCompressor';

export default function ImageCompressorPage() {
  return (
    <Layout>
      <ToolLayout
        title="Image Compressor"
        description="Compress PNG, JPG, and WebP images without quality loss. Reduce file size while maintaining visual quality with our free online image compressor."
      >
        <ImageCompressor />
      </ToolLayout>
      
      {/* SEO Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="prose max-w-none">
          <div style={{backgroundColor: '#eef8ff'}} className="rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Free Image Compressor - Reduce File Size Without Quality Loss
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Compress PNG, JPG, and WebP images without losing quality with our free online image compressor. 
              Reduce file sizes by up to 80% while maintaining visual quality. All compression happens locally in your browser - your images never leave your device. 
              Perfect for web optimization, email attachments, and storage space management.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">100% Private</strong>
                <p className="text-sm text-gray-600">No uploads to servers</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">Batch Processing</strong>
                <p className="text-sm text-gray-600">Compress multiple images</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">Smart Compression</strong>
                <p className="text-sm text-gray-600">Optimal quality vs size</p>
              </div>
            </div>
          </div>
          
          {/* Compression Tips Card */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              Compression Tips
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900">For Best Results:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Use 80-90% quality for photos</li>
                  <li>• Use 60-80% quality for web images</li>
                  <li>• Convert PNG photos to JPEG</li>
                  <li>• Keep PNG for images with transparency</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900">Format Guide:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• JPEG: Best for photos, smaller files</li>
                  <li>• PNG: Best for graphics, supports transparency</li>
                  <li>• WebP: Modern format, smallest files</li>
                  <li>• Lower quality = smaller file size</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 mb-8 border">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              How to Use the Image Compressor
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <strong className="text-gray-900">Upload your images</strong>
                  <p className="text-gray-600 text-sm">Select one or multiple PNG, JPG, or WebP images to compress</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <strong className="text-gray-900">Choose compression level</strong>
                  <p className="text-gray-600 text-sm">Select the balance between file size and image quality</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <strong className="text-gray-900">Preview results</strong>
                  <p className="text-gray-600 text-sm">Compare original and compressed images side by side</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                <div>
                  <strong className="text-gray-900">Download compressed images</strong>
                  <p className="text-gray-600 text-sm">Save your optimized images with reduced file sizes</p>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{backgroundColor: '#fffbea'}} className="rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Compression Performance by Format
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">JPG/JPEG</h4>
                <div className="space-y-2">
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Compression</span>
                    <span className="font-medium">60-80%</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Quality</span>
                    <span className="font-medium">Excellent</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Best For</span>
                    <span className="font-medium">Photos</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">PNG</h4>
                <div className="space-y-2">
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Compression</span>
                    <span className="font-medium">40-70%</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Quality</span>
                    <span className="font-medium">Lossless</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Best For</span>
                    <span className="font-medium">Graphics</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">WebP</h4>
                <div className="space-y-2">
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Compression</span>
                    <span className="font-medium">70-90%</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Quality</span>
                    <span className="font-medium">Superior</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Best For</span>
                    <span className="font-medium">Web use</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{backgroundColor: '#fffbea'}} className="rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              When to Use Image Compression
            </h3>
            <div className="space-y-3">
              <p className="text-gray-700">
                <strong>Web Optimization:</strong> Compress images for faster website loading times and better user experience. 
                Smaller images mean faster page loads and improved SEO rankings.
              </p>
              <p className="text-gray-700">
                <strong>Email Attachments:</strong> Reduce file sizes to stay within email attachment limits while maintaining image quality. 
                Perfect for sharing photos and documents via email.
              </p>
              <p className="text-gray-700">
                <strong>Storage Management:</strong> Free up disk space by compressing your photo collections and archives. 
                Maintain your memories while using less storage space.
              </p>
              <p className="text-gray-700">
                <strong>Social Media:</strong> Optimize images for social media platforms that have file size restrictions. 
                Ensure your images look great while meeting platform requirements.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 mb-8 border">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Will compression reduce image quality?</h4>
                <p className="text-gray-700 text-sm">Our smart compression algorithms are designed to minimize quality loss while maximizing file size reduction. You can preview results before downloading.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">What file formats are supported?</h4>
                <p className="text-gray-700 text-sm">We support PNG, JPG/JPEG, and WebP formats. Each format is optimized using the best compression techniques for that specific format.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Can I compress multiple images at once?</h4>
                <p className="text-gray-700 text-sm">Yes, our batch processing feature allows you to compress multiple images simultaneously, saving you time and effort.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Are my images stored on your servers?</h4>
                <p className="text-gray-700 text-sm">No, all compression happens locally in your browser. Your images never leave your device, ensuring complete privacy and security.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const metadata = {
  title: 'Free Image Compressor - Reduce File Size Without Quality Loss | QuickToolsHQ',
  description: 'Compress PNG, JPG, and WebP images without quality loss. Free online image compressor that reduces file sizes by up to 80% while maintaining visual quality.',
  keywords: 'image compressor, compress images, reduce file size, image optimization, PNG compressor, JPG compressor, WebP compressor, online image compressor, free image compressor, image size reducer, optimize images, web image optimization, batch image compression',
  alternates: {
    canonical: 'https://quicktoolshq.com/tools/image-compressor',
  },
  openGraph: {
    title: 'Free Image Compressor - Reduce File Size Without Quality Loss',
    description: 'Compress PNG, JPG, and WebP images without losing quality with our free online image compressor.',
    url: 'https://quicktoolshq.com/tools/image-compressor',
    type: 'website',
  }
};
