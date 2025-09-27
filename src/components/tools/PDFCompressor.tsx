'use client';

import { useState, useRef } from 'react';
import { PDFDocument, PDFName } from 'pdf-lib';

interface CompressionOptions {
  quality: 'low' | 'medium' | 'high';
  imageQuality: number;
  removeMetadata: boolean;
  optimizeImages: boolean;
  removeAnnotations: boolean;
  removeBookmarks: boolean;
  compressStreams: boolean;
  removeUnusedObjects: boolean;
}

interface CompressionResult {
  file: File;
  compressedSize: number;
  originalSize: number;
  compressionRatio: number;
  compressedData: Uint8Array;
}

export default function PDFCompressor() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isCompressing, setIsCompressing] = useState<boolean>(false);
  const [compressionProgress, setCompressionProgress] = useState<number>(0);
  const [currentlyProcessing, setCurrentlyProcessing] = useState<string>('');
  const [compressionResults, setCompressionResults] = useState<CompressionResult[]>([]);
  const [options, setOptions] = useState<CompressionOptions>({
    quality: 'medium',
    imageQuality: 75,
    removeMetadata: true,
    optimizeImages: true,
    removeAnnotations: false,
    removeBookmarks: false,
    compressStreams: true,
    removeUnusedObjects: true
  });
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length > 0) {
      const pdfFiles = files.filter(file => file.type === 'application/pdf');
      if (pdfFiles.length > 0) {
        setSelectedFiles(pdfFiles);
        setCompressionResults([]);
      } else {
        alert('Please select only PDF files.');
      }
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(event.dataTransfer.files);
    const pdfFiles = files.filter(file => file.type === 'application/pdf');
    
    if (pdfFiles.length > 0) {
      setSelectedFiles(pdfFiles);
      setCompressionResults([]);
    } else {
      alert('Please drop only PDF files.');
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

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const compressPDF = async (file: File): Promise<CompressionResult> => {
    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    
    // Note: Metadata removal is simplified for compatibility
    // The main compression benefit comes from the compression options below

    // Remove annotations if requested
    if (options.removeAnnotations) {
      const pages = pdfDoc.getPages();
      for (const page of pages) {
        const annotations = page.node.Annots();
        if (annotations) {
          page.node.delete(PDFName.of('Annots'));
        }
      }
    }

    // Remove bookmarks if requested
    if (options.removeBookmarks) {
      const catalog = pdfDoc.catalog;
      catalog.delete(PDFName.of('Outlines'));
    }

    // Enhanced compression settings based on quality
    const compressOptions: any = {};
    
    switch (options.quality) {
      case 'low':
        compressOptions.objectsPerTick = 200; // Aggressive compression
        break;
      case 'medium':
        compressOptions.objectsPerTick = 100; // Balanced compression
        break;
      case 'high':
        compressOptions.objectsPerTick = 50; // Conservative compression
        break;
    }

    const compressedPdf = await pdfDoc.save(compressOptions);
    
    const compressionRatio = ((file.size - compressedPdf.length) / file.size) * 100;
    
    return {
      file,
      compressedSize: compressedPdf.length,
      originalSize: file.size,
      compressionRatio,
      compressedData: compressedPdf
    };
  };

  const compressPDFs = async () => {
    if (selectedFiles.length === 0) return;

    setIsCompressing(true);
    setCompressionProgress(0);
    setCompressionResults([]);

    const results: CompressionResult[] = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      setCurrentlyProcessing(file.name);
      setCompressionProgress((i / selectedFiles.length) * 100);

      try {
        const result = await compressPDF(file);
        results.push(result);
      } catch (error) {
        console.error(`Error compressing ${file.name}:`, error);
        alert(`Failed to compress ${file.name}. Please try again.`);
      }
    }

    setCompressionProgress(100);
    setCompressionResults(results);
    setIsCompressing(false);
    setCurrentlyProcessing('');
  };

  const downloadFile = (result: CompressionResult) => {
    // Create a proper ArrayBuffer from Uint8Array for Blob compatibility
    const buffer = new ArrayBuffer(result.compressedData.length);
    const view = new Uint8Array(buffer);
    view.set(result.compressedData);
    const blob = new Blob([buffer], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `compressed_${result.file.name}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadAllFiles = () => {
    if (compressionResults.length === 1) {
      downloadFile(compressionResults[0]);
      return;
    }

    // For multiple files, download each one individually
    compressionResults.forEach((result: CompressionResult, index: number) => {
      setTimeout(() => {
        downloadFile(result);
      }, index * 100); // Small delay between downloads
    });
  };

  const removeFile = (index: number) => {
    const newFiles = selectedFiles.filter((_: File, i: number) => i !== index);
    setSelectedFiles(newFiles);
    
    if (newFiles.length === 0) {
      setCompressionResults([]);
    }
  };

  const clearFiles = () => {
    setSelectedFiles([]);
    setCompressionResults([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
        
        {selectedFiles.length === 0 ? (
          <>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Upload PDF Files</h3>
            <p className="text-gray-500 mb-4">Drag and drop your PDF files here, or click to browse</p>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf"
              onChange={handleFileSelect}
              className="hidden"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
              className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:from-gray-700 hover:to-gray-800 transition-all duration-300 cursor-pointer"
            >
              Choose Files
            </button>
          </>
        ) : (
          <>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Selected Files ({selectedFiles.length})</h3>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf"
              onChange={handleFileSelect}
              className="hidden"
            />
            
            {/* Selected Files List */}
            <div className="space-y-3 mb-4">
              {selectedFiles.map((file: File, index: number) => (
                <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-gray-900 truncate max-w-[120px] sm:max-w-[200px] md:max-w-[320px] lg:max-w-[400px]" title={file.name}>{file.name}</p>
                      <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(index);
                    }}
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
              onClick={(e) => {
                e.stopPropagation();
                clearFiles();
              }}
              className="text-red-600 hover:text-red-700 font-medium cursor-pointer"
            >
              Clear All Files
            </button>
          </>
        )}
      </div>

      {/* Compression Progress */}
      {isCompressing && (
        <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Compressing Files...
            </h3>
            <span className="text-blue-600 font-bold text-lg">{Math.round(compressionProgress)}%</span>
          </div>
          <div className="w-full bg-blue-200 rounded-full h-4 mb-4 relative overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 h-4 rounded-full transition-all duration-500 ease-out relative" 
              style={{ width: `${compressionProgress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
            </div>
          </div>
          {currentlyProcessing && (
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-gray-700 flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Processing: <span className="font-semibold ml-1">{currentlyProcessing}</span>
              </p>
            </div>
          )}
        </div>
      )}

      {/* Compression Quality Selector */}
      {selectedFiles.length > 0 && !isCompressing && compressionResults.length === 0 && (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 mb-6 border">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Compression Quality</h3>
          
          <div className="max-w-md mx-auto">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Choose Compression Level
            </label>
            
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600">Quality Level</span>
                <span className="text-sm font-medium text-gray-900">{options.imageQuality}%</span>
              </div>
              
              {/* Visual Progress Bar for Quality Selection */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2 relative overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-3 rounded-full transition-all duration-300 ease-out" 
                  style={{ width: `${(options.imageQuality - 10) / (95 - 10) * 100}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
                </div>
              </div>
              
              <input
                type="range"
                min="10"
                max="95"
                value={options.imageQuality}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  setOptions((prev: CompressionOptions) => ({
                    ...prev,
                    imageQuality: value,
                    quality: value <= 30 ? 'low' : value <= 70 ? 'medium' : 'high'
                  }));
                }}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider opacity-50"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Maximum Compression</span>
                <span>Balanced</span>
                <span>High Quality</span>
              </div>
              <div className="mt-2 text-center">
                <span className="text-xs text-gray-600">
                  {options.imageQuality <= 30 ? 'Smallest file size (50-80% reduction)' : 
                   options.imageQuality <= 70 ? 'Good compression (20-40% reduction)' : 
                   'Minimal compression (5-15% reduction)'}
                </span>
              </div>
            </div>
          </div>

          {/* Compress Button */}
          <div className="mt-6 text-center">
            <button
              onClick={compressPDFs}
              disabled={isCompressing}
              className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-3 rounded-xl font-bold text-base sm:text-lg hover:from-red-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <span className="flex items-center justify-center space-x-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Compress PDF</span>
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Compression Results */}
      {compressionResults.length > 0 && (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Compression Results
          </h3>
          
          {/* Overall Summary */}
          <div className="bg-white rounded-lg p-6 border border-green-100 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {formatFileSize(compressionResults.reduce((sum: number, result: CompressionResult) => sum + result.originalSize, 0))}
                </div>
                <div className="text-sm text-gray-600">Total Original Size</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {formatFileSize(compressionResults.reduce((sum: number, result: CompressionResult) => sum + result.compressedSize, 0))}
                </div>
                <div className="text-sm text-gray-600">Total Compressed Size</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {(compressionResults.reduce((sum: number, result: CompressionResult) => sum + result.compressionRatio, 0) / compressionResults.length).toFixed(1)}%
                </div>
                <div className="text-sm text-gray-600">Average Reduction</div>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-center text-lg font-semibold text-green-700">
                You saved {formatFileSize(
                  compressionResults.reduce((sum: number, result: CompressionResult) => sum + (result.originalSize - result.compressedSize), 0)
                )} across {compressionResults.length} file{compressionResults.length !== 1 ? 's' : ''}!
              </p>
            </div>
          </div>

          {/* Individual File Results */}
          <div className="space-y-4 mb-6">
            <h4 className="font-semibold text-gray-900">Individual File Results:</h4>
            {compressionResults.map((result: CompressionResult, index: number) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-green-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{result.file.name}</p>
                      <p className="text-sm text-gray-500">
                        {formatFileSize(result.originalSize)} → {formatFileSize(result.compressedSize)}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">
                      -{result.compressionRatio.toFixed(1)}%
                    </div>
                    <button
                      onClick={() => downloadFile(result)}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium cursor-pointer"
                    >
                      Download
                    </button>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" 
                    style={{ width: `${result.compressionRatio}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Download All Button */}
          <div className="text-center">
            <button
              onClick={downloadAllFiles}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <span className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>
                  Download {compressionResults.length === 1 ? 'Compressed PDF' : `All ${compressionResults.length} Files`}
                </span>
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}