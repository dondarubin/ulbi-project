import { DependencyList, useEffect } from 'react';

export const useEffectInitial = (callback: () => void, deps: DependencyList = []) => {
  // чтобы запросы не отправлялись на сервер, когда смотришь изменения в storybook
  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
      callback();
    }
    // eslint-disable-next-line
  }, deps);
};
