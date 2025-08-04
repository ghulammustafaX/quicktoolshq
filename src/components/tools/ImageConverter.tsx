'use client';

import { useState, useRef } from 'react';
import NextImage from 'next/image';

interface ConversionOptions {
  format: 'jpeg' | 'png';
  quality: number;
}

interface ImageFile {
  id: string;
  file: File;
  convertedImage?: string;
  isConverting?: boolean;
  progress?: number;
  originalFormat: string;
}

export default function ImageConverter() {
  const [selectedFiles, setSelectedFiles] = useState<ImageFile[]>([]);
  const [options, setOptions] = useState<ConversionOptions>({
    format: 'jpeg',
    quality: 92
  });
  const [isConverting, setIsConverting] = useState<boolean>(false);
  const [conversionProgress, setConversionProgress] = useState<number>(0);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const validFiles: ImageFile[] = [];
      
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file && (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg')) {
          const imageFile: ImageFile = {
            id: Date.now() + i + Math.random().toString(36).substr(2, 9),
            file,
            originalFormat: file.type.split('/')[1].toUpperCase(),
            isConverting: false,
            progress: 0
          };
          validFiles.push(imageFile);
        }
      }
      
      if (validFiles.length > 0) {
        setSelectedFiles(prev => [...prev, ...validFiles]);
        
        // Auto-suggest opposite format for first file
        if (validFiles[0].originalFormat === 'PNG') {
          setOptions(prev => ({ ...prev, format: 'jpeg' }));
        } else {
          setOptions(prev => ({ ...prev, format: 'png' }));
        }
      } else {
        alert('Please select valid PNG or JPG image files.');
      }
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragOver(false);

    const files = event.dataTransfer.files;
    if (files.length > 0) {
      const validFiles: ImageFile[] = [];
      
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file && (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg')) {
          const imageFile: ImageFile = {
            id: Date.now() + i + Math.random().toString(36).substr(2, 9),
            file,
            originalFormat: file.type.split('/')[1].toUpperCase(),
            isConverting: false,
            progress: 0
          };
          validFiles.push(imageFile);
        }
      }
      
      if (validFiles.length > 0) {
        setSelectedFiles(prev => [...prev, ...validFiles]);
        
        // Auto-suggest opposite format for first file
        if (validFiles[0].originalFormat === 'PNG') {
          setOptions(prev => ({ ...prev, format: 'jpeg' }));
        } else {
          setOptions(prev => ({ ...prev, format: 'png' }));
        }
      } else {
        alert('Please drop valid PNG or JPG image files.');
      }
    }
  };

  const convertImage = async (imageFile?: ImageFile) => {
    if (imageFile) {
      // Convert single image
      await convertSingleImage(imageFile);
    } else {
      // Convert all images
      const unconvertedFiles = selectedFiles.filter(file => !file.convertedImage);
      if (unconvertedFiles.length === 0) return;

      setIsConverting(true);
      
      for (let i = 0; i < unconvertedFiles.length; i++) {
        await convertSingleImage(unconvertedFiles[i]);
      }
      
      setIsConverting(false);
    }
  };

  const convertSingleImage = async (imageFile: ImageFile) => {
    return new Promise<void>((resolve) => {
      // Update the specific file to show it's converting
      setSelectedFiles(prev => prev.map(file => 
        file.id === imageFile.id 
          ? { ...file, isConverting: true, progress: 0 }
          : file
      ));

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        // Progress updates
        setSelectedFiles(prev => prev.map(file => 
          file.id === imageFile.id ? { ...file, progress: 30 } : file
        ));
        
        setTimeout(() => {
          canvas.width = img.width;
          canvas.height = img.height;

          setSelectedFiles(prev => prev.map(file => 
            file.id === imageFile.id ? { ...file, progress: 50 } : file
          ));

          if (options.format === 'jpeg') {
            ctx!.fillStyle = '#FFFFFF';
            ctx!.fillRect(0, 0, canvas.width, canvas.height);
          }

          setSelectedFiles(prev => prev.map(file => 
            file.id === imageFile.id ? { ...file, progress: 70 } : file
          ));
          
          ctx!.drawImage(img, 0, 0);

          setSelectedFiles(prev => prev.map(file => 
            file.id === imageFile.id ? { ...file, progress: 85 } : file
          ));
          
          const mimeType = options.format === 'jpeg' ? 'image/jpeg' : 'image/png';
          const quality = options.format === 'jpeg' ? options.quality / 100 : 1;
          
          const dataUrl = canvas.toDataURL(mimeType, quality);
          
          setSelectedFiles(prev => prev.map(file => 
            file.id === imageFile.id ? { ...file, progress: 100 } : file
          ));
          
          setTimeout(() => {
            setSelectedFiles(prev => prev.map(file => 
              file.id === imageFile.id 
                ? { ...file, convertedImage: dataUrl, isConverting: false, progress: 0 }
                : file
            ));
            resolve();
          }, 300);
        }, 200);
      };

      img.onerror = () => {
        alert(`Error loading image: ${imageFile.file.name}. Please try again.`);
        setSelectedFiles(prev => prev.map(file => 
          file.id === imageFile.id 
            ? { ...file, isConverting: false, progress: 0 }
            : file
        ));
        resolve();
      };

      img.src = URL.createObjectURL(imageFile.file);
    });
  };

  const downloadImage = (imageFile: ImageFile) => {
    if (!imageFile.convertedImage) return;

    const link = document.createElement('a');
    link.download = `${imageFile.file.name.split('.')[0]}_converted.${options.format === 'jpeg' ? 'jpg' : 'png'}`;
    link.href = imageFile.convertedImage;
    link.click();
  };

  const downloadAllImages = () => {
    const convertedFiles = selectedFiles.filter(file => file.convertedImage);
    convertedFiles.forEach(file => downloadImage(file));
  };

  const removeImage = (id: string) => {
    setSelectedFiles(prev => prev.filter(file => file.id !== id));
  };

  const resetConverter = () => {
    setSelectedFiles([]);
    setConversionProgress(0);
    setIsDragOver(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-8">
      {/* File Upload */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Select Image to Convert
        </h3>
        
        <div 
          className={`border-2 border-dashed rounded-lg p-8 transition-all duration-300 cursor-pointer ${
            isDragOver 
              ? 'border-blue-500 bg-blue-100 scale-105' 
              : 'border-blue-300 hover:border-blue-400'
          }`}
          onClick={() => fileInputRef.current?.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/jpg"
            onChange={handleFileSelect}
            multiple
            className="hidden"
          />
          
          {selectedFiles.length > 0 ? (
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">{selectedFiles.length}</span>
              </div>
              <p className="text-lg font-medium text-gray-900">
                {selectedFiles.length} image{selectedFiles.length > 1 ? 's' : ''} selected
              </p>
              <p className="text-sm text-gray-600">
                {selectedFiles.reduce((total, file) => total + file.file.size, 0) / 1024 / 1024 < 1 
                  ? `${Math.round(selectedFiles.reduce((total, file) => total + file.file.size, 0) / 1024)} KB total`
                  : `${(selectedFiles.reduce((total, file) => total + file.file.size, 0) / 1024 / 1024).toFixed(1)} MB total`
                }
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  resetConverter();
                }}
                className="text-sm text-blue-600 hover:text-blue-800 underline"
              >
                Clear all files
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
                {isDragOver ? (
                  <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
                  </svg>
                ) : (
                  <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16v12H4V4zm2 2v8h12V6H6zm2 2h8v4H8V8zm2 1v2h4V9h-4zm-6 6h16v2H4v-2z"/>
                    <circle cx="7" cy="9" r="1"/>
                  </svg>
                )}
              </div>
              <p className="text-lg font-medium text-gray-900">
                {isDragOver ? 'Drop your images here' : 'Click to select PNG or JPG images'}
              </p>
              <p className="text-sm text-gray-600">
                {isDragOver ? 'Release to upload' : 'Supports PNG, JPG, JPEG formats • Multiple files • Or drag and drop'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Conversion Options */}
      {selectedFiles.length > 0 && (
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Conversion Options
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Format Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Convert to Format
              </label>
              <div className="space-y-2">
                <label className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-purple-300 cursor-pointer">
                  <input
                    type="radio"
                    name="format"
                    value="jpeg"
                    checked={options.format === 'jpeg'}
                    onChange={(e) => setOptions(prev => ({ ...prev, format: e.target.value as 'jpeg' }))}
                    className="w-4 h-4 text-purple-600 mr-3"
                  />
                  <div>
                    <span className="font-medium text-gray-900">JPG/JPEG</span>
                    <p className="text-xs text-gray-600">Smaller file size, no transparency</p>
                  </div>
                </label>
                
                <label className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-purple-300 cursor-pointer">
                  <input
                    type="radio"
                    name="format"
                    value="png"
                    checked={options.format === 'png'}
                    onChange={(e) => setOptions(prev => ({ ...prev, format: e.target.value as 'png' }))}
                    className="w-4 h-4 text-purple-600 mr-3"
                  />
                  <div>
                    <span className="font-medium text-gray-900">PNG</span>
                    <p className="text-xs text-gray-600">Lossless quality, supports transparency</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Quality Settings */}
            {options.format === 'jpeg' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  JPEG Quality: {options.quality}%
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
                  <span>Lower size</span>
                  <span>Higher quality</span>
                </div>
              </div>
            )}
          </div>

          {/* Convert Button */}
          <div className="mt-6 text-center">
            <button
              onClick={() => convertImage()}
              disabled={isConverting}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              {isConverting ? (
                <span className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Converting...</span>
                </span>
              ) : (
                <span className="flex items-center justify-center space-x-2">
                  <span className="text-white text-xl mr-1">⇄</span>
                  <span>Convert to {options.format.toUpperCase()}</span>
                </span>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Selected Images List */}
      {selectedFiles.length > 0 && (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              <span className="w-2 h-2 bg-[#00B5AD] rounded-full mr-3 animate-pulse"></span>
              Selected Images ({selectedFiles.length})
            </h3>
            {selectedFiles.some(file => file.convertedImage) && (
              <button
                onClick={downloadAllImages}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-2 py-1 rounded-lg font-medium text-xs sm:text-sm hover:from-green-700 hover:to-emerald-700 transition-all duration-300 cursor-pointer"
              >
                Download All
              </button>
            )}
          </div>
          
          <div className="space-y-4">
            {selectedFiles.map((imageFile) => (
              <div key={imageFile.id} className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      {imageFile.convertedImage ? (
                        <span className="text-green-600 font-bold">✓</span>
                      ) : imageFile.isConverting ? (
                        <div className="w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4 4h16v12H4V4zm2 2v8h12V6H6zm2 2h8v4H8V8zm2 1v2h4V9h-4zm-6 6h16v2H4v-2z"/>
                          <circle cx="7" cy="9" r="1"/>
                        </svg>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-medium text-gray-900 truncate max-w-[120px] sm:max-w-[200px] md:max-w-[320px] lg:max-w-[400px]" title={imageFile.file.name}>
                        {imageFile.file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {imageFile.originalFormat} • {Math.round(imageFile.file.size / 1024)} KB
                      </p>
                      
                      {imageFile.isConverting && (
                        <div className="mt-2">
                          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                            <div 
                              className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-300"
                              style={{ width: `${imageFile.progress || 0}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            {(imageFile.progress || 0) < 30 ? 'Loading...' :
                             (imageFile.progress || 0) < 50 ? 'Preparing...' :
                             (imageFile.progress || 0) < 70 ? 'Processing...' :
                             (imageFile.progress || 0) < 85 ? 'Converting...' :
                             (imageFile.progress || 0) < 100 ? 'Finalizing...' : 'Complete!'}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {!imageFile.isConverting && !imageFile.convertedImage && (
                      <button
                        onClick={() => convertImage(imageFile)}
                        className="bg-purple-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-purple-700 transition-colors cursor-pointer"
                      >
                        Convert
                      </button>
                    )}
                    
                    {imageFile.convertedImage && (
                      <button
                        onClick={() => downloadImage(imageFile)}
                        className="bg-green-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-green-700 transition-colors cursor-pointer"
                      >
                        Download
                      </button>
                    )}
                    
                    <button
                      onClick={() => removeImage(imageFile.id)}
                      className="text-red-600 hover:text-red-800 p-1 cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
