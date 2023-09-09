import { lazy } from 'react';

// todo заменить в проде
export const MainPageLazy = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./MainPage')), 1500);
}));

// export const MainPageLazy = lazy(()=>import('./MainPage'))
