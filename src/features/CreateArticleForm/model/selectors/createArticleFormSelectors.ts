import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleType } from '@/entities/Article';

export const getCreateArticleFormTitle = (state: StateSchema) => state.createArticleForm?.title ?? '';
export const getCreateArticleFormSubtitle = (state: StateSchema) => state.createArticleForm?.subtitle ?? '';
export const getCreateArticleFormImg = (state: StateSchema) => state.createArticleForm?.img ?? '';
export const getCreateArticleFormType = (state: StateSchema) => state.createArticleForm?.type;
export const getCreateArticleFormTitleField = (state: StateSchema) => state.createArticleForm?.titleField ?? '';
export const getCreateArticleFormParagraphsArray = (state: StateSchema) => state.createArticleForm?.paragraphsArray;
export const getCreateArticleFormParagraphField = (state: StateSchema) => state.createArticleForm?.paragraphField ?? '';
export const getCreateArticleFormImageCaptionField = (state: StateSchema) => state.createArticleForm?.imageCaptionField ?? '';
export const getCreateArticleFormImageUrlField = (state: StateSchema) => state.createArticleForm?.imageUrlField ?? '';
export const getCreateArticleFormCodeField = (state: StateSchema) => state.createArticleForm?.codeField ?? '';
export const getCreateArticleFormContent = (state: StateSchema) => state.createArticleForm?.content;
export const getCreateArticleFormIsLoading = (state: StateSchema) => state.createArticleForm?.isLoading;
export const getCreateArticleFormValidateError = (state: StateSchema) => state.createArticleForm?.validateError;
