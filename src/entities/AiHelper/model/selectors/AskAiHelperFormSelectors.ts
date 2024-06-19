import { StateSchema } from '@/app/providers/StoreProvider';

export const getAiHelperQuestionText = (state: StateSchema) => state.aiHelper?.questionText ?? '';
export const getAiHelperQuestionData = (state: StateSchema) => state.aiHelper?.aiHelperResponses;
export const getAiHelperQuestionIsLoading = (state: StateSchema) => state.aiHelper?.isLoading;
