import { FC, lazy } from 'react';
import { AddNewCommentFormProps } from './AddNewCommentForm';

export const AddNewCommentFormLazy = lazy<FC<AddNewCommentFormProps>>(() => import('./AddNewCommentForm'));
