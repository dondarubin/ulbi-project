import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleCommentsSchema } from '../types/ArticleComments.types';
import { fetchArticleCommentsById } from '../services/fetchArticleCommentsById/fetchArticleCommentsById';

const articleCommentsAdapter = createEntityAdapter<IComment>({
  selectId: (comment) => comment.comment_id,
});

export const getArticleComments = articleCommentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleComments || articleCommentsAdapter.getInitialState(),
);

const articleCommentsSlice = createSlice({
  name: 'articleComments',
  initialState: articleCommentsAdapter.getInitialState<ArticleCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleCommentsById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleCommentsById.fulfilled, (state, action: PayloadAction<IComment[]>) => {
        state.isLoading = false;
        articleCommentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleCommentsById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleCommentsReducer } = articleCommentsSlice;
