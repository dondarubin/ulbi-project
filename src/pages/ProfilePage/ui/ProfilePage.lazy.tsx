import { lazy } from 'react';

// todo заменить в проде
export const ProfilePageLazy = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));

// export const MainPageLazy = lazy(()=>import('./ProfilePage'))
