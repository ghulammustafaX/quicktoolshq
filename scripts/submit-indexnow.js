#!/usr/bin/env node

/**
 * IndexNow Bulk Submission Script
 * Submits all URLs from sitemap to IndexNow API
 */

const https = require('https');

const INDEXNOW_CONFIG = {
  key: '4847ead0e24841db8a62b80bd0a762c9',
  host: 'quicktoolshq.com',
  keyLocation: 'https://quicktoolshq.com/4847ead0e24841db8a62b80bd0a762c9.txt',
  apiEndpoint: 'api.indexnow.org'
};

// All your important URLs
const urls = [
  'https://quicktoolshq.com',
  'https://quicktoolshq.com/tools',
  'https://quicktoolshq.com/blog',
  'https://quicktoolshq.com/about',
  'https://quicktoolshq.com/tools/bmi-calculator',
  'https://quicktoolshq.com/tools/word-counter',
  'https://quicktoolshq.com/tools/unit-converter',
  'https://quicktoolshq.com/tools/text-case-converter',
  'https://quicktoolshq.com/tools/password-generator',
  'https://quicktoolshq.com/tools/image-compressor',
  'https://quicktoolshq.com/tools/image-converter',
  'https://quicktoolshq.com/tools/pdf-compressor',
  'https://quicktoolshq.com/tools/pdf-converter',
  'https://quicktoolshq.com/blog/best-ai-writing-tools-content-generators-2025',
  'https://quicktoolshq.com/blog/best-free-online-image-compression-tools-2025',
  'https://quicktoolshq.com/blog/best-online-collaboration-tools-remote-teams-2025',
  'https://quicktoolshq.com/blog/essential-online-tools-professionals-2025',
  'https://quicktoolshq.com/blog/how-to-merge-pdf-files-online-free-2025',
  'https://quicktoolshq.com/blog/optimize-images-web-quality',
  'https://quicktoolshq.com/blog/pdf-tools-guide',
  'https://quicktoolshq.com/blog/privacy-digital-age-data-safety',
  'https://quicktoolshq.com/blog/professional-text-processing-tools-guide',
  'https://quicktoolshq.com/blog/ultimate-pdf-conversion-guide-2025',
  'https://quicktoolshq.com/privacy-policy',
  'https://quicktoolshq.com/terms-of-service'
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
    if (res.statusCode === 200) {
      console.log('✅ URLs submitted successfully!');
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