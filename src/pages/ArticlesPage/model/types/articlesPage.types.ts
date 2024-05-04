import { EntityState } from '@reduxjs/toolkit';
import { ArticleView, IArticleWithUserData } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<IArticleWithUserData>{
  isLoading?: boolean;
  error?: string;
  view: ArticleView;
}
