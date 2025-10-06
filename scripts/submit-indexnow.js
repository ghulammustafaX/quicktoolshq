#!/usr/bin/env node

/**
 * IndexNow Bulk Submission Script
 * Submits all URLs from sitemap to IndexNow API
 */

const https = require('https');

const INDEXNOW_CONFIG = {
  key: '4847ead0e24841db8a62b80bd0a762c9',
  host: 'www.quicktoolshq.com',
  keyLocation: 'https://www.quicktoolshq.com/4847ead0e24841db8a62b80bd0a762c9.txt',
  apiEndpoint: 'api.indexnow.org'
};

// All your important URLs
const urls = [
  'https://www.quicktoolshq.com',
  'https://www.quicktoolshq.com/tools',
  'https://www.quicktoolshq.com/blog',
  'https://www.quicktoolshq.com/about',
  'https://www.quicktoolshq.com/tools/bmi-calculator',
  'https://www.quicktoolshq.com/tools/word-counter',
  'https://www.quicktoolshq.com/tools/unit-converter',
  'https://www.quicktoolshq.com/tools/text-case-converter',
  'https://www.quicktoolshq.com/tools/password-generator',
  'https://www.quicktoolshq.com/tools/image-compressor',
  'https://www.quicktoolshq.com/tools/image-converter',
  'https://www.quicktoolshq.com/tools/pdf-compressor',
  'https://www.quicktoolshq.com/tools/pdf-converter',
  'https://www.quicktoolshq.com/blog/best-ai-writing-tools-content-generators-2025',
  'https://www.quicktoolshq.com/blog/best-free-online-image-compression-tools-2025',
  'https://www.quicktoolshq.com/blog/best-online-collaboration-tools-remote-teams-2025',
  'https://www.quicktoolshq.com/blog/essential-online-tools-professionals-2025',
  'https://www.quicktoolshq.com/blog/how-to-merge-pdf-files-online-free-2025',
  'https://www.quicktoolshq.com/blog/optimize-images-web-quality',
  'https://www.quicktoolshq.com/blog/pdf-tools-guide',
  'https://www.quicktoolshq.com/blog/privacy-digital-age-data-safety',
  'https://www.quicktoolshq.com/blog/professional-text-processing-tools-guide',
  'https://www.quicktoolshq.com/blog/ultimate-pdf-conversion-guide-2025',
  'https://www.quicktoolshq.com/privacy-policy',
  'https://www.quicktoolshq.com/terms-of-service'
];

const payload = JSON.stringify({
  host: INDEXNOW_CONFIG.host,
  key: INDEXNOW_CONFIG.key,
  keyLocation: INDEXNOW_CONFIG.keyLocation,
  urlList: urls
});

const options = {
  hostname: INDEXNOW_CONFIG.apiEndpoint,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload),
    'User-Agent': 'QuickToolsHQ-IndexNow/1.0'
  }
};

console.log('Submitting URLs to IndexNow...');
console.log(`Total URLs: ${urls.length}`);

const req = https.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log('✅ URLs submitted successfully!');
      if (res.statusCode === 202) {
        console.log('📝 Status: Accepted - URLs are being processed');
      }
    } else {
      console.log('❌ Submission failed');
      console.log('Response:', data);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Error:', error.message);
});

req.write(payload);
req.end();