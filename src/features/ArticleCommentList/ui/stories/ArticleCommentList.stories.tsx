import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AvatarStorybook from 'shared/assets/test/avatarStorybook.png';
import { ArticleCommentList } from '../ArticleCommentList';

export default {
  title: 'features/ArticleCommentList',
  component: ArticleCommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleCommentList>;

const Template: ComponentStory<typeof ArticleCommentList> = (args) => <ArticleCommentList {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {};
// Primary.decorators = [StoreDecorator({
//   articleComments: {
//     ids: [1, 2],
//     entities: {
//       1: {
//         comment_id: 1,
//         text: 'some comment 2',
//         article_id: 1,
//         username: 'admin 1',
//         user_id: 23,
//         avatar: AvatarStorybook,
//       },
//       2: {
//         comment_id: 2,
//         text: 'some comment 2',
//         article_id: 1,
//         username: 'admin 2',
//         user_id: 24,
//         avatar: AvatarStorybook,
//       },
//     },
//   },
// })];
//
// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
//   articleComments: {
//     ids: [1, 2],
//     entities: {
//       1: {
//         comment_id: 1,
//         text: 'some comment 2',
//         article_id: 1,
//         username: 'admin 1',
//         user_id: 23,
//         avatar: AvatarStorybook,
//       },
//       2: {
//         comment_id: 1,
//         text: 'some comment 2',
//         article_id: 1,
//         username: 'admin 2',
//         user_id: 24,
//         avatar: AvatarStorybook,
//       },
//     },
//   },
// })];
