import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersList } from '@/shared/lib/hooks';
import { articleRecommendationsReducer } from '@/features/ArticleRecommendationsList/testing';
import { profileReducer } from '@/features/EditableProfileCard/testing';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { addNewCommentFormReducer } from '@/features/AddNewComment/testing';
import { articleCommentsReducer } from '@/features/ArticleCommentList/testing';
import { articlesPageReducer } from '@/pages/ArticlesPage/testing';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { aiHelperReducer } from '@/entities/AiHelper/testing';
import { createArticleFormReducer } from '@/features/CreateArticleForm/testing';
import { registerReducer } from '@/features/RegisterByUsername/testing';

const initialAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addNewCommentForm: addNewCommentFormReducer,
  articleComments: articleCommentsReducer,
  articleRecommendations: articleRecommendationsReducer,
  articlesPage: articlesPageReducer,
  registerForm: registerReducer,
  aiHelper: aiHelperReducer,
  createArticleForm: createArticleFormReducer,
};

export const StoreDecorator = (
  initialState: DeepPartial<StateSchema>,
  additionalAsyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={initialState} asyncReducers={{ ...initialAsyncReducers, ...additionalAsyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
