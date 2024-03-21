import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { LoginSchema } from 'features/AuthByUsername';

export const getLoginUsername = createSelector(
  getLoginState,
  (loginForm: LoginSchema) => loginForm?.username || '',
);
