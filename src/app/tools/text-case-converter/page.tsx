import Layout from '@/components/layout/Layout';
import ToolLayout from '@/components/layout/ToolLayout';
import TextCaseConverter from '@/components/tools/TextCaseConverter';

export default function TextCaseConverterPage() {
  return (
    <Layout>
      <ToolLayout
        title="Text Case Converter"
        description="Convert text between different cases - uppercase, lowercase, title case, camelCase, snake_case, and more. Free online text transformation tool."
      >
        <TextCaseConverter />
      </ToolLayout>
      
      {/* SEO Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="prose max-w-none">
          <div style={{backgroundColor: '#eef8ff'}} className="rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Free Text Case Converter - Transform Text Cases Online
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Convert text between multiple case formats instantly with our free online text case converter. 
              Transform your text to uppercase, lowercase, title case, camelCase, PascalCase, snake_case, kebab-case, and more. 
              Perfect for developers, writers, and content creators who need quick text formatting.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">Multiple Case Types</strong>
                <p className="text-sm text-gray-600">Support for 8+ different text cases</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">Instant Conversion</strong>
                <p className="text-sm text-gray-600">Real-time text transformation</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">Developer Friendly</strong>
                <p className="text-sm text-gray-600">Perfect for programming conventions</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 mb-8 border">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              How to Use the Text Case Converter
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <strong className="text-gray-900">Enter your text</strong>
                  <p className="text-gray-600 text-sm">Type or paste the text you want to convert into the input field</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <strong className="text-gray-900">Choose conversion type</strong>
                  <p className="text-gray-600 text-sm">Select from uppercase, lowercase, title case, camelCase, and more</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <strong className="text-gray-900">Copy converted text</strong>
                  <p className="text-gray-600 text-sm">Click the copy button to copy the converted text to your clipboard</p>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{backgroundColor: '#fffbea'}} className="rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Text Case Conversion Types
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Standard Cases</h4>
                <div className="space-y-2">
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">UPPERCASE</span>
                    <span className="font-medium">ALL CAPS</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">lowercase</span>
                    <span className="font-medium">all lowercase</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Title Case</span>
                    <span className="font-medium">First Letter Caps</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sentence case</span>
                    <span className="font-medium">First word caps</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Programming Cases</h4>
                <div className="space-y-2">
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">camelCase</span>
                    <span className="font-medium">firstWordLower</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">PascalCase</span>
                    <span className="font-medium">FirstWordUpper</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">snake_case</span>
                    <span className="font-medium">words_with_underscores</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">kebab-case</span>
                    <span className="font-medium">words-with-hyphens</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{backgroundColor: '#fffbea'}} className="rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Programming Naming Conventions
            </h3>
            <div className="space-y-3">
              <p className="text-gray-700">
                <strong>camelCase:</strong> Used in JavaScript, Java, and C# for variables and functions. 
                The first word is lowercase, subsequent words start with uppercase letters.
              </p>
              <p className="text-gray-700">
                <strong>PascalCase:</strong> Common for class names in most programming languages. 
                Every word starts with an uppercase letter, including the first word.
              </p>
              <p className="text-gray-700">
                <strong>snake_case:</strong> Popular in Python, Ruby, and database naming. 
                All words are lowercase and separated by underscores.
              </p>
              <p className="text-gray-700">
                <strong>kebab-case:</strong> Used in URLs, CSS classes, and file names. 
                All words are lowercase and separated by hyphens.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 mb-8 border">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">What case types are supported?</h4>
                <p className="text-gray-700 text-sm">Our converter supports uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case, kebab-case, and CONSTANT_CASE for comprehensive text transformation.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Is there a character limit?</h4>
                <p className="text-gray-700 text-sm">No, you can convert text of any length. The tool handles everything from single words to large documents efficiently in your browser.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Can I convert multiple lines at once?</h4>
                <p className="text-gray-700 text-sm">Yes, the converter preserves line breaks and can handle multi-line text, making it perfect for converting code blocks or formatted documents.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Which case should I use for programming?</h4>
                <p className="text-gray-700 text-sm">It depends on your language: JavaScript uses camelCase for variables, Python prefers snake_case, CSS uses kebab-case, and most languages use PascalCase for classes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const metadata = {
  title: 'Free Text Case Converter - Transform Text Cases Online | QuickToolsHQ',
  description: 'Convert text between different cases instantly. Transform to uppercase, lowercase, title case, camelCase, PascalCase, snake_case, kebab-case and more. Free online text case converter tool.',
  keywords: 'text case converter, uppercase converter, lowercase converter, title case converter, camelCase converter, PascalCase converter, snake_case converter, kebab-case converter, text transformer, programming naming conventions, variable naming, code formatting, text formatting tool',
  alternates: {
    canonical: 'https://quicktoolshq.com/tools/text-case-converter',
  },
  openGraph: {
    title: 'Free Text Case Converter - Transform Text Cases Online',
    description: 'Convert text between multiple case formats instantly. Perfect for developers and content creators.',
    url: 'https://quicktoolshq.com/tools/text-case-converter',
    type: 'website',
  }
};
