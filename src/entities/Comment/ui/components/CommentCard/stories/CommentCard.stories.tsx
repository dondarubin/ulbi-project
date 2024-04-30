import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AvatarStorybook from 'shared/assets/test/avatarStorybook.png';
import { CommentCard } from '../CommentCard';

export default {
  title: 'entities/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comment: {
    comment_id: 1, article_id: 1, text: 'Comment', avatar: AvatarStorybook, user_id: 1, username: 'Username',
  },
};

export const Dark = Template.bind({});
Dark.args = {
  comment: {
    comment_id: 1, article_id: 1, text: 'Comment', avatar: AvatarStorybook, user_id: 1, username: 'Username',
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = {
  comment: {
    comment_id: 1, article_id: 1, text: 'Comment', avatar: AvatarStorybook, user_id: 1, username: 'Username',
  },
  isLoading: true,
};
