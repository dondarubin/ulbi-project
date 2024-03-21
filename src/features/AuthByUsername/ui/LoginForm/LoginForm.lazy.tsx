import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

// todo заменить в проде
export const LoginFormLazy = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./LoginForm')), 1500);
}));

// export const LoginFormLazy = lazy(()=>import('./LoginForm'))
