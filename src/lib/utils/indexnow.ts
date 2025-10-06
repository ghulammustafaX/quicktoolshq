/**
 * IndexNow API Integration for QuickToolsHQ
 * Enables real-time URL submission to search engines
 */

const INDEXNOW_CONFIG = {
  key: '4847ead0e24841db8a62b80bd0a762c9',
  host: 'www.quicktoolshq.com',
  keyLocation: 'https://www.quicktoolshq.com/4847ead0e24841db8a62b80bd0a762c9.txt',
  apiEndpoint: 'https://api.indexnow.org/indexnow'
};

export interface IndexNowResponse {
  success: boolean;
  status?: number;
  error?: string;
}

/**
 * Submit a single URL to IndexNow
 */
export async function submitUrl(url: string): Promise<IndexNowResponse> {
  try {
    const response = await fetch(`${INDEXNOW_CONFIG.apiEndpoint}?url=${encodeURIComponent(url)}&key=${INDEXNOW_CONFIG.key}&keyLocation=${encodeURIComponent(INDEXNOW_CONFIG.keyLocation)}`, {
      method: 'GET',
      headers: {
        'User-Agent': 'QuickToolsHQ-IndexNow/1.0'
      }
    });

    return {
      success: response.ok,
      status: response.status
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Submit multiple URLs to IndexNow (bulk submission)
 */
export async function submitUrls(urls: string[]): Promise<IndexNowResponse> {
  try {
    const payload = {
      host: INDEXNOW_CONFIG.host,
      key: INDEXNOW_CONFIG.key,
      keyLocation: INDEXNOW_CONFIG.keyLocation,
      urlList: urls
    };

    const response = await fetch(INDEXNOW_CONFIG.apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'QuickToolsHQ-IndexNow/1.0'
      },
      body: JSON.stringify(payload)
    });

    return {
      success: response.ok,
      status: response.status
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Submit all important pages to IndexNow
 */
export async function submitAllPages(): Promise<IndexNowResponse> {
  const baseUrl = 'https://www.quicktoolshq.com';
  
  const urls = [
    baseUrl,
    `${baseUrl}/tools`,
    `${baseUrl}/blog`,
    `${baseUrl}/about`,
    `${baseUrl}/tools/bmi-calculator`,
    `${baseUrl}/tools/word-counter`,
    `${baseUrl}/tools/unit-converter`,
    `${baseUrl}/tools/text-case-converter`,
    `${baseUrl}/tools/password-generator`,
    `${baseUrl}/tools/image-compressor`,
    `${baseUrl}/tools/image-converter`,
    `${baseUrl}/tools/pdf-compressor`,
    `${baseUrl}/tools/pdf-converter`,
    // Add more URLs as needed
  ];

  return await submitUrls(urls);
}

/**
 * Helper function to submit URL when content is updated
 */
export async function notifyContentUpdate(path: string): Promise<IndexNowResponse> {
  const fullUrl = `https://www.quicktoolshq.com${path.startsWith('/') ? path : '/' + path}`;
  return await submitUrl(fullUrl);
}