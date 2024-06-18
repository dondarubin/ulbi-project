import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddArticleContent } from '../AddArticleContent';

export default {
  title: 'features/CreateArticleForm/AddArticleContent',
  component: AddArticleContent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AddArticleContent>;

const Template: ComponentStory<typeof AddArticleContent> = (args) => <AddArticleContent {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
