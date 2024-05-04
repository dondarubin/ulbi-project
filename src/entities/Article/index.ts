import { getArticleDetailsData, getArticleDetailsError } from './model/selectors/articleDetailsSelectors';
import {
  ArticleDetailsSchema, ArticleView, IArticle, IArticleWithUserData,
} from './model/types/article.types';
import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
import { ArticleList } from './ui/ArticleList/ArticleList';
import { ArticleViewSelect } from './ui/ArticleViewSelect/ArticleViewSelect';

export {
  getArticleDetailsData,
  getArticleDetailsError,
  ArticleDetails,
  type IArticle,
  type ArticleDetailsSchema,
  type IArticleWithUserData,
  ArticleView,
  ArticleList,
  ArticleViewSelect,
};
