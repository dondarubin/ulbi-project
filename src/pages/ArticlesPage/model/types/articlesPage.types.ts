import { EntityState } from '@reduxjs/toolkit';
import {
  ArticleSortField, ArticleTypes, ArticleView, IArticleWithUserData,
} from 'entities/Article';
import { SortOrder } from 'shared/constants/sort';

export interface ArticlesPageSchema extends EntityState<IArticleWithUserData>{
  isLoading?: boolean;
  error?: string;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  // filters
  view: ArticleView;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleTypes;

  _mounted: boolean;
}
