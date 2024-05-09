import { IArticle } from 'entities/Article';

export interface ArticleDetailsSchema {
  isLoading: boolean;
  error?: string;
  articleData?: IArticle;

  _mounted: boolean;
}
