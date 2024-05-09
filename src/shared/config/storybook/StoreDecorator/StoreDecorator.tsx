import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import {
  articleRecommendationsReducer,
} from 'features/ArticleRecommendationsList/model/slice/articleRecommendationsSlice';
import { articleCommentsReducer } from 'features/ArticleCommentList/model/slice/articleCommentsSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'features/EditableProfileCard/model/slice/profileSlice';
import { ReducersList } from 'shared/lib/hooks';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import { addNewCommentFormReducer } from 'features/AddNewComment/model/slice/addNewCommentFormSlice';

const initialAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addNewCommentForm: addNewCommentFormReducer,
  articleComments: articleCommentsReducer,
  articleRecommendations: articleRecommendationsReducer,
  articlesPage: articlesPageReducer,
};

export const StoreDecorator = (
  initialState: DeepPartial<StateSchema>,
  additionalAsyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={initialState} asyncReducers={{ ...initialAsyncReducers, ...additionalAsyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
