import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { CreateArticleForm } from '../CreateArticleForm';

export default {
  title: 'features/CreateArticleForm',
  component: CreateArticleForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CreateArticleForm>;

const Template: ComponentStory<typeof CreateArticleForm> = (args) => <CreateArticleForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
  createArticleForm: {},
})];
