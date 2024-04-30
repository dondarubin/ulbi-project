import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';
import { ProfileSchema } from 'features/EditableProfileCard';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleCommentsSchema } from 'features/ArticleCommentList';

// TODO Разобраться и принять решение использования одного из видов кейсов для userId и т.д. (Kebab...)
export interface StateSchema {
  user: UserSchema;

  // Асинхронные редюсеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleComments?: ArticleCommentsSchema;
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>,
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
  add: (key: StateSchemaKey, reducer: Reducer) => void,
  remove: (key: StateSchemaKey) => void,
  has: (key: StateSchemaKey) => boolean,
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArgs {
  api: AxiosInstance,
  navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThinkAPI<T> {
  rejectValue: T,
  extra: ThunkExtraArgs,
  state: StateSchema
}
