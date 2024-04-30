import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarStorybook from 'shared/assets/test/avatarStorybook.png';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentList } from '../CommentList';

export default {
  title: 'entities/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comments: [{
    comment_id: 1, article_id: 1, text: 'Comment 1', avatar: AvatarStorybook, user_id: 1, username: 'Username 1',
  }, {
    comment_id: 1, article_id: 1, text: 'Comment 2', avatar: AvatarStorybook, user_id: 1, username: 'Username 2',
  }],
};

export const Dark = Template.bind({});
Dark.args = {
  comments: [{
    comment_id: 1, article_id: 1, text: 'Comment 1', avatar: AvatarStorybook, user_id: 1, username: 'Username 1',
  }, {
    comment_id: 1, article_id: 1, text: 'Comment 2', avatar: AvatarStorybook, user_id: 1, username: 'Username 2',
  }],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const isLoading = Template.bind({});
isLoading.args = {
  comments: [{
    comment_id: 1, article_id: 1, text: 'Comment 1', avatar: AvatarStorybook, user_id: 1, username: 'Username 1',
  }, {
    comment_id: 1, article_id: 1, text: 'Comment 2', avatar: AvatarStorybook, user_id: 1, username: 'Username 2',
  }],
  isLoading: true,
};
