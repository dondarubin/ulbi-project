import { ValidateCommentErrors } from '../consts/consts';

export interface AddNewCommentFormSchema {
  commentText?: string;
  validateError?: ValidateCommentErrors;
}
