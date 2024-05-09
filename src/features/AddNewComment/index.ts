import { getAddNewCommentFormValidateError } from './model/selectors/addNewCommentFormSelectors';
import { AddNewCommentFormSchema, ValidateCommentErrors } from './model/types/AddNewCommentFormSchema.types';
import { AddNewCommentFormLazy } from './ui/AddNewCommentForm.lazy';

export {
  ValidateCommentErrors,
  getAddNewCommentFormValidateError,
  type AddNewCommentFormSchema,
  AddNewCommentFormLazy as AddNewCommentForm,
};
