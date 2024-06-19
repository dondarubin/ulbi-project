import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addNewCommentForArticle } from '@/features/ArticleCommentList';
import { AddNewCommentFormSchema } from '../types/AddNewCommentFormSchema.types';

const initialState: AddNewCommentFormSchema = {
  commentText: '',
  validateError: undefined,
};

export const addNewCommentFormSlice = createSlice({
  name: 'addNewCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.commentText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNewCommentForArticle.pending, () => {
      })
      .addCase(addNewCommentForArticle.fulfilled, (state) => {
        state.validateError = undefined;
        state.commentText = '';
      })
      .addCase(addNewCommentForArticle.rejected, (state, action) => {
        state.validateError = action.payload;
      });
  },
});

export const { actions: addNewCommentFormActions } = addNewCommentFormSlice;
export const { reducer: addNewCommentFormReducer } = addNewCommentFormSlice;
