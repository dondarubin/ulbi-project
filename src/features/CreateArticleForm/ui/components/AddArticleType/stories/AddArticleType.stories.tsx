import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddArticleType } from '../AddArticleType';

export default {
  title: 'features/CreateArticleForm/AddArticleType',
  component: AddArticleType,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AddArticleType>;

const Template: ComponentStory<typeof AddArticleType> = (args) => <AddArticleType {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
