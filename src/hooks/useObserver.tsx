import React, { useRef, useCallback } from 'react';

export const INITIALINDEX = 1;

export default function useObserver(shouldStop: boolean) {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const [index, setIndex] = React.useState(INITIALINDEX);

  const intersection = useRef<IntersectionObserver | null>(null);

  const observer = useCallback((node: any) => {
    if (intersection.current) intersection.current.disconnect();

    intersection.current = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && !shouldStop) {
        setIsIntersecting(true);
        setIndex((prev: number) => prev + 1);
      }

      if (!entries[0].isIntersecting) {
        setIsIntersecting(false);
      }
    });

    if (node) intersection.current.observe(node as unknown as Element);
  }, []);
  return {
    index,
    setIndex,
    observer,
    isIntersecting,
  };
}
