import { lazy } from 'react';

// // todo заменить в проде
// export const ArticlesPageLazy = lazy(() => new Promise((resolve) => {
//   // @ts-ignore
//   setTimeout(() => resolve(import('./ArticlesPage')), 400);
// }));

export const ArticlesPageLazy = lazy(() => import('./ArticlesPage'));
