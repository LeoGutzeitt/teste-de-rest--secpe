import { config } from '../config.js';

/**
 * WordPress REST API Service
 * Handles all API calls to WordPress
 */

/**
 * Makes an API request to the WordPress REST API
 * @param {string} endpoint - API endpoint (e.g., 'posts', 'pages', 'categories')
 * @param {Object} params - Query parameters
 * @returns {Promise<Object>} API response data
 */
async function fetchFromAPI(endpoint, params = {}) {
  const url = new URL(endpoint, config.wpApiUrl);
  
  // Add query parameters
  Object.keys(params).forEach(key => {
    if (params[key] !== undefined && params[key] !== null) {
      url.searchParams.append(key, params[key]);
    }
  });

  try {
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: config.headers,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('WordPress API Error:', error);
    throw error;
  }
}

/**
 * Get posts from WordPress
 * @param {Object} params - Query parameters (page, per_page, search, etc.)
 * @returns {Promise<Array>} List of posts
 */
export async function getPosts(params = {}) {
  const defaultParams = {
    per_page: 10,
    _embed: true, // Include embedded data (featured images, authors, etc.)
    ...params,
  };
  return fetchFromAPI('posts', defaultParams);
}

/**
 * Get a single post by ID
 * @param {number} id - Post ID
 * @returns {Promise<Object>} Post data
 */
export async function getPostById(id) {
  return fetchFromAPI(`posts/${id}`, { _embed: true });
}

/**
 * Get pages from WordPress
 * @param {Object} params - Query parameters
 * @returns {Promise<Array>} List of pages
 */
export async function getPages(params = {}) {
  const defaultParams = {
    per_page: 10,
    _embed: true,
    ...params,
  };
  return fetchFromAPI('pages', defaultParams);
}

/**
 * Get a single page by ID
 * @param {number} id - Page ID
 * @returns {Promise<Object>} Page data
 */
export async function getPageById(id) {
  return fetchFromAPI(`pages/${id}`, { _embed: true });
}

/**
 * Get categories from WordPress
 * @param {Object} params - Query parameters
 * @returns {Promise<Array>} List of categories
 */
export async function getCategories(params = {}) {
  return fetchFromAPI('categories', params);
}

/**
 * Get tags from WordPress
 * @param {Object} params - Query parameters
 * @returns {Promise<Array>} List of tags
 */
export async function getTags(params = {}) {
  return fetchFromAPI('tags', params);
}

/**
 * Get media items from WordPress
 * @param {Object} params - Query parameters
 * @returns {Promise<Array>} List of media items
 */
export async function getMedia(params = {}) {
  return fetchFromAPI('media', params);
}

/**
 * Get users/authors from WordPress
 * @param {Object} params - Query parameters
 * @returns {Promise<Array>} List of users
 */
export async function getUsers(params = {}) {
  return fetchFromAPI('users', params);
}

/**
 * Search posts and pages
 * @param {string} searchTerm - Search query
 * @returns {Promise<Object>} Search results with posts and pages
 */
export async function searchContent(searchTerm) {
  const [posts, pages] = await Promise.all([
    fetchFromAPI('posts', { search: searchTerm, per_page: 5, _embed: true }),
    fetchFromAPI('pages', { search: searchTerm, per_page: 5, _embed: true }),
  ]);
  
  return { posts, pages }; 
}

export default {
  fetchFromAPI,
  getPosts,
  getPostById,
  getPages,
  getPageById,
  getCategories,
  getTags,
  getMedia,
  getUsers,
  searchContent,
};