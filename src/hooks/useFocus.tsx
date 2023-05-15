import { useRef, useEffect } from 'react';

const useFocus = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setFocus = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  useEffect(() => {
    setFocus();
  }, [setFocus]);

  return { ref };
};

export default useFocus;
