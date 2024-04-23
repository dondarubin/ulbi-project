import { lazy } from 'react';

// todo заменить в проде
export const ArticleDetailsPageLazy = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
}));

// export const ArticleDetailsPageLazy = lazy(()=>import('./ArticleDetailsPage'))
