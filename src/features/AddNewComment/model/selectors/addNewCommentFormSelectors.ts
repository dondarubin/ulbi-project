import { StateSchema } from 'app/providers/StoreProvider';

export const getAddNewCommentFormText = (state: StateSchema) => state.addNewCommentForm?.commentText || '';
export const getAddNewCommentFormError = (state: StateSchema) => state.addNewCommentForm?.error;
