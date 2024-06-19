import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { PrimaryDark } from '@/features/AuthByUsername/ui/LoginForm/stories/LoginForm.stories';
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
