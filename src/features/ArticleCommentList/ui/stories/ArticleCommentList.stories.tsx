import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleCommentList } from '../ArticleCommentList';

export default {
  title: 'shared/ArticleCommentList',
  component: ArticleCommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleCommentList>;

const Template: ComponentStory<typeof ArticleCommentList> = (args) => <ArticleCommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
