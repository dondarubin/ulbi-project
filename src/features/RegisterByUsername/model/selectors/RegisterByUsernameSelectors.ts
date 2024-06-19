import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegisterValidateErrors = (state: StateSchema) => state.registerForm?.validateErrors;
export const getRegisterIsLoading = (state: StateSchema) => state.registerForm?.isLoading || false;
export const getRegisterPassword = (state: StateSchema) => state.registerForm?.password || '';
export const getRegisterReplyPassword = (state: StateSchema) => state.registerForm?.replyPassword || '';
export const getRegisterUsername = (state: StateSchema) => state.registerForm?.username || '';
