import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User';
import { LoginSchemaTypes } from 'features/AuthByUsername';
import { AxiosInstance } from 'axios';
import { ProfileSchema } from 'features/EditableProfileCard';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleCommentsSchema } from 'features/ArticleCommentList';
import { AddNewCommentFormSchema } from 'features/AddNewComment';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ScrollSaveSchema } from 'features/ScrollSave';
import { ArticleRecommendationsSchema } from 'features/ArticleRecommendationsList';
import { rtkApi } from 'shared/api/rtkApi';
import { AiHelperSchema } from 'entities/AiHelper';
import { RegisterSchema } from 'features/RegisterByUsername';

// TODO Разобраться и принять решение использования одного из видов кейсов для userId и т.д. (Kebab...)
export interface StateSchema {
  user: UserSchema;
  scrollSave: ScrollSaveSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Асинхронные редюсеры
  loginForm?: LoginSchemaTypes;
  registerForm?: RegisterSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleComments?: ArticleCommentsSchema;
  articleRecommendations?: ArticleRecommendationsSchema;
  addNewCommentForm?: AddNewCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  aiHelper?: AiHelperSchema;
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  has: (key: StateSchemaKey) => boolean;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArgs {
  api: AxiosInstance;
}

export interface ThinkAPI<T> {
  rejectValue: T;
  extra: ThunkExtraArgs;
  state: StateSchema;
}
