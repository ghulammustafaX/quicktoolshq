'use client';

import { useState, useRef, useEffect } from 'react';
import jsPDF from 'jspdf';

interface ConversionJob {
  file: File;
  status: 'pending' | 'converting' | 'completed' | 'error';
  result?: string;
  error?: string;
  imageUrls?: string[];
  pageCount?: number;
}

interface PDFSettings {
  pageSize: 'a4' | 'letter' | 'custom';
  orientation: 'portrait' | 'landscape';
  margin: number;
  imageQuality: number;
  imagesPerPage: 1 | 2 | 4;
  customWidth?: number;
  customHeight?: number;
}

export default function PDFConverter() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [conversionJobs, setConversionJobs] = useState<ConversionJob[]>([]);
  const [conversionType, setConversionType] = useState<'to-pdf' | 'from-pdf'>('to-pdf');
  const [combineIntoSinglePDF, setCombineIntoSinglePDF] = useState<boolean>(false);
  const [isConverting, setIsConverting] = useState<boolean>(false);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [showPdfSettings, setShowPdfSettings] = useState<boolean>(false);
  const [pdfSettings, setPdfSettings] = useState<PDFSettings>({
    pageSize: 'a4',
    orientation: 'portrait',
    margin: 20,
    imageQuality: 95,
    imagesPerPage: 1,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    processFiles(files);
  };

  const processFiles = (files: File[]) => {
    // Filter files based on conversion type
    const validFiles = files.filter(file => {
      if (conversionType === 'to-pdf') {
        return file.type.startsWith('image/') || 
               file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
               file.type === 'application/msword';
      } else {
        return file.type === 'application/pdf';
      }
    });

    if (validFiles.length !== files.length) {
      alert(`Some files were not supported for ${conversionType === 'to-pdf' ? 'PDF conversion' : 'PDF extraction'}.`);
    }

    setSelectedFiles(validFiles);
    setConversionJobs([]);
  };

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    processFiles(files);
  };

  const removeFile = (indexToRemove: number) => {
    setSelectedFiles(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const convertMultipleImagesToPDF = async (files: File[]): Promise<string> => {
    return new Promise((resolve, reject) => {
      try {
        // Create PDF with specified settings
        const pdf = new jsPDF({
          orientation: pdfSettings.orientation,
          unit: 'mm',
          format: pdfSettings.pageSize === 'custom' 
            ? [pdfSettings.customWidth || 210, pdfSettings.customHeight || 297]
            : pdfSettings.pageSize
        });
        
        let imagesProcessed = 0;
        let currentPageImages = 0;
        const maxImagesPerPage = pdfSettings.imagesPerPage;
        
        // Get page dimensions
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const margin = pdfSettings.margin;
        const usableWidth = pageWidth - (margin * 2);
        const usableHeight = pageHeight - (margin * 2);
        
        const processImage = (file: File, imageIndex: number) => {
          const img = new Image();
          
          img.onload = () => {
            try {
              // Calculate image positioning based on images per page
              let imgWidth, imgHeight, x, y;
              
              if (maxImagesPerPage === 1) {
                // Single image per page - fit to page
                const imgRatio = img.width / img.height;
                const pageRatio = usableWidth / usableHeight;
                
                if (imgRatio > pageRatio) {
                  imgWidth = usableWidth;
                  imgHeight = usableWidth / imgRatio;
                } else {
                  imgHeight = usableHeight;
                  imgWidth = usableHeight * imgRatio;
                }
                
                x = margin + (usableWidth - imgWidth) / 2;
                y = margin + (usableHeight - imgHeight) / 2;
                
              } else if (maxImagesPerPage === 2) {
                // Two images per page - side by side or top/bottom
                const imageWidth = (usableWidth - 10) / 2; // 10mm gap between images
                const imageHeight = usableHeight;
                
                const imgRatio = img.width / img.height;
                if (imgRatio > imageWidth / imageHeight) {
                  imgWidth = imageWidth;
                  imgHeight = imageWidth / imgRatio;
                } else {
                  imgHeight = Math.min(imageHeight, usableHeight);
                  imgWidth = imgHeight * imgRatio;
                }
                
                const positionIndex = currentPageImages % 2;
                x = margin + (positionIndex * (imageWidth + 10)) + (imageWidth - imgWidth) / 2;
                y = margin + (imageHeight - imgHeight) / 2;
                
              } else { // 4 images per page
                const imageWidth = (usableWidth - 10) / 2;
                const imageHeight = (usableHeight - 10) / 2;
                
                const imgRatio = img.width / img.height;
                if (imgRatio > imageWidth / imageHeight) {
                  imgWidth = Math.min(imageWidth, imageWidth);
                  imgHeight = imgWidth / imgRatio;
                } else {
                  imgHeight = Math.min(imageHeight, imageHeight);
                  imgWidth = imgHeight * imgRatio;
                }
                
                const positionIndex = currentPageImages % 4;
                const row = Math.floor(positionIndex / 2);
                const col = positionIndex % 2;
                
                x = margin + (col * (imageWidth + 10)) + (imageWidth - imgWidth) / 2;
                y = margin + (row * (imageHeight + 10)) + (imageHeight - imgHeight) / 2;
              }
              
              // Create canvas and draw image
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');
              canvas.width = img.width;
              canvas.height = img.height;
              ctx!.drawImage(img, 0, 0);
              
              const imageData = canvas.toDataURL('image/jpeg', pdfSettings.imageQuality / 100);
              
              // Add new page if needed (except for first image)
              if (imageIndex > 0 && currentPageImages === 0) {
                pdf.addPage();
              }
              
              // Add image to PDF
              pdf.addImage(imageData, 'JPEG', x, y, imgWidth, imgHeight);
              
              currentPageImages++;
              if (currentPageImages >= maxImagesPerPage) {
                currentPageImages = 0;
              }
              
              imagesProcessed++;
              
              if (imagesProcessed === files.length) {
                // All images processed, create blob URL
                const pdfBlob = pdf.output('blob');
                const pdfUrl = URL.createObjectURL(pdfBlob);
                resolve(pdfUrl);
              }
            } catch (error) {
              reject(error);
            }
          };
          
          img.onerror = () => reject(new Error(`Failed to load image: ${file.name}`));
          img.src = URL.createObjectURL(file);
        };
        
        // Process all images
        files.forEach((file, index) => {
          processImage(file, index);
        });
        
      } catch (error) {
        reject(error);
      }
    });
  };

  const convertImageToPDF = async (file: File): Promise<string> => {
    return convertMultipleImagesToPDF([file]);
  };

  const convertPDFToImages = async (_file: File): Promise<string[]> => {
    // For now, return a more user-friendly error message
    throw new Error('PDF to image conversion is temporarily unavailable. This feature requires additional server-side processing capabilities. Please try converting images to PDF instead, which works perfectly!');
  };

  const convertFiles = async () => {
    if (selectedFiles.length === 0) return;

    setIsConverting(true);
    
    try {
      if (conversionType === 'to-pdf' && combineIntoSinglePDF && selectedFiles.length > 1) {
        // Convert all images to a single PDF
        const imageFiles = selectedFiles.filter(file => file.type.startsWith('image/'));
        if (imageFiles.length > 0) {
          const result = await convertMultipleImagesToPDF(imageFiles);
          setConversionJobs([{
            file: new File([], `combined_${imageFiles.length}_images.pdf`),
            status: 'completed',
            result
          }]);
        }
      } else {
        // Convert each file individually
        const jobs: ConversionJob[] = selectedFiles.map(file => ({
          file,
          status: 'pending'
        }));
        
        setConversionJobs(jobs);

        // Process each file
        for (let i = 0; i < jobs.length; i++) {
          setConversionJobs(prev => prev.map((job, index) => 
            index === i ? { ...job, status: 'converting' } : job
          ));

          try {
            let result: string;
            
            if (conversionType === 'to-pdf') {
              if (jobs[i].file.type.startsWith('image/')) {
                result = await convertImageToPDF(jobs[i].file);
              } else {
                // For Word documents, we'd need a proper conversion library
                throw new Error('Word to PDF conversion requires server-side processing');
              }
            } else {
              // PDF to image conversion
              if (jobs[i].file.type === 'application/pdf') {
                const imageUrls = await convertPDFToImages(jobs[i].file);
                // For now, we'll use the first image as the primary result
                result = imageUrls[0] || '';
                
                // Store all image URLs in the job for later download
                jobs[i].imageUrls = imageUrls;
                jobs[i].pageCount = imageUrls.length;
              } else {
                throw new Error('Only PDF files are supported for image extraction');
              }
            }

            setConversionJobs(prev => prev.map((job, index) => 
              index === i ? { ...job, status: 'completed', result } : job
            ));
          } catch (error) {
            setConversionJobs(prev => prev.map((job, index) => 
              index === i ? { 
                ...job, 
                status: 'error', 
                error: error instanceof Error ? error.message : 'Conversion failed'
              } : job
            ));
          }

          // Small delay between conversions
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    } catch (error) {
      console.error('Conversion error:', error);
    }

    setIsConverting(false);
  };

  const downloadResult = (job: ConversionJob) => {
    if (!job.result) return;

    if (conversionType === 'from-pdf' && job.imageUrls) {
      // Download all images from PDF
      const imageUrls = job.imageUrls;
      const fileName = job.file.name.split('.')[0];
      
      imageUrls.forEach((imageUrl, pageIndex) => {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = `${fileName}_page_${pageIndex + 1}.png`;
        link.click();
      });
    } else {
      // Single file download
      const link = document.createElement('a');
      link.href = job.result;
      link.download = `${job.file.name.split('.')[0]}_converted.${conversionType === 'to-pdf' ? 'pdf' : 'png'}`;
      link.click();
    }
  };

  const resetConverter = () => {
    setSelectedFiles([]);
    setConversionJobs([]);
    setShowPdfSettings(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const getAcceptedTypes = () => {
    if (conversionType === 'to-pdf') {
      return 'image/*';
    } else {
      return '.pdf';
    }
  };

  return (
    <div className="space-y-8">
    
          {/* File Upload */}
      <div style={{backgroundColor: '#fffbea'}} className="rounded-xl p-8 border text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Select Files to Convert
        </h3>
        
        <div 
          className={`border-2 border-dashed rounded-lg p-8 transition-all duration-300 cursor-pointer ${
            isDragOver 
              ? 'border-orange-400 bg-orange-50 scale-105' 
              : 'border-orange-300 hover:border-orange-400'
          }`}
          onClick={() => fileInputRef.current?.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={getAcceptedTypes()}
            multiple={conversionType === 'to-pdf'}
            onChange={handleFileSelect}
            className="hidden"
          />
          
          {selectedFiles.length > 0 ? (
            <div className="space-y-4">
              <div className="flex justify-center">
                <svg 
                  className="w-12 h-12 text-green-500 animate-pulse" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
                </svg>
              </div>
              <p className="text-lg font-medium text-gray-900">
                {selectedFiles.length} file{selectedFiles.length > 1 ? 's' : ''} selected
              </p>

              <div className="space-y-1">
                {selectedFiles.slice(0, 5).map((file, index) => (
                  <div key={index} className="flex items-center justify-between text-sm text-gray-600 bg-white rounded-lg px-3 py-2">
                    <span>{file.name} ({Math.round(file.size / 1024)} KB)</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile(index);
                      }}
                      className="text-red-500 hover:text-red-700 ml-2"
                    >
                      ✕
                    </button>
                  </div>
                ))}
                {selectedFiles.length > 5 && (
                  <p className="text-sm text-gray-600">...and {selectedFiles.length - 5} more</p>
                )}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  resetConverter();
                }}
                className="text-sm text-purple-600 hover:text-purple-800 underline"
              >
                Choose different files
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex justify-center items-center h-16">
                {isDragOver ? (
                  <svg className="w-16 h-16 text-orange-400" fill="none" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="8" width="48" height="48" rx="8" fill="#FFE5B4"/>
                    <path d="M32 18v20" stroke="#FF9800" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M24 30l8 8 8-8" stroke="#FF9800" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg className="w-16 h-16 text-blue-400" fill="none" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="8" width="48" height="48" rx="8" fill="#E3F2FD"/>
                    <path d="M20 24h24v24H20z" fill="#90CAF9"/>
                    <path d="M32 18v20" stroke="#1976D2" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M24 30l8 8 8-8" stroke="#1976D2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <p className="text-lg font-medium text-gray-900">
                {isDragOver 
                  ? 'Drop your files here!' 
                  : `Click to select ${conversionType === 'to-pdf' ? 'images or Word documents' : 'PDF files'}`
                }
              </p>
              <p className="text-sm text-gray-600">
                {conversionType === 'to-pdf' 
                  ? 'Supports JPG, PNG, GIF, Word (.doc, .docx) • Drag & drop supported' 
                  : 'Supports PDF files • Drag & drop supported'
                }
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Conversion Type Selection */}
      <div style={{backgroundColor: '#eef8ff'}} className="rounded-xl p-6 border">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Choose Conversion Type
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <label className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 cursor-pointer">
            <input
              type="radio"
              name="conversionType"
              value="to-pdf"
              checked={conversionType === 'to-pdf'}
              onChange={(e) => {
                setConversionType(e.target.value as 'to-pdf');
                resetConverter();
              }}
              className="w-4 h-4 text-blue-600 mr-3"
            />
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-bold text-gray-900">Convert TO PDF</span>
              </div>
              <p className="text-sm text-gray-600">Images → PDF</p>
            </div>
          </label>
          
          <label className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 cursor-pointer opacity-60">
            <input
              type="radio"
              name="conversionType"
              value="from-pdf"
              checked={conversionType === 'from-pdf'}
              onChange={(e) => {
                setConversionType(e.target.value as 'from-pdf');
                resetConverter();
              }}
              className="w-4 h-4 text-blue-600 mr-3"
              disabled
            />
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-bold text-gray-500">Convert FROM PDF</span>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">Temporarily Unavailable</span>
              </div>
              <p className="text-sm text-gray-500">PDF → Images (Under Development)</p>
            </div>
          </label>
        </div>
        
        {/* Combine Option for Multiple Images */}
        {conversionType === 'to-pdf' && (
          <div className="mt-4 p-4 bg-white rounded-lg border">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={combineIntoSinglePDF}
                onChange={(e) => setCombineIntoSinglePDF(e.target.checked)}
                className="w-4 h-4 text-blue-600 mr-3"
              />
              <div>
                <span className="font-medium text-gray-900">Combine all images into single PDF</span>
                <p className="text-sm text-gray-600">Create one PDF with multiple pages instead of separate PDF files</p>
              </div>
            </label>
          </div>
        )}
      </div>

      {/* PDF Settings Toggle */}
      {conversionType === 'to-pdf' && (
        <div className="text-center">
          <button
            onClick={() => setShowPdfSettings(!showPdfSettings)}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg border border-blue-200 transition-colors duration-200"
          >
            <span className={`transform transition-transform duration-200 ${showPdfSettings ? 'rotate-180' : ''}`}>
              ⚙️
            </span>
            <span className="font-medium">
              {showPdfSettings ? 'Hide Advanced Settings' : 'Show Advanced PDF Settings'}
            </span>
            <span className={`transform transition-transform duration-200 ${showPdfSettings ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
        </div>
      )}

      {/* PDF Settings */}
      {conversionType === 'to-pdf' && showPdfSettings && (
        <div 
          style={{backgroundColor: '#f0f9ff'}} 
          className="rounded-xl p-6 border border-blue-200 animate-in slide-in-from-top-5 duration-300"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-2xl mr-3">📄</span>
            Advanced PDF Settings
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Page Size */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Page Size
              </label>
              <select
                value={pdfSettings.pageSize}
                onChange={(e) => setPdfSettings(prev => ({ ...prev, pageSize: e.target.value as 'a4' | 'letter' | 'custom' }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="a4">A4 (210 × 297 mm)</option>
                <option value="letter">Letter (8.5 × 11 in)</option>
                <option value="custom">Custom Size</option>
              </select>
            </div>

            {/* Orientation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Orientation
              </label>
              <select
                value={pdfSettings.orientation}
                onChange={(e) => setPdfSettings(prev => ({ ...prev, orientation: e.target.value as 'portrait' | 'landscape' }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="portrait">Portrait</option>
                <option value="landscape">Landscape</option>
              </select>
            </div>

            {/* Images Per Page */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Images Per Page
              </label>
              <select
                value={pdfSettings.imagesPerPage}
                onChange={(e) => setPdfSettings(prev => ({ ...prev, imagesPerPage: parseInt(e.target.value) as 1 | 2 | 4 }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value={1}>1 image per page</option>
                <option value={2}>2 images per page</option>
                <option value={4}>4 images per page</option>
              </select>
            </div>

            {/* Margin */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Margin: {pdfSettings.margin}mm
              </label>
              <input
                type="range"
                min="5"
                max="50"
                value={pdfSettings.margin}
                onChange={(e) => setPdfSettings(prev => ({ ...prev, margin: parseInt(e.target.value) }))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>5mm</span>
                <span>50mm</span>
              </div>
            </div>

            {/* Image Quality */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image Quality: {pdfSettings.imageQuality}%
              </label>
              <input
                type="range"
                min="60"
                max="100"
                value={pdfSettings.imageQuality}
                onChange={(e) => setPdfSettings(prev => ({ ...prev, imageQuality: parseInt(e.target.value) }))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>60% (Smaller)</span>
                <span>100% (Best)</span>
              </div>
            </div>

            {/* Custom Size Inputs */}
            {pdfSettings.pageSize === 'custom' && (
              <div className="md:col-span-2 lg:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Custom Size (mm)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="Width"
                    value={pdfSettings.customWidth || ''}
                    onChange={(e) => setPdfSettings(prev => ({ ...prev, customWidth: parseInt(e.target.value) || undefined }))}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="number"
                    placeholder="Height"
                    value={pdfSettings.customHeight || ''}
                    onChange={(e) => setPdfSettings(prev => ({ ...prev, customHeight: parseInt(e.target.value) || undefined }))}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}
          </div>


        {/* Quick Presets */}
        <div className="mt-6 p-4 bg-white rounded-lg border">
          <h4 className="font-medium text-gray-900 mb-3">Quick Presets</h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setPdfSettings(prev => ({ ...prev, pageSize: 'a4', orientation: 'portrait', imagesPerPage: 1, margin: 20, imageQuality: 95 }))}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm transition-colors flex items-center space-x-1"
            >
              <svg className="w-4 h-4" fill="#0078d485" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
              <span>Standard Document</span>
            </button>
            <button
              onClick={() => setPdfSettings(prev => ({ ...prev, pageSize: 'a4', orientation: 'portrait', imagesPerPage: 4, margin: 10, imageQuality: 85 }))}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm transition-colors flex items-center space-x-1"
            >
              <svg className="w-4 h-4" fill="#0078d485" viewBox="0 0 24 24">
                <path d="M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3"/>
              </svg>
              <span>Photo Grid</span>
            </button>
            <button
              onClick={() => setPdfSettings(prev => ({ ...prev, pageSize: 'a4', orientation: 'landscape', imagesPerPage: 2, margin: 15, imageQuality: 90 }))}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm transition-colors flex items-center space-x-1"
            >
              <svg className="w-4 h-4" fill="#0078d485" viewBox="0 0 24 24">
                <path d="M2,6H14V4H2A2,2 0 0,0 0,6V18A2,2 0 0,0 2,20H14V18H2V6M16,4V20H22V4H16M20,18H18V6H20V18Z"/>
              </svg>
              <span>Gallery Layout</span>
            </button>
            <button
              onClick={() => setPdfSettings(prev => ({ ...prev, pageSize: 'letter', orientation: 'portrait', imagesPerPage: 1, margin: 25, imageQuality: 100 }))}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm transition-colors flex items-center space-x-1"
            >
              <svg className="w-4 h-4" fill="#0078d485" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 8.12,16.5 8.91,15.77L10.33,17.19C9.6,17.92 8.72,18.54 7.82,18.97C7.57,19.11 7.31,19.22 7.07,18.28M18.93,5.72C18.43,6.62 17.81,7.5 17.02,8.23L15.6,6.81C16.33,6.08 17.21,5.46 18.11,5.03C18.36,4.89 18.62,4.78 18.93,5.72M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20Z"/>
              </svg>
              <span>High Quality</span>
            </button>
          </div>
        </div>
        </div>
      )}

      {/* Convert Button */}
      {selectedFiles.length > 0 && (
        <div className="text-center">
          <button
            onClick={convertFiles}
            disabled={isConverting}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            {isConverting ? (
              <span className="flex items-center justify-center space-x-2">
                <span className="animate-spin">⚡</span>
                <span>Converting...</span>
              </span>
            ) : (
              <span className="flex items-center justify-center space-x-2">
                <span className="text-2xl mr-1"> ⇄ </span>
                <span>
                  Convert {conversionType === 'to-pdf' ? 'to PDF' : 'from PDF'}
                </span>
              </span>
            )}
          </button>
        </div>
      )}

      {/* Progress Section */}
      {isConverting && (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900 flex items-center">
              <span className="animate-spin text-xl mr-3">⚡</span>
              Processing Files...
            </h3>
            <span className="text-sm text-gray-600">
              {conversionJobs.filter(job => job.status === 'completed').length} / {conversionJobs.length} completed
            </span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{ 
                width: `${conversionJobs.length > 0 ? (conversionJobs.filter(job => job.status === 'completed').length / conversionJobs.length) * 100 : 0}%` 
              }}
            ></div>
          </div>
          
          <div className="space-y-2">
            {conversionJobs.map((job, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="text-gray-700 truncate flex-1">{job.file.name}</span>
                <span className={`ml-3 px-2 py-1 rounded-full text-xs font-medium ${
                  job.status === 'completed' ? 'bg-green-100 text-green-800' :
                  job.status === 'converting' ? 'bg-blue-100 text-blue-800' :
                  job.status === 'error' ? 'bg-red-100 text-red-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {job.status === 'completed' && '✓ Done'}
                  {job.status === 'converting' && '⚡ Processing'}
                  {job.status === 'error' && '✗ Error'}
                  {job.status === 'pending' && '⏳ Waiting'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Conversion Results */}
      {conversionJobs.length > 0 && (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-2xl mr-3">📋</span>
            Conversion Results
          </h3>
          
          <div className="space-y-3">
            {conversionJobs.map((job, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-green-100 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">
                    {job.status === 'pending' && '⏳'}
                    {job.status === 'converting' && '⚡'}
                    {job.status === 'completed' && (
                      <svg 
                        className="w-8 h-8 text-green-500" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.236 4.53L7.73 10.361a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" 
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {job.status === 'error' && '❌'}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{job.file.name}</p>
                    <p className="text-sm text-gray-600">
                      {job.status === 'pending' && 'Waiting...'}
                      {job.status === 'converting' && 'Converting...'}
                      {job.status === 'completed' && (
                        conversionType === 'to-pdf' 
                          ? 'Conversion completed'
                          : job.pageCount 
                            ? `Converted to ${job.pageCount} images`
                            : 'Conversion completed'
                      )}
                      {job.status === 'error' && (job.error || 'Conversion failed')}
                    </p>
                  </div>
                </div>
                
                {job.status === 'completed' && (
                  <button
                    onClick={() => downloadResult(job)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2 cursor-pointer"
                  >
                    <span>
                      {conversionType === 'to-pdf' 
                        ? 'Download PDF'
                        : job.pageCount && job.pageCount > 1 
                          ? `Download ${job.pageCount} Images` 
                          : 'Download'
                      }
                    </span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
