import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAiHistory } from '../services/getAiHistory/getAiHistory';
import { AiResponseRole } from '../consts/consts';
import { askAiHelper } from '../services/askAiHelper/askAiHelper';
import { AiHelperSchema } from '../types/AskAiHelperForm.types';

const initialState: AiHelperSchema = {
  questionText: '',
  validateError: undefined,
  isLoading: false,
  aiHelperResponses: [],
};

export const aiHelperSlice = createSlice({
  name: 'aiHelper',
  initialState,
  reducers: {
    setQuestionText: (state, action: PayloadAction<string>) => {
      state.questionText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(askAiHelper.pending, (state) => {
        state.isLoading = true;
        state.validateError = undefined;
        // state.aiHelperResponses.unshift({ role: AiResponseRole.USER, content: state.questionText ?? '' });
      })
      .addCase(askAiHelper.fulfilled, (state, action) => {
        state.isLoading = false;
        state.aiHelperResponses.unshift(action.payload);
      })
      .addCase(askAiHelper.rejected, (state, action) => {
        state.isLoading = false;
        state.validateError = action.payload;
      });
    builder
      .addCase(getAiHistory.pending, (state) => {
        state.isLoading = true;
        state.validateError = undefined;
      })
      .addCase(getAiHistory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.aiHelperResponses.splice(0, state.aiHelperResponses.length, ...action.payload.filter((response) => response.role !== 'system'));
      })
      .addCase(getAiHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.validateError = action.payload;
      });
  },
});

export const { actions: aiHelperActions } = aiHelperSlice;
export const { reducer: aiHelperReducer } = aiHelperSlice;

// const aiHelperAdapter = createEntityAdapter<AiResponse>({
//   selectId: (comment) => comment.comment_id,
// });
//
// export const getAiHelperResponses = articleCommentsAdapter.getSelectors<StateSchema>(
//   (state) => state.articleComments || articleCommentsAdapter.getInitialState(),
// );
//
// const aiHelperSlice = createSlice({
//   name: 'askAiAssistantForm',
//   initialState: articleCommentsAdapter.getInitialState<AiHelperSchema>({
//     isLoading: false,
//     questionText: '',
//     validateError: undefined,
//     ids: [],
//     entities: {},
//   }),
//   reducers: {},
//   // extraReducers: (builder) => {
//   //   builder
//   //   .addCase(fetchArticleCommentsById.pending, (state) => {
//   //     state.error = undefined;
//   //     state.isLoading = true;
//   //   })
//   //   .addCase(fetchArticleCommentsById.fulfilled, (state, action: PayloadAction<IComment[]>) => {
//   //     state.isLoading = false;
//   //     articleCommentsAdapter.setAll(state, action.payload);
//   //   })
//   //   .addCase(fetchArticleCommentsById.rejected, (state, action) => {
//   //     state.isLoading = false;
//   //     state.error = action.payload;
//   //   });
//   // },
// });
//
// export const { actions: askAiAssistantFormActions } = aiHelperSlice;
// export const { reducer: askAiAssistantFormReducer } = aiHelperSlice;
