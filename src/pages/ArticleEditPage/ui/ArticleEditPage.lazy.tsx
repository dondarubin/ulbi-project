import { lazy } from 'react';

// todo заменить в проде
export const ArticleEditPageLazy = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./ArticleEditPage')), 1500);
}));

// export const ArticleEditPageLazy = lazy(()=>import('./ArticleEditPage'))
