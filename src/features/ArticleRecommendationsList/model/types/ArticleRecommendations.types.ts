import { EntityState } from '@reduxjs/toolkit';
import { ArticleTypes, IArticleWithUserData } from 'entities/Article';

export interface ArticleRecommendationsSchema extends EntityState<IArticleWithUserData>{
  isLoading?: boolean;
  error?: string;
}
