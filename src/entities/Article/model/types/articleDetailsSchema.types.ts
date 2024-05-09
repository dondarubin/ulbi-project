import { IArticle } from '../types/article.types';

export interface ArticleDetailsSchema {
  isLoading: boolean;
  error?: string;
  articleData?: IArticle;

  _mounted: boolean;
}
