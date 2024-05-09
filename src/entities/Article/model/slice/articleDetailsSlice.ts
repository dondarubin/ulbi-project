import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { IArticle } from '../types/article.types';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema.types';

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  articleData: undefined,
  _mounted: false,
};

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<IArticle>) => {
        state.isLoading = false;
        state.articleData = action.payload;
        state._mounted = true;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state._mounted = false;
      });
  },
});

export const { reducer: articleDetailsReducer } = articleDetailsSlice;
