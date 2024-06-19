import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { IArticleWithUserData } from '@/entities/Article';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';
import { ArticleRecommendationsSchema } from '../types/ArticleRecommendations.types';

const articleRecommendationsAdapter = createEntityAdapter<IArticleWithUserData>({
  selectId: (article) => article.article_id,
});

export const getArticleRecommendations = articleRecommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleRecommendations || articleRecommendationsAdapter.getInitialState(),
);

const articleRecommendationsSlice = createSlice({
  name: 'articleRecommendationsSlice',
  initialState: articleRecommendationsAdapter.getInitialState<ArticleRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        articleRecommendationsAdapter.setAll(state, action.payload.searchingArticles);
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleRecommendationsReducer } = articleRecommendationsSlice;
export const { actions: articleRecommendationsActions } = articleRecommendationsSlice;
