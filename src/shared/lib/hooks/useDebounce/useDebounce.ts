import {
  MutableRefObject, useCallback, useEffect, useRef,
} from 'react';

export function useDebounce(callback: (...args: any[]) => void, delay: number) {
  const timer = useRef(false) as MutableRefObject<any>;

  return useCallback((...args) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
}
