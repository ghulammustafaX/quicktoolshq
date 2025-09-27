import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B1C1D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">QuickToolsHQ</h3>
            <p className="text-gray-300 mb-4">
              Your HQ for fast online tools. Access calculators, converters, 
              text utilities, and file processing tools all in one place.
            </p>
            <p className="text-sm text-gray-400 hidden md:block">
              © {currentYear} QuickToolsHQ. All rights reserved.
            </p>
          </div>
          
          {/* Tools & Links responsive layout */}
          <div className="col-span-2">
            {/* Mobile: Stacked layout for screens < 380px */}
            <div className="flex flex-col gap-8 min-[380px]:hidden">
              {/* Tools Section */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Tools</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link href="/tools/bmi-calculator" className="hover:text-[#00B5AD] transition-colors duration-200">
                      BMI Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/word-counter" className="hover:text-[#00B5AD] transition-colors duration-200">
                      Word Counter
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/unit-converter" className="hover:text-[#00B5AD] transition-colors duration-200">
                      Unit Converter
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/pdf-converter" className="hover:text-[#00B5AD] transition-colors duration-200">
                      PDF Converter
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Links Section */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Links</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link href="/about" className="hover:text-[#00B5AD] transition-colors duration-200">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-[#00B5AD] transition-colors duration-200">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="hover:text-[#00B5AD] transition-colors duration-200">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service" className="hover:text-[#00B5AD] transition-colors duration-200">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden min-[380px]:flex gap-8">
              <div className="flex-1">
                <h4 className="text-lg font-semibold mb-4">Tools</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link href="/tools/bmi-calculator" className="hover:text-[#00B5AD] transition-colors duration-200">
                      BMI Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/word-counter" className="hover:text-[#00B5AD] transition-colors duration-200">
                      Word Counter
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/unit-converter" className="hover:text-[#00B5AD] transition-colors duration-200">
                      Unit Converter
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/pdf-converter" className="hover:text-[#00B5AD] transition-colors duration-200">
                      PDF Converter
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Links Section */}
              <div className="flex-1">
                <h4 className="text-lg font-semibold mb-4">Links</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link href="/about" className="hover:text-[#00B5AD] transition-colors duration-200">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-[#00B5AD] transition-colors duration-200">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="hover:text-[#00B5AD] transition-colors duration-200">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service" className="hover:text-[#00B5AD] transition-colors duration-200">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Centered copyright notice - Only on mobile/tablet */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center md:hidden">
          <p className="text-sm text-gray-400">
            © {currentYear} QuickToolsHQ. All rights reserved.
          </p>
         <p className="text-xs text-green-400 mt-2">
           <span className="font-semibold">Privacy-first:</span> All tools process your data locally in your browser. No files or text ever leave your device.
         </p>
        </div>
      </div>
    </footer>
  );
}