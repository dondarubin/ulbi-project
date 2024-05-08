import { getArticlesPageMounted } from './model/selectors/articlesPageSelectors';
import { ArticlesPageSchema } from './model/types/articlesPage.types';
import { ArticlesPageLazy } from './ui/ArticlesPage/ArticlesPage.lazy';

export {
  ArticlesPageLazy as ArticlesPage,
  ArticlesPageSchema,
  getArticlesPageMounted,
};
