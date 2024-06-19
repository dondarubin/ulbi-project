import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlesDetailsPageHeader } from '../ArticlesDetailsPageHeader';

export default {
  title: 'pages/ArticlesDetailsPageHeader',
  component: ArticlesDetailsPageHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesDetailsPageHeader>;

const Template: ComponentStory<typeof ArticlesDetailsPageHeader> = (args) => <ArticlesDetailsPageHeader {...args} />;

export const CantEdit = Template.bind({});
CantEdit.args = {};
CantEdit.decorators = [StoreDecorator({
  user: {
    authData: {
      userId: 1,
    },
  },
  articleDetails: {
    articleData: {
      user_id: 2,
    },
  },
})];

export const CanEdit = Template.bind({});
CanEdit.args = {};
CanEdit.decorators = [StoreDecorator({})];
