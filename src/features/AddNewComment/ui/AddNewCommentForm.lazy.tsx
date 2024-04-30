import { FC, lazy } from 'react';
import { AddNewCommentFormProps } from './AddNewCommentForm';

// todo заменить в проде
export const AddNewCommentFormLazy = lazy<FC<AddNewCommentFormProps>>(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./AddNewCommentForm')), 1500);
}));

// export const AddNewCommentFormLazy = lazy(()=>import('./AddNewCommentForm'))
