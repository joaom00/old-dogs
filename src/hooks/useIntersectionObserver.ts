import { useEffect, RefObject } from 'react';
import { InfiniteQueryObserverResult } from 'react-query';

type TUseIntersectionObserver = {
  root?: RefObject<undefined>;
  target: RefObject<HTMLDivElement>;
  onIntersect: () => Promise<InfiniteQueryObserverResult>;
  threshold?: number;
  rootMargin?: string;
  enabled: boolean | undefined;
};

export default function useIntersectionObserver({
  root,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = '0px',
  enabled = true
}: TUseIntersectionObserver) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    console.log('Observer API');

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        root: root && root.current,
        rootMargin,
        threshold
      }
    );

    const el = target && target.current;

    if (!el) {
      return;
    }

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [root, target, enabled, onIntersect, rootMargin, threshold]);
}
