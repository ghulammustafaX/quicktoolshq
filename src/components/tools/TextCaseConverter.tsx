'use client';

import { useState, useEffect } from 'react';

interface NotificationMessage {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  icon: string;
}

export default function TextCaseConverter() {
  const [text, setText] = useState<string>('');
  const [notifications, setNotifications] = useState<NotificationMessage[]>([]);

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

  const conversions = {
    lowercase: (str: string) => str.toLowerCase(),
    uppercase: (str: string) => str.toUpperCase(),
    titlecase: (str: string) => str.replace(/\w\S*/g, (txt) => 
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    ),
    sentencecase: (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(),
    camelcase: (str: string) => str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => 
        index === 0 ? word.toLowerCase() : word.toUpperCase()
      )
      .replace(/\s+/g, ''),
    pascalcase: (str: string) => str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase())
      .replace(/\s+/g, ''),
    snakecase: (str: string) => str
      .replace(/\W+/g, ' ')
      .split(/ |\B(?=[A-Z])/)
      .map(word => word.toLowerCase())
      .join('_'),
    kebabcase: (str: string) => str
      .replace(/\W+/g, ' ')
      .split(/ |\B(?=[A-Z])/)
      .map(word => word.toLowerCase())
      .join('-'),
    alternatingcase: (str: string) => str
      .split('')
      .map((char, index) => index % 2 === 0 ? char.toLowerCase() : char.toUpperCase())
      .join(''),
    reversetext: (str: string) => str.split('').reverse().join('')
  };

  const caseOptions = [
    { key: 'lowercase', name: 'lowercase', description: 'all letters in lowercase' },
    { key: 'uppercase', name: 'UPPERCASE', description: 'ALL LETTERS IN UPPERCASE' },
    { key: 'titlecase', name: 'Title Case', description: 'First Letter Of Each Word Capitalized' },
    { key: 'sentencecase', name: 'Sentence case', description: 'First letter capitalized, rest lowercase' },
    { key: 'camelcase', name: 'camelCase', description: 'firstWordLowerRestCapitalized' },
    { key: 'pascalcase', name: 'PascalCase', description: 'EachWordCapitalizedNoSpaces' },
    { key: 'snakecase', name: 'snake_case', description: 'words_separated_by_underscores' },
    { key: 'kebabcase', name: 'kebab-case', description: 'words-separated-by-hyphens' },
    { key: 'alternatingcase', name: 'aLtErNaTiNg CaSe', description: 'letters alternate between cases' },
    { key: 'reversetext', name: 'txet esreveR', description: 'text written backwards' }
  ];

  const convertText = (conversionType: keyof typeof conversions) => {
    if (!text) return '';
    return conversions[conversionType](text);
  };

  const copyToClipboard = async (convertedText: string) => {
    if (!convertedText.trim()) {
      showNotification('Nothing to copy! Please enter some text first', 'info');
      return;
    }
    
    try {
      await navigator.clipboard.writeText(convertedText);
      showNotification('Text copied to clipboard!', 'success');
    } catch {
      showNotification('Copy failed! Try selecting and copying manually', 'error');
    }
  };

  const pasteFromClipboard = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      if (clipboardText.trim() === '') {
        showNotification('Your clipboard seems to be empty. Copy some text first!', 'info');
        return;
      }
      setText(clipboardText);
      showNotification('Text pasted successfully!', 'success');
    } catch {
      showNotification('Couldn\'t access clipboard. Please paste manually using Ctrl+V', 'error');
    }
  };

  const clearText = () => {
    setText('');
    showNotification('Text cleared! Ready for your next content', 'info');
  };

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
    <div className="space-y-6">
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

      {/* Text Input */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Enter your text
          </label>
          <div className="flex space-x-2">
            <button
              onClick={pasteFromClipboard}
              className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded transition-colors"
            >
              Paste
            </button>
            <button
              onClick={clearText}
              disabled={!text}
              className="text-sm bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded transition-colors disabled:opacity-50"
            >
              Clear
            </button>
          </div>
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here..."
          className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B5AD] focus:border-transparent resize-none"
        />
      </div>

      {/* Conversion Results */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Converted Text</h3>
        
        <div className="grid gap-4">
          {caseOptions.map((option) => {
            const convertedText = convertText(option.key as keyof typeof conversions);
            
            return (
              <div key={option.key} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">{option.name}</h4>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(convertedText)}
                    disabled={!text}
                    className="text-sm bg-[#00B5AD] text-white px-3 py-1 rounded hover:bg-[#009B94] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Copy
                  </button>
                </div>
                <div className="bg-white p-3 rounded border min-h-[3rem] flex items-center">
                  <span className={`${convertedText ? 'text-gray-900' : 'text-gray-400'}`}>
                    {convertedText || 'Enter text above to see conversion...'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Text Statistics */}
      {text && (
        <div className="bg-blue-50 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Text Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="font-medium">Characters:</span> {text.length}
            </div>
            <div>
              <span className="font-medium">Words:</span> {text.trim() ? text.trim().split(/\s+/).length : 0}
            </div>
            <div>
              <span className="font-medium">Uppercase:</span> {(text.match(/[A-Z]/g) || []).length}
            </div>
            <div>
              <span className="font-medium">Lowercase:</span> {(text.match(/[a-z]/g) || []).length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
