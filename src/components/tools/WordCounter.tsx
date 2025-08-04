'use client';

import { useState, useEffect } from 'react';

interface TextStats {
  characters: number;
  charactersNoSpaces: number;
  words: number;
  sentences: number;
  paragraphs: number;
  readingTime: number;
}

interface NotificationMessage {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  icon: string;
}

export default function WordCounter() {
  const [text, setText] = useState<string>('');
  const [notifications, setNotifications] = useState<NotificationMessage[]>([]);
  const [stats, setStats] = useState<TextStats>({
    characters: 0,
    charactersNoSpaces: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: 0
  });

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

  useEffect(() => {
    const calculateStats = () => {
      const characters = text.length;
      const charactersNoSpaces = text.replace(/\s/g, '').length;
      
      // Count words (split by whitespace and filter empty strings)
      const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
      
      // Count sentences (split by sentence endings)
      const sentences = text.trim() === '' ? 0 : 
        text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
      
      // Count paragraphs (split by double line breaks)
      const paragraphs = text.trim() === '' ? 0 : 
        text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
      
      // Calculate reading time (average 200 words per minute)
      const readingTime = Math.ceil(words / 200);

      setStats({
        characters,
        charactersNoSpaces,
        words,
        sentences,
        paragraphs,
        readingTime
      });
    };

    calculateStats();
  }, [text]);

  const clearText = () => {
    setText('');
    showNotification('Text cleared! Ready for your next content', 'info');
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

  const copyText = async () => {
    if (text.trim() === '') {
      showNotification('Nothing to copy! Please enter some text first', 'info');
      return;
    }
    
    try {
      await navigator.clipboard.writeText(text);
      showNotification('Text copied to clipboard!', 'success');
    } catch {
      showNotification('Copy failed! Try selecting and copying manually', 'error');
    }
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

      {/* Text Input Area */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Enter your text below
          </label>
          <div className="flex space-x-2">
            <button
              onClick={pasteFromClipboard}
              className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded transition-colors"
            >
              Paste
            </button>
            <button
              onClick={copyText}
              disabled={!text}
              className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded transition-colors disabled:opacity-50"
            >
              Copy
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
          className="w-full h-64 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B5AD] focus:border-transparent resize-none"
        />
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600">{stats.characters}</div>
          <div className="text-sm text-gray-600">Characters</div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600">{stats.charactersNoSpaces}</div>
          <div className="text-sm text-gray-600">Characters (no spaces)</div>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <div className="text-1xl font-bold text-purple-600">{stats.words}</div>
          <div className="text-sm text-gray-600">Words</div>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-orange-600">{stats.sentences}</div>
          <div className="text-sm text-gray-600">Sentences</div>
        </div>
        
        <div className="bg-red-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-red-600">{stats.paragraphs}</div>
          <div className="text-sm text-gray-600">Paragraphs</div>
        </div>
        
        <div className="bg-indigo-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-indigo-600">{stats.readingTime}</div>
          <div className="text-sm text-gray-600">Minutes to read</div>
        </div>
      </div>

      {/* Additional Information */}
      {text && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Additional Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Average words per sentence:</strong> {
                stats.sentences > 0 ? Math.round((stats.words / stats.sentences) * 10) / 10 : 0
              }
            </div>
            <div>
              <strong>Average characters per word:</strong> {
                stats.words > 0 ? Math.round((stats.charactersNoSpaces / stats.words) * 10) / 10 : 0
              }
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
