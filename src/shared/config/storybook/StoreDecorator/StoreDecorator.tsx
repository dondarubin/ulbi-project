import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
// TODO
// eslint-disable-next-line origin-fsd-plugin/imports-from-public-api
import {
  articleRecommendationsReducer,
} from '@/features/ArticleRecommendationsList/model/slice/articleRecommendationsSlice';
// eslint-disable-next-line origin-fsd-plugin/imports-from-public-api
import { articleCommentsReducer } from '@/features/ArticleCommentList/model/slice/articleCommentsSlice';
// eslint-disable-next-line origin-fsd-plugin/imports-from-public-api
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
// eslint-disable-next-line origin-fsd-plugin/imports-from-public-api
import { profileReducer } from '@/features/EditableProfileCard/model/slice/profileSlice';
// eslint-disable-next-line origin-fsd-plugin/imports-from-public-api
import { ReducersList } from '@/shared/lib/hooks';
// eslint-disable-next-line origin-fsd-plugin/imports-from-public-api
import { articlesPageReducer } from '@/pages/ArticlesPage/model/slice/articlesPageSlice';
// eslint-disable-next-line origin-fsd-plugin/imports-from-public-api
import { addNewCommentFormReducer } from '@/features/AddNewComment/model/slice/addNewCommentFormSlice';
// eslint-disable-next-line origin-fsd-plugin/imports-from-public-api
import { registerReducer } from '@/features/RegisterByUsername/model/slice/registerSlice';
// eslint-disable-next-line origin-fsd-plugin/imports-from-public-api
import { aiHelperReducer } from '@/entities/AiHelper/model/slice/aiHelperSlice';
// eslint-disable-next-line origin-fsd-plugin/imports-from-public-api
import { createArticleFormReducer } from '@/features/CreateArticleForm/model/slice/createArticleFormSlice';
// eslint-disable-next-line origin-fsd-plugin/imports-from-public-api
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';

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
