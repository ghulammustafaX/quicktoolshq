'use client';

import { useState, useEffect } from 'react';

interface PasswordOptions {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  excludeSimilar: boolean;
  excludeAmbiguous: boolean;
}

interface NotificationMessage {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  icon: string;
}

export default function PasswordGenerator() {
  const [options, setOptions] = useState<PasswordOptions>({
    length: 12,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
    excludeSimilar: false,
    excludeAmbiguous: false
  });

  const [password, setPassword] = useState<string>('');
  const [notifications, setNotifications] = useState<NotificationMessage[]>([]);
  const [customInput, setCustomInput] = useState<string>('');
  const [generationMode, setGenerationMode] = useState<'random' | 'custom'>('random');

  const showNotification = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Date.now().toString();
    const icons = {
      success: '✓',
      error: '!', 
      info: 'i'
    };
    
    const newNotification: NotificationMessage = { 
      id, 
      message, 
      type, 
      icon: icons[type] 
    };
    
    setNotifications(prev => [...prev, newNotification]);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(notification => notification.id !== id));
    }, 3000);
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  const similar = 'il1Lo0O';
  const ambiguous = '{}[]()/\\\'"`~,;.<>';

  const generatePassword = () => {
    let charset = '';
    
    if (options.includeUppercase) charset += uppercase;
    if (options.includeLowercase) charset += lowercase;
    if (options.includeNumbers) charset += numbers;
    if (options.includeSymbols) charset += symbols;

    if (options.excludeSimilar) {
      charset = charset.split('').filter(char => !similar.includes(char)).join('');
    }

    if (options.excludeAmbiguous) {
      charset = charset.split('').filter(char => !ambiguous.includes(char)).join('');
    }

    if (charset.length === 0) {
      showNotification('Please select at least one character type', 'error');
      return;
    }

    let result = '';
    
    // Ensure at least one character from each selected type
    if (options.includeUppercase) {
      let uppercaseChars = uppercase;
      if (options.excludeSimilar) uppercaseChars = uppercaseChars.split('').filter(char => !similar.includes(char)).join('');
      result += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    }
    
    if (options.includeLowercase) {
      let lowercaseChars = lowercase;
      if (options.excludeSimilar) lowercaseChars = lowercaseChars.split('').filter(char => !similar.includes(char)).join('');
      result += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    }
    
    if (options.includeNumbers) {
      let numberChars = numbers;
      if (options.excludeSimilar) numberChars = numberChars.split('').filter(char => !similar.includes(char)).join('');
      result += numberChars[Math.floor(Math.random() * numberChars.length)];
    }
    
    if (options.includeSymbols) {
      let symbolChars = symbols;
      if (options.excludeAmbiguous) symbolChars = symbolChars.split('').filter(char => !ambiguous.includes(char)).join('');
      result += symbolChars[Math.floor(Math.random() * symbolChars.length)];
    }

    // Fill the rest randomly
    for (let i = result.length; i < options.length; i++) {
      result += charset[Math.floor(Math.random() * charset.length)];
    }

    // Shuffle the result
    result = result.split('').sort(() => 0.5 - Math.random()).join('');

    setPassword(result);
  };

  const generateCustomPassword = () => {
    if (!customInput.trim()) return;

    const base = customInput.trim();
    let result = '';
    
    // Transform the input creatively
    const transformations = {
      'a': '@', 'e': '3', 'i': '!', 'o': '0', 's': '$', 't': '7', 'l': '1', 'g': '9'
    };
    
    // Apply character substitutions
    for (const char of base.toLowerCase()) {
      if (transformations[char as keyof typeof transformations]) {
        result += transformations[char as keyof typeof transformations];
      } else {
        result += Math.random() > 0.5 ? char.toUpperCase() : char;
      }
    }
    
    // Add random numbers
    const randomNumbers = Math.floor(Math.random() * 9999).toString().padStart(4, '0');
    result += randomNumbers;
    
    // Add symbols if enabled
    if (options.includeSymbols) {
      const extraSymbols = symbols.split('').sort(() => 0.5 - Math.random()).slice(0, 2).join('');
      result += extraSymbols;
    }
    
    // Ensure minimum length
    while (result.length < options.length) {
      const charset = uppercase + lowercase + numbers + (options.includeSymbols ? symbols : '');
      result += charset[Math.floor(Math.random() * charset.length)];
    }
    
    // Trim to desired length
    if (result.length > options.length) {
      result = result.substring(0, options.length);
    }
    
    // Shuffle parts of the result
    const parts = [result.slice(0, Math.floor(result.length/2)), result.slice(Math.floor(result.length/2))];
    result = parts.sort(() => 0.5 - Math.random()).join('');
    
    setPassword(result);
  };

  const handleGenerate = () => {
    if (generationMode === 'custom') {
      generateCustomPassword();
    } else {
      generatePassword();
    }
  };

  const copyToClipboard = async (text: string) => {
    if (!text.trim()) {
      showNotification('No password to copy! Please generate a password first', 'info');
      return;
    }
    
    try {
      await navigator.clipboard.writeText(text);
      showNotification('Password copied to clipboard!', 'success');
    } catch {
      // Fallback for older browsers
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Password copied to clipboard!', 'success');
      } catch {
        showNotification('Copy failed! Try selecting and copying manually', 'error');
      }
    }
  };

  const getPasswordStrength = (pwd: string): { strength: string; color: string; score: number } => {
    let score = 0;
    
    if (pwd.length >= 8) score += 1;
    if (pwd.length >= 12) score += 1;
    if (/[a-z]/.test(pwd)) score += 1;
    if (/[A-Z]/.test(pwd)) score += 1;
    if (/[0-9]/.test(pwd)) score += 1;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1;
    if (pwd.length >= 16) score += 1;

    if (score < 3) return { strength: 'Weak', color: 'text-red-600', score };
    if (score < 5) return { strength: 'Medium', color: 'text-yellow-600', score };
    if (score < 6) return { strength: 'Strong', color: 'text-green-600', score };
    return { strength: 'Very Strong', color: 'text-green-700', score };
  };

  const strengthInfo = password ? getPasswordStrength(password) : null;

  // Add CSS for animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideInDown {
        from {
          transform: translateY(-100%);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
      
      @keyframes shrinkProgress {
        from { width: 100%; }
        to { width: 0%; }
      }
      
      .animate-slide-in {
        animation: slideInDown 0.4s ease-out;
      }
      
      .progress-bar {
        animation: shrinkProgress 3s linear forwards;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div className="space-y-8">
      {/* Notifications */}
      {notifications.length > 0 && (
        <div className="fixed top-4 right-4 z-50 space-y-3 max-w-sm">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`
                relative p-4 rounded-xl shadow-xl border-l-4 transform transition-all duration-300
                animate-slide-in backdrop-blur-sm
                ${notification.type === 'success' 
                  ? 'bg-emerald-50/95 border-emerald-400 text-emerald-800' 
                  : notification.type === 'error'
                  ? 'bg-red-50/95 border-red-400 text-red-800'
                  : 'bg-blue-50/95 border-blue-400 text-blue-800'
                }
              `}
            >
              <div className="flex items-start">
                <span className="text-xl mr-3 flex-shrink-0">{notification.icon}</span>
                <div className="flex-1">
                  <p className="font-medium text-sm leading-relaxed">{notification.message}</p>
                </div>
                <button
                  onClick={() => removeNotification(notification.id)}
                  className={`
                    ml-3 flex-shrink-0 rounded-full p-1 hover:bg-white/30 transition-colors
                    ${notification.type === 'success' ? 'text-emerald-600 hover:text-emerald-800' 
                      : notification.type === 'error' ? 'text-red-600 hover:text-red-800'
                      : 'text-blue-600 hover:text-blue-800'
                    }
                  `}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 h-1 w-full bg-white/30 overflow-hidden rounded-b-xl">
                <div 
                  className={`h-full progress-bar ${
                    notification.type === 'success' ? 'bg-emerald-600' 
                    : notification.type === 'error' ? 'bg-red-600'
                    : 'bg-blue-600'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Password Options */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-2 h-8 bg-[#00B5AD] rounded-full mr-3"></div>
          Password Options
        </h3>

        {/* Generation Mode Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Generation Mode
          </label>
          <div className="flex space-x-3">
            <button
              onClick={() => setGenerationMode('random')}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-colors duration-200 ${
                generationMode === 'random'
                  ? 'bg-[#00B5AD] text-white shadow-lg hover:bg-[#009B94]'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Random Password
            </button>
            <button
              onClick={() => setGenerationMode('custom')}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-colors duration-200 ${
                generationMode === 'custom'
                  ? 'bg-[#00B5AD] text-white shadow-lg hover:bg-[#009B94]'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              From Custom Input
            </button>
          </div>
        </div>

        {/* Custom Input Field */}
        {generationMode === 'custom' && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Enter Name or Text to Convert
            </label>
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Enter your name, word, or phrase..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B5AD] focus:border-transparent transition-all duration-200 hover:border-gray-400"
            />
            <p className="text-sm text-gray-500 mt-2">
              We&apos;ll transform your input into a strong password using character substitutions and randomization.
            </p>
          </div>
        )}
        
        {/* Length with Custom Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Password Length
          </label>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <input
                type="range"
                min="4"
                max="128"
                value={options.length}
                onChange={(e) => setOptions({...options, length: parseInt(e.target.value)})}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer hover:bg-gray-300 transition-colors duration-200"
                style={{
                  background: `linear-gradient(to right, #00B5AD 0%, #00B5AD ${((options.length - 4) / (128 - 4)) * 100}%, #E5E7EB ${((options.length - 4) / (128 - 4)) * 100}%, #E5E7EB 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>4</span>
                <span>128</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                min="4"
                max="128"
                value={options.length}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (value >= 4 && value <= 128) {
                    setOptions({...options, length: value});
                  }
                }}
                className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-center font-medium focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <span className="text-sm font-medium text-gray-600 bg-white px-2 py-1 rounded border">chars</span>
            </div>
          </div>
        </div>

        {/* Character Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-[#00B5AD] hover:bg-[#00B5AD]/5 transition-colors duration-200 cursor-pointer">
            <input
              type="checkbox"
              checked={options.includeUppercase}
              onChange={(e) => setOptions({...options, includeUppercase: e.target.checked})}
              className="w-5 h-5 text-[#00B5AD] border-gray-300 rounded focus:ring-[#00B5AD] mr-3"
            />
            <div>
              <span className="text-sm font-medium text-gray-900">Uppercase Letters</span>
              <p className="text-xs text-gray-500">A-Z</p>
            </div>
          </label>
          
          <label className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-[#00B5AD] hover:bg-[#00B5AD]/5 transition-colors duration-200 cursor-pointer">
            <input
              type="checkbox"
              checked={options.includeLowercase}
              onChange={(e) => setOptions({...options, includeLowercase: e.target.checked})}
              className="w-5 h-5 text-[#00B5AD] border-gray-300 rounded focus:ring-[#00B5AD] mr-3"
            />
            <div>
              <span className="text-sm font-medium text-gray-900">Lowercase Letters</span>
              <p className="text-xs text-gray-500">a-z</p>
            </div>
          </label>
          
          <label className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-[#00B5AD] hover:bg-[#00B5AD]/5 transition-colors duration-200 cursor-pointer">
            <input
              type="checkbox"
              checked={options.includeNumbers}
              onChange={(e) => setOptions({...options, includeNumbers: e.target.checked})}
              className="w-5 h-5 text-[#00B5AD] border-gray-300 rounded focus:ring-[#00B5AD] mr-3"
            />
            <div>
              <span className="text-sm font-medium text-gray-900">Numbers</span>
              <p className="text-xs text-gray-500">0-9</p>
            </div>
          </label>
          
          <label className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-[#00B5AD] hover:bg-[#00B5AD]/5 transition-colors duration-200 cursor-pointer">
            <input
              type="checkbox"
              checked={options.includeSymbols}
              onChange={(e) => setOptions({...options, includeSymbols: e.target.checked})}
              className="w-5 h-5 text-[#00B5AD] border-gray-300 rounded focus:ring-[#00B5AD] mr-3"
            />
            <div>
              <span className="text-sm font-medium text-gray-900">Symbols</span>
              <p className="text-xs text-gray-500">!@#$%^&*</p>
            </div>
          </label>
          
          <label className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-[#00B5AD] hover:bg-[#00B5AD]/5 transition-colors duration-200 cursor-pointer">
            <input
              type="checkbox"
              checked={options.excludeSimilar}
              onChange={(e) => setOptions({...options, excludeSimilar: e.target.checked})}
              className="w-5 h-5 text-[#00B5AD] border-gray-300 rounded focus:ring-[#00B5AD] mr-3"
            />
            <div>
              <span className="text-sm font-medium text-gray-900">Exclude Similar</span>
              <p className="text-xs text-gray-500">il1Lo0O</p>
            </div>
          </label>
          
          <label className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-[#00B5AD] hover:bg-[#00B5AD]/5 transition-colors duration-200 cursor-pointer">
            <input
              type="checkbox"
              checked={options.excludeAmbiguous}
              onChange={(e) => setOptions({...options, excludeAmbiguous: e.target.checked})}
              className="w-5 h-5 text-[#00B5AD] border-gray-300 rounded focus:ring-[#00B5AD] mr-3"
            />
            <div>
              <span className="text-sm font-medium text-gray-900">Exclude Ambiguous</span>
              <p className="text-xs text-gray-500">{`{}[]()`}</p>
            </div>
          </label>
        </div>
      </div>

      {/* Generate Button */}
      <div className="text-center">
        <button
          onClick={handleGenerate}
          className="bg-[#00B5AD] text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-[#008B82] transition-colors duration-200"
        >
          Generate Password
        </button>
      </div>

      {/* Generated Password */}
      {password && (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center">
              <span className="text-xl sm:text-2xl mr-2 sm:mr-3"></span>
              <span className="text-base sm:text-xl">Your Secure Password</span>
            </h3>
            {strengthInfo && (
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${
                  strengthInfo.strength === 'Very Strong' ? 'bg-green-500' :
                  strengthInfo.strength === 'Strong' ? 'bg-blue-500' :
                  strengthInfo.strength === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
                }`}></div>
                <span className={`font-bold text-sm sm:text-lg ${strengthInfo.color}`}>
                  {strengthInfo.strength}
                </span>
              </div>
            )}
          </div>
          <div className="bg-white border-2 border-dashed border-gray-300 p-2 sm:p-4 rounded-lg font-mono text-sm sm:text-lg break-all mb-4 relative">
            <span className="select-all break-words">{password}</span>
            <div className="absolute top-2 right-2">
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {password.length} chars
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <button
              onClick={() => copyToClipboard(password)}
              disabled={!password}
              className="px-4 sm:px-6 py-2 rounded-lg transition-colors duration-200 font-medium bg-[#00B5AD] text-white hover:bg-[#008B82] disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              Copy Password
            </button>
            {strengthInfo && (
              <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm">
                <span className="text-gray-600">Strength Score:</span>
                <div className="flex space-x-1">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < strengthInfo.score ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium">{strengthInfo.score}/7</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
