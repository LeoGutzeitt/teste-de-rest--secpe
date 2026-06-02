import { useState, useEffect, useCallback } from 'react';
import * as wpApi from '../services/wpApi.js';

/**
 * Custom hook for fetching posts from WordPress
 * @param {Object} params - Query parameters
 * @returns {Object} { data, loading, error, refetch }
 */
export function usePosts(params = {}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const posts = await wpApi.getPosts(params);
      setData(posts);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [JSON.stringify(params)]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return { data, loading, error, refetch: fetchPosts };
}

/**
 * Custom hook for fetching a single post by ID
 * @param {number} id - Post ID
 * @returns {Object} { data, loading, error }
 */
export function usePost(id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        const post = await wpApi.getPostById(id);
        setData(post);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  return { data, loading, error };
}

/**
 * Custom hook for fetching pages from WordPress
 * @param {Object} params - Query parameters
 * @returns {Object} { data, loading, error, refetch }
 */
export function usePages(params = {}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPages = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const pages = await wpApi.getPages(params);
      setData(pages);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [JSON.stringify(params)]);

  useEffect(() => {
    fetchPages();
  }, [fetchPages]);

  return { data, loading, error, refetch: fetchPages };
}

/**
 * Custom hook for fetching categories from WordPress
 * @param {Object} params - Query parameters
 * @returns {Object} { data, loading, error }
 */
export function useCategories(params = {}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        const categories = await wpApi.getCategories(params);
        setData(categories);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [JSON.stringify(params)]);

  return { data, loading, error };
}

/**
 * Custom hook for fetching tags from WordPress
 * @param {Object} params - Query parameters
 * @returns {Object} { data, loading, error }
 */
export function useTags(params = {}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        setLoading(true);
        setError(null);
        const tags = await wpApi.getTags(params);
        setData(tags);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, [JSON.stringify(params)]);

  return { data, loading, error };
}

/**
 * Custom hook for searching WordPress content
 * @param {string} searchTerm - Search query
 * @returns {Object} { data, loading, error }
 */
export function useSearch(searchTerm) {
  const [data, setData] = useState({ posts: [], pages: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = useCallback(async (term) => {
    if (!term || term.trim() === '') {
      setData({ posts: [], pages: [] });
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const results = await wpApi.searchContent(term);
      setData(results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (searchTerm) {
      search(searchTerm);
    }
  }, [searchTerm, search]);

  return { data, loading, error, search };
}

export default {
  usePosts,
  usePost,
  usePages,
  useCategories,
  useTags,
  useSearch,
};