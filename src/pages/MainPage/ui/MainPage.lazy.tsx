import { lazy } from 'react';

export const MainPageLazy = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // todo убрать в проде
  setTimeout(() => resolve(import('./MainPage')), 1500);
}));
