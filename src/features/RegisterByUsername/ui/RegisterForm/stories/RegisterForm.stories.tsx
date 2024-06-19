import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ValidateRegisterErrors } from '../../../model/consts/consts';
import RegisterForm from '../RegisterForm';

export default {
  title: 'features/RegisterForm',
  component: RegisterForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = (args) => <RegisterForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  registerForm: {
    username: 'admin',
    password: 'admin',
    replyPassword: 'admin',
  },
})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  registerForm: {
    username: 'admin',
    password: 'admin',
    replyPassword: 'admin',
  },
})];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [StoreDecorator({
  registerForm: {
    username: 'admin',
    password: 'admin',
    replyPassword: 'admin',
    validateErrors: [ValidateRegisterErrors.NO_DATA],
  },
})];

export const withLoading = Template.bind({});
withLoading.args = {};
withLoading.decorators = [StoreDecorator({
  registerForm: {
    username: 'admin',
    password: 'admin',
    replyPassword: 'admin',
    isLoading: true,
  },
})];
