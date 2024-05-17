import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import withMock from 'storybook-addon-mock';
import { ArticleType, IArticleWithUserData } from 'entities/Article';
import { ArticleRecommendationsList } from '../ArticleRecommendationsList';

export default {
  title: 'features/Article/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

const article: IArticleWithUserData = {
  user_id: 1,
  article_id: 1,
  content: [],
  type: [ArticleType.IT],
  img: '',
  title: 'Test article',
  username: 'test username',
  views: 1000,
  created_at: '',
  subtitle: 'test subtitle',
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/articles?limit=8&page=1&sort=created_at&order=desc&search=&type=ALL`,
      method: 'GET',
      status: 200,
      response: {
        searchingArticles: [
          { ...article, article_id: 2 },
          { ...article, article_id: 3 },
          { ...article, article_id: 4 },
          { ...article, article_id: 5 },
        ],
        hasMore: true,
      },
    },
  ],
};
