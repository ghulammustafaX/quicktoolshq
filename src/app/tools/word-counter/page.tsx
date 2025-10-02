import Layout from '@/components/layout/Layout';
import ToolLayout from '@/components/layout/ToolLayout';
import WordCounter from '@/components/tools/WordCounter';

export default function WordCounterPage() {
  return (
    <Layout>
      <ToolLayout
        title="Word Counter"
        description="Count words, characters, sentences, and paragraphs in your text. Get instant results with reading time estimates and text analysis."
      >
        <WordCounter />
      </ToolLayout>
      
      {/* SEO Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="prose max-w-none">
          <div style={{backgroundColor: '#eef8ff'}} className="rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Free Word Counter & Text Analyzer Online
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Count words, characters, sentences, and paragraphs instantly with our comprehensive text analyzer. 
              Perfect for writers, students, and professionals who need to track text length and optimize content 
              for various platforms including social media, academic papers, and web content.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">Real-time Counting</strong>
                <p className="text-sm text-gray-600">Count as you type</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">Detailed Analytics</strong>
                <p className="text-sm text-gray-600">Multiple text metrics</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">100% Private</strong>
                <p className="text-sm text-gray-600">No data stored</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 mb-8 border">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Text Analysis Features
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <strong className="text-gray-900">Character Count (with spaces)</strong>
                  <p className="text-gray-600 text-sm">Total characters including spaces and punctuation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <strong className="text-gray-900">Character Count (no spaces)</strong>
                  <p className="text-gray-600 text-sm">Characters excluding spaces for precise counts</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <strong className="text-gray-900">Word Count & Reading Time</strong>
                  <p className="text-gray-600 text-sm">Total words with estimated reading time (200 words/minute)</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                <div>
                  <strong className="text-gray-900">Sentence & Paragraph Analysis</strong>
                  <p className="text-gray-600 text-sm">Count sentences and paragraphs for structure analysis</p>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{backgroundColor: '#fffbea'}} className="rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Common Use Cases for Word Counting
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Academic & Professional</h4>
                <div className="space-y-2">
                  <p className="text-gray-700 text-sm">• Academic papers and essays with word limits</p>
                  <p className="text-gray-700 text-sm">• Resume and cover letter optimization</p>
                  <p className="text-gray-700 text-sm">• Research proposals and abstracts</p>
                  <p className="text-gray-700 text-sm">• Grant applications and reports</p>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Content & Marketing</h4>
                <div className="space-y-2">
                  <p className="text-gray-700 text-sm">• Blog articles and web content</p>
                  <p className="text-gray-700 text-sm">• Social media posts (Twitter, LinkedIn)</p>
                  <p className="text-gray-700 text-sm">• Email newsletters and marketing copy</p>
                  <p className="text-gray-700 text-sm">• Book manuscripts and creative writing</p>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{backgroundColor: '#fffbea'}} className="rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Writing Optimization Tips
            </h3>
            <div className="space-y-3">
              <p className="text-gray-700">
                <strong>Optimal Word Counts:</strong> Most web content performs best with 300-800 words per article. 
                Blog posts should target 1,500-2,500 words for SEO benefits.
              </p>
              <p className="text-gray-700">
                <strong>Sentence Variety:</strong> Aim for varied sentence lengths to improve readability. 
                Mix short, punchy sentences with longer, more detailed ones.
              </p>
              <p className="text-gray-700">
                <strong>Paragraph Structure:</strong> Keep paragraphs concise (2-4 sentences) for web content. 
                Academic writing can have longer paragraphs with more supporting details.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 mb-8 border">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions About Word Counting
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">How accurate is the word count?</h4>
                <p className="text-gray-700 text-sm">Our word counter uses standard algorithms that match most word processors. It counts sequences of characters separated by spaces as individual words.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Does the tool count punctuation marks?</h4>
                <p className="text-gray-700 text-sm">Punctuation marks are included in character counts but not in word counts. The character count (no spaces) excludes spaces but includes all other characters.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">How is reading time calculated?</h4>
                <p className="text-gray-700 text-sm">Reading time is estimated based on an average reading speed of 200 words per minute, which is standard for adult readers with average text complexity.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Can I use this for social media posts?</h4>
                <p className="text-gray-700 text-sm">Yes! It's perfect for checking character limits: Twitter (280 chars), Instagram captions (2,200 chars), LinkedIn posts (3,000 chars), and Facebook posts (63,206 chars).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const metadata = {
  title: 'Free Word Counter - Count Words, Characters & Text Analysis Tool | QuickToolsHQ',
  description: 'Count words, characters, sentences, and paragraphs instantly with our free online word counter. Get reading time estimates and detailed text analysis for academic, professional, and creative writing.',
  keywords: 'word counter, character counter, text analysis, writing tool, essay counter, content writing, word count checker, text statistics, reading time calculator, paragraph counter, sentence counter, social media character limit, academic writing tool, SEO content analyzer',
  alternates: {
    canonical: 'https://quicktoolshq.com/tools/word-counter',
  },
  openGraph: {
    title: 'Free Word Counter - Count Words, Characters & Text Analysis',
    description: 'Instantly count words, characters, sentences, and paragraphs with reading time estimates. Perfect for writers, students, and content creators.',
    url: 'https://quicktoolshq.com/tools/word-counter',
    type: 'website',
  }
};
