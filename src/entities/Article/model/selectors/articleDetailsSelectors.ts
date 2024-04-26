import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsData = (state: StateSchema) => state.articleDetails?.articleData;
export const getArticleDetailsIsLoading = (state: StateSchema) => state.articleDetails?.isLoading;
export const getArticleDetailsError = (state: StateSchema) => state.articleDetails?.error;
