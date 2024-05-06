import { DependencyList, useLayoutEffect } from 'react';

export const useLayoutEffectCustom = (callback: () => void, deps: DependencyList = []) => {
  useLayoutEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      callback();
    }
    // eslint-disable-next-line
  }, deps);
};
