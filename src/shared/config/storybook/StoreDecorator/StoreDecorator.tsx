import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'features/EditableProfileCard/model/slice/profileSlice';
import { ReducersList } from 'shared/lib/hooks';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';

const initialAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
};

export const StoreDecorator = (
  initialState: DeepPartial<StateSchema>,
  additionalAsyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={initialState} asyncReducers={{ ...initialAsyncReducers, ...additionalAsyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
