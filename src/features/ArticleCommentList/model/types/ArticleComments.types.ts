import { IComment } from 'entities/Comment';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticleCommentsSchema extends EntityState<IComment>{
  isLoading?: boolean;
  error?: string;
}
