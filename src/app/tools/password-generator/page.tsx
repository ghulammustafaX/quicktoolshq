import Layout from '@/components/layout/Layout';
import ToolLayout from '@/components/layout/ToolLayout';
import PasswordGenerator from '@/components/tools/PasswordGenerator';

export default function PasswordGeneratorPage() {
  return (
    <Layout>
      <ToolLayout
        title="Password Generator"
        description="Generate strong, secure passwords with customizable options. Create unique passwords with uppercase, lowercase, numbers, and symbols to protect your accounts."
      >
        <PasswordGenerator />
      </ToolLayout>
      
      {/* SEO Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="prose max-w-none">
          <div style={{backgroundColor: '#eef8ff'}} className="rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Free Secure Password Generator - Create Strong Passwords Online
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Generate cryptographically secure passwords with our free online password generator. 
              Create strong, unique passwords with customizable options including length, character types, and custom input transformation. 
              Our tool uses browser-based encryption to ensure your passwords are generated locally and never stored or transmitted.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">Cryptographically Secure</strong>
                <p className="text-sm text-gray-600">Military-grade random generation</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">100% Private</strong>
                <p className="text-sm text-gray-600">Generated locally, never stored</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <strong className="text-gray-900 block mb-1">Custom Transformation</strong>
                <p className="text-sm text-gray-600">Convert names to strong passwords</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 mb-8 border">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              How to Use the Password Generator
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <strong className="text-gray-900">Choose generation mode</strong>
                  <p className="text-gray-600 text-sm">Select random password generation or custom input transformation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <strong className="text-gray-900">Configure password options</strong>
                  <p className="text-gray-600 text-sm">Set length, character types, and exclusion preferences</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <strong className="text-gray-900">Generate and copy password</strong>
                  <p className="text-gray-600 text-sm">Click generate to create your secure password and copy it instantly</p>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{backgroundColor: '#fffbea'}} className="rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Password Generation Features
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Random Password Generation</h4>
                <div className="space-y-2">
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Length Range</span>
                    <span className="font-medium">4-128 characters</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Character Types</span>
                    <span className="font-medium">Upper, Lower, Numbers, Symbols</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-700">Exclusion Options</span>
                    <span className="font-medium">Similar & Ambiguous chars</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Strength Assessment</span>
                    <span className="font-medium">Real-time scoring</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Custom Input Transformation</h4>
                <div className="space-y-3">
                  <div>
                    <strong className="text-gray-800">Smart Substitution:</strong>
                    <p className="text-gray-600 text-sm">Converts letters to numbers and symbols (a→@, e→3, etc.)</p>
                  </div>
                  <div>
                    <strong className="text-gray-800">Random Enhancement:</strong>
                    <p className="text-gray-600 text-sm">Adds random numbers, symbols, and case variations</p>
                  </div>
                  <div>
                    <strong className="text-gray-800">Length Optimization:</strong>
                    <p className="text-gray-600 text-sm">Ensures password meets your specified length requirements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{backgroundColor: '#fffbea'}} className="rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Password Security Best Practices
            </h3>
            <div className="space-y-3">
              <p className="text-gray-700">
                <strong>Unique Passwords:</strong> Use a different password for each account to prevent credential stuffing attacks. 
                Never reuse passwords across multiple platforms or services.
              </p>
              <p className="text-gray-700">
                <strong>Password Managers:</strong> Store passwords in a reputable password manager like Bitwarden, 1Password, 
                or LastPass. This allows you to use complex passwords without memorizing them.
              </p>
              <p className="text-gray-700">
                <strong>Two-Factor Authentication:</strong> Enable 2FA whenever available. Even if your password is compromised, 
                2FA provides an additional security layer to protect your accounts.
              </p>
              <p className="text-gray-700">
                <strong>Regular Updates:</strong> Change passwords periodically, especially after data breaches. 
                Monitor breach notifications and update affected passwords immediately.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 mb-8 border">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">How secure are the generated passwords?</h4>
                <p className="text-gray-700 text-sm">Our passwords use cryptographically secure random generation through your browser's crypto.getRandomValues() API. This ensures true randomness and maximum security against brute force attacks.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">What is custom input transformation?</h4>
                <p className="text-gray-700 text-sm">This feature converts your personal input (like names or words) into strong passwords using character substitution, randomization, and enhancement techniques while maintaining some connection to your original input.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Are my passwords stored or transmitted?</h4>
                <p className="text-gray-700 text-sm">No. All password generation happens locally in your browser. Nothing is stored on our servers or transmitted over the internet, ensuring complete privacy and security.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">What password length should I use?</h4>
                <p className="text-gray-700 text-sm">We recommend at least 12-16 characters for most accounts. For high-security accounts (banking, email), use 20+ characters. Longer passwords provide exponentially better protection against attacks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const metadata = {
  title: 'Password Generator - Create Strong Passwords | QuickToolsHQ',
  description: 'Generate secure passwords with our free online tool. Create random passwords or transform custom input. Features length control and strength assessment.',
  keywords: 'password generator, secure passwords, strong passwords, random password, password security, custom password generator, password transformer, cybersecurity, password strength checker',
  alternates: {
  canonical: 'https://www.quicktoolshq.com/tools/password-generator',
  },
  openGraph: {
    title: 'Password Generator - Create Secure Passwords & Custom Input',
    description: 'Generate cryptographically secure passwords or transform your custom input into strong passwords. Free tool with advanced security features.',
  url: 'https://www.quicktoolshq.com/tools/password-generator',
    type: 'website',
  }
};
