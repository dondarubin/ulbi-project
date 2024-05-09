import { lazy } from 'react';

// todo заменить в проде
export const ArticleCreatePageLazy = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./ArticleCreatePage')), 1500);
}));

// export const ArticleCreatePageLazy = lazy(()=>import('./ArticleCreatePage'))
