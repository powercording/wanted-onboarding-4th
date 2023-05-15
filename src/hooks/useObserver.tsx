import React, { useRef, useCallback } from 'react';

export default function useObserver() {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const [index, setIndex] = React.useState(1);
  const intersection = useRef<IntersectionObserver | null>(null);

  const observer = useCallback((node: any) => {
    if (intersection.current) intersection.current.disconnect();

    intersection.current = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        console.log('visible');
        setIsIntersecting(true);
        setIndex((prev: number) => prev + 1);
      }

      // if (!entries[0].isIntersecting) {
      //   console.log('not visible');
      //   setIsIntersecting(false);
      // }
    });

    if (node) intersection.current.observe(node as unknown as Element);
  }, []);
  return { index, observer, isIntersecting };
}
