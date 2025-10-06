#!/usr/bin/env node

/**
 * Google Search Console Indexing Fix Deployment Script
 * 
 * This script helps deploy the fixes for Google indexing issues and 
 * requests reindexing of all pages through IndexNow API
 */

const https = require('https');
const { execSync } = require('child_process');

console.log(`
🔧 QuickToolsHQ - Google Search Console Indexing Fix
═══════════════════════════════════════════════════

FIXES APPLIED:
✅ Removed conflicting redirect configurations
✅ Standardized all URLs to use www.quicktoolshq.com
✅ Fixed canonical URL inconsistencies
✅ Updated middleware to redirect non-www to www
✅ Updated Vercel configuration
✅ Updated sitemap and robots.txt
✅ Fixed OpenGraph and metadata URLs

NEXT STEPS:
1. Deploy these changes to production
2. Submit updated sitemap to Google Search Console
3. Request indexing for all fixed pages
4. Monitor indexing status

═══════════════════════════════════════════════════
`);

// Configuration
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

async function submitToIndexNow() {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      host: INDEXNOW_CONFIG.host,
      key: INDEXNOW_CONFIG.key,
      keyLocation: INDEXNOW_CONFIG.keyLocation,
      urlList: urls
    });

    const options = {
      hostname: INDEXNOW_CONFIG.apiEndpoint,
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        console.log(`📤 IndexNow API Response: ${res.statusCode}`);
        console.log(`📊 Submitted ${urls.length} URLs for reindexing`);
        
        if (res.statusCode === 200) {
          console.log('✅ Successfully submitted to IndexNow API');
          resolve(data);
        } else {
          console.log('❌ IndexNow submission failed');
          console.log('Response:', data);
          reject(new Error(`IndexNow API returned ${res.statusCode}`));
        }
      });
    });

    req.on('error', (error) => {
      console.error('❌ IndexNow API Error:', error.message);
      reject(error);
    });

    req.write(payload);
    req.end();
  });
}

async function main() {
  try {
    console.log('🚀 Starting IndexNow reindexing request...\n');
    await submitToIndexNow();
    
    console.log(`
🎉 DEPLOYMENT COMPLETE!

IMMEDIATE ACTIONS REQUIRED:
═══════════════════════════

1. Deploy to Production:
   • Push these changes to your main branch
   • Verify deployment is successful
   • Test redirect functionality

2. Google Search Console:
   • Go to Google Search Console
   • Submit updated sitemap: https://www.quicktoolshq.com/sitemap.xml
   • Request indexing for key pages manually
   • Monitor "Coverage" report for improvements

3. Test Redirects:
   • Verify quicktoolshq.com redirects to www.quicktoolshq.com
   • Test all major page redirects work correctly
   • Check that no redirect loops exist

4. Monitor Results:
   • Check Google Search Console after 24-48 hours
   • Validate redirect fixes resolved the errors
   • Monitor indexing progress over next week

═══════════════════════════

The main indexing issues should be resolved once deployed!
    `);
    
  } catch (error) {
    console.error('❌ Script failed:', error.message);
    process.exit(1);
  }
}

main();