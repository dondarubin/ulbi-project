import { EntityState } from '@reduxjs/toolkit';
import { ArticleType, IArticleWithUserData } from 'entities/Article';

export interface ArticleRecommendationsSchema extends EntityState<IArticleWithUserData>{
  isLoading?: boolean;
  error?: string;
}
