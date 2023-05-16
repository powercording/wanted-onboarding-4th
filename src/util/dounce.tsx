import { useCallback } from 'react';

export default function debounce() {
  let timeoutId: number;
  const bounce = useCallback((fn: any, ...args: any) => {
    clearTimeout(timeoutId);

    timeoutId = window.setTimeout(() => {
      fn(...args);
    }, 500);
  }, []);

  return bounce;
}
