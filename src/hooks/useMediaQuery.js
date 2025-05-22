import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive design
 * Returns boolean indicating if the media query matches
 * Follows React principles:
 * - Explicit behavior over implicit
 * - Encapsulates state and side effects
 * - Single responsibility
 * 
 * @param {string} query - CSS media query string
 * @returns {boolean} - Whether the media query matches
 */
export function useMediaQuery(query) {
  // Initial state based on current match
  const getMatches = (query) => {
    // Check if window is available (for SSR compatibility)
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState(getMatches(query));

  // Update matches state when window resizes
  useEffect(() => {
    // Avoid recreating the handler function on each render
    const handleChange = () => {
      setMatches(getMatches(query));
    };

    // Get initial value
    handleChange();
    
    // Create media query list
    const matchMedia = window.matchMedia(query);
    
    // Use the right event based on browser support
    if (matchMedia.addEventListener) {
      matchMedia.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      matchMedia.addListener(handleChange);
    }
    
    // Clean up
    return () => {
      if (matchMedia.removeEventListener) {
        matchMedia.removeEventListener('change', handleChange);
      } else {
        matchMedia.removeListener(handleChange);
      }
    };
  }, [query]); // Only re-run effect if query changes

  return matches;
}
