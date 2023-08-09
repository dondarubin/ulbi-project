import { lazy } from 'react';

export const AboutPageLazy = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // todo убрать в проде
  setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
