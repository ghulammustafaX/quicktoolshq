'use client';

import { useState, useRef } from 'react';
import NextImage from 'next/image';

interface CompressionOptions {
  quality: number;
  maxWidth: number;
  maxHeight: number;
  format: 'original' | 'jpeg' | 'webp';
}

interface CompressionResult {
  originalFile: File;
  compressedDataUrl: string;
  originalSize: number;
  compressedSize: number;
  compressionRatio: number;
}

export default function ImageCompressor() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [compressionResults, setCompressionResults] = useState<CompressionResult[]>([]);
  const [options, setOptions] = useState<CompressionOptions>({
    quality: 80,
    maxWidth: 1920,
    maxHeight: 1080,
    format: 'original'
  });
  const [isCompressing, setIsCompressing] = useState<boolean>(false);
  const [compressionProgress, setCompressionProgress] = useState<number>(0);
  const [currentlyProcessing, setCurrentlyProcessing] = useState<string>('');
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Drag & drop handlers
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
    const files = Array.from(event.dataTransfer.files);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    if (imageFiles.length > 0) {
      setSelectedFiles(imageFiles);
      setCompressionResults([]);
    } else {
      alert('Please drop only image files.');
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  // Remove file from selectedFiles
  const removeFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    if (newFiles.length === 0) {
      setCompressionResults([]);
    }
  };

  // Clear all files
  const clearFiles = () => {
    setSelectedFiles([]);
    setCompressionResults([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length !== files.length) {
      alert('Only image files are supported.');
    }
    
    setSelectedFiles(imageFiles);
    setCompressionResults([]);
  };

  const compressImage = async (file: File): Promise<CompressionResult> => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        // Calculate new dimensions
        let { width, height } = img;
        const maxWidth = options.maxWidth;
        const maxHeight = options.maxHeight;

        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width *= ratio;
          height *= ratio;
        }

        canvas.width = width;
        canvas.height = height;

        // Draw image on canvas
        ctx!.drawImage(img, 0, 0, width, height);

        // Determine output format
        let outputFormat = file.type;
        if (options.format === 'jpeg') {
          outputFormat = 'image/jpeg';
        } else if (options.format === 'webp') {
          outputFormat = 'image/webp';
        }

        // Convert to data URL with compression
        const quality = options.quality / 100;
        const compressedDataUrl = canvas.toDataURL(outputFormat, quality);
        
        // Calculate compressed size (approximate)
        const compressedSize = Math.round(compressedDataUrl.length * 0.75); // Base64 overhead
        const compressionRatio = ((file.size - compressedSize) / file.size) * 100;

        resolve({
          originalFile: file,
          compressedDataUrl,
          originalSize: file.size,
          compressedSize,
          compressionRatio: Math.max(0, compressionRatio)
        });
      };

      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = URL.createObjectURL(file);
    });
  };

  const compressAllImages = async () => {
    if (selectedFiles.length === 0) return;

    setIsCompressing(true);
    setCompressionProgress(0);
    setCurrentlyProcessing('');
    const results: CompressionResult[] = [];

    try {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        setCurrentlyProcessing(file.name);
        setCompressionProgress((i / selectedFiles.length) * 100);
        
        const result = await compressImage(file);
        results.push(result);
      }
      setCompressionResults(results);
      setCompressionProgress(100);
    } catch (error) {
      console.error('Compression error:', error);
      alert('Error compressing images. Please try again.');
    }

    setTimeout(() => {
      setIsCompressing(false);
      setCompressionProgress(0);
      setCurrentlyProcessing('');
    }, 500);
  };

  const downloadCompressed = (result: CompressionResult) => {
    const link = document.createElement('a');
    const extension = options.format === 'original' 
      ? result.originalFile.name.split('.').pop()
      : options.format === 'jpeg' ? 'jpg' : options.format;
    
    link.download = `${result.originalFile.name.split('.')[0]}_compressed.${extension}`;
    link.href = result.compressedDataUrl;
    link.click();
  };

  const downloadAll = () => {
    compressionResults.forEach(result => {
      setTimeout(() => downloadCompressed(result), 100);
    });
  };

  const resetCompressor = () => {
    setSelectedFiles([]);
    setCompressionResults([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const totalOriginalSize = compressionResults.reduce((sum, result) => sum + result.originalSize, 0);
  const totalCompressedSize = compressionResults.reduce((sum, result) => sum + result.compressedSize, 0);
  const totalSavings = totalOriginalSize > 0 ? ((totalOriginalSize - totalCompressedSize) / totalOriginalSize) * 100 : 0;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-xl">
      {/* File Upload Area */}
      <div
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 mb-6 cursor-pointer ${
          isDragOver 
            ? 'border-blue-400 bg-blue-50' 
            : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
          selectedFiles.length > 0 
            ? 'bg-gradient-to-br from-blue-100 to-blue-200' 
            : 'bg-gradient-to-br from-gray-100 to-gray-200'
        }`}>
          <svg className={`w-8 h-8 ${
            selectedFiles.length > 0 ? 'text-blue-600' : 'text-gray-500'
          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v4a1 1 0 001 1h3v3a1 1 0 001 1h4a1 1 0 001-1v-3h3a1 1 0 001-1V7a1 1 0 00-1-1H4a1 1 0 00-1 1z" />
          </svg>
        </div>
        {selectedFiles.length === 0 ? (
          <>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Select Images to Compress</h3>
            <p className="text-gray-500 mb-4">Drag and drop your image files here, or click to browse</p>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            <button
              onClick={e => { e.stopPropagation(); fileInputRef.current?.click(); }}
              className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:from-gray-700 hover:to-gray-800 transition-all duration-300 cursor-pointer"
            >
              Choose Files
            </button>
          </>
        ) : (
          <>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Selected Images ({selectedFiles.length})</h3>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            <div className="space-y-3 mb-4">
              {selectedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 012-2h8a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V3zm2 2a1 1 0 011-1h6a1 1 0 011 1v10a1 1 0 01-1 1H7a1 1 0 01-1-1V5zm1 3a1 1 0 100 2h4a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{file.name}</p>
                      <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
                    </div>
                  </div>
                  <button
                    onClick={e => { e.stopPropagation(); removeFile(index); }}
                    className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={e => { e.stopPropagation(); clearFiles(); }}
              className="text-red-600 hover:text-red-700 font-medium cursor-pointer"
            >
              Clear All Images
            </button>
          </>
        )}
      </div>

      {/* Compression Settings (hide when compressing or results exist) */}
      {selectedFiles.length > 0 && !isCompressing && compressionResults.length === 0 && (
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-3 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11.03L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11.03C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
            </svg>
            Compression Settings
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Quality Settings */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Quality: {options.quality}%
              </label>
              <input
                type="range"
                min="10"
                max="100"
                value={options.quality}
                onChange={(e) => setOptions(prev => ({ ...prev, quality: parseInt(e.target.value) }))}
                className="w-full h-3 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #A855F7 0%, #A855F7 ${options.quality}%, #E5E7EB ${options.quality}%, #E5E7EB 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Smaller size</span>
                <span>Higher quality</span>
              </div>
            </div>
            {/* Format Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Output Format
              </label>
              <select
                value={options.format}
                onChange={(e) => setOptions(prev => ({ ...prev, format: e.target.value as 'original' | 'jpeg' | 'webp' }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="original">Keep Original Format</option>
                <option value="jpeg">Convert to JPEG</option>
                <option value="webp">Convert to WebP (Modern)</option>
              </select>
            </div>
            {/* Dimension Limits */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Max Width (px)
              </label>
              <input
                type="number"
                value={options.maxWidth}
                onChange={(e) => setOptions(prev => ({ ...prev, maxWidth: parseInt(e.target.value) || 1920 }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                min="100"
                max="4000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Max Height (px)
              </label>
              <input
                type="number"
                value={options.maxHeight}
                onChange={(e) => setOptions(prev => ({ ...prev, maxHeight: parseInt(e.target.value) || 1080 }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                min="100"
                max="4000"
              />
            </div>
          </div>
          {/* Compress Button */}
          <div className="mt-6 text-center">
            <button
              onClick={compressAllImages}
              disabled={isCompressing}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <span className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z"/>
                </svg>
                <span>Compress Images</span>
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Compression Results */}
      {compressionResults.length > 0 && (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <svg className="w-6 h-6 mr-3 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z"/>
              </svg>
              Compression Results
            </h3>
            
            {compressionResults.length > 1 && (
              <button
                onClick={downloadAll}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2 cursor-pointer"
              >
                <span>Download All</span>
              </button>
            )}
          </div>

          {/* Summary */}
          <div className="bg-white rounded-lg p-4 border border-green-100 mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">{compressionResults.length}</div>
                <div className="text-sm text-gray-600">Images Processed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">{formatFileSize(totalOriginalSize)}</div>
                <div className="text-sm text-gray-600">Original Size</div>
              </div>
              <div>
                <div className="">{formatFileSize(totalCompressedSize)}</div>
                <div className="text-sm text-gray-600">Compressed Size</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">{totalSavings.toFixed(1)}%</div>
                <div className="text-sm text-gray-600">Size Reduction</div>
              </div>
            </div>
          </div>
          
          {/* Individual Results */}
          <div className="space-y-3">
            {compressionResults.map((result, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-green-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 relative">
                      <NextImage 
                        src={result.compressedDataUrl} 
                        alt="Compressed" 
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{result.originalFile.name}</p>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>
                          {formatFileSize(result.originalSize)} → {formatFileSize(result.compressedSize)}
                        </p>
                        <p className="text-green-600 font-medium">
                          {result.compressionRatio.toFixed(1)}% reduction
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => downloadCompressed(result)}
                    className="bg-green-600 text-white px-2 py-1 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2 cursor-pointer min-w-[32px]"
                  >
                    <span className="hidden sm:inline">Download</span>
                    <svg className="w-4 h-4 sm:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
