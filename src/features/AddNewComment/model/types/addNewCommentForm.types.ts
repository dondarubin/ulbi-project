export enum ValidateCommentErrors {
  INCORRECT_DATA = 'INCORRECT DATA',
  NO_DATA = 'NO DATA',
  SERVER_ERROR = 'error in createNewComment (AsyncThunk)'
}

export interface AddNewCommentFormSchema {
  commentText?: string;
  validateError?: ValidateCommentErrors;
}
