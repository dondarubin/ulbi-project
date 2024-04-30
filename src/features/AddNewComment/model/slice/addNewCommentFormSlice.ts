import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddNewCommentFormSchema } from '../types/addNewCommentForm.types';

const initialState: AddNewCommentFormSchema = {
  commentText: '',
  error: undefined,
};

export const addNewCommentFormSlice = createSlice({
  name: 'addNewCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.commentText = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loginByUsername.pending, (state, action) => {
  //       state.validateErrors = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(loginByUsername.fulfilled, (state, action) => {
  //       state.validateErrors = undefined;
  //       state.isLoading = false;
  //     })
  //     .addCase(loginByUsername.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.validateErrors = action.payload;
  //     });
  // },
});

export const { actions: addNewCommentFormActions } = addNewCommentFormSlice;
export const { reducer: addNewCommentFormReducer } = addNewCommentFormSlice;
