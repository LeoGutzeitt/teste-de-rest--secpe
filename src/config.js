// WordPress REST API Configuration
// Replace with your WordPress site URL
const WP_API_URL = import.meta.env.VITE_WP_API_URL || 'https://public-api.wordpress.com/wp/v2';

export const config = {
  wpApiUrl: WP_API_URL,
  // Add authentication headers if needed (for private sites)
  headers: {
    'Content-Type': 'application/json',
  },
};

export default config;