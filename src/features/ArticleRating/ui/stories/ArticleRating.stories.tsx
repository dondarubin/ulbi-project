import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import ArticleRating from '../ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRoles } from '@/entities/User';

export default {
  title: 'features/Article/ArticleRating',
  component: ArticleRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

const userId = 1;
const articleId = '1';

export const Normal = Template.bind({});
Normal.args = { articleId };
Normal.decorators = [StoreDecorator({
  user: {
    authData: {
      userId,
      userName: 'mama',
      roles: [UserRoles.USER],
    },
  },
})];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/article/rating?userId=${userId}&articleId=${articleId}`,
      method: 'GET',
      status: 200,
      response: {
        rate: 1,
        feedback: '',
      },
    },
  ],
};

export const withoutRate = Template.bind({});
withoutRate.args = { articleId };
withoutRate.decorators = [StoreDecorator({
  user: {
    authData: {
      userId,
      userName: 'mama',
      roles: [UserRoles.USER],
    },
  },
})];
withoutRate.parameters = {
  mockData: [
    {
      url: `${__API__}/article/rating?userId=${userId}&articleId=${articleId}`,
      method: 'GET',
      status: 200,
      response: {},
    },
  ],
};
