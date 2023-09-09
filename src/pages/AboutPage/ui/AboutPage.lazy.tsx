import { lazy } from 'react';

// todo заменить в проде
export const AboutPageLazy = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./AboutPage')), 1500);
}));

// export const AboutPageLazy = lazy(()=>import('./AboutPage'))
