import { StateSchema } from 'app/providers/StoreProvider';

export const getAddNewCommentFormText = (state: StateSchema) => state.addNewCommentForm?.commentText ?? '';
export const getAddNewCommentFormValidateError = (state: StateSchema) => state.addNewCommentForm?.validateError;
