import { ComponentMeta, ComponentStory } from '@storybook/react';
import RegisterForm from '../RegisterForm';

export default {
  title: 'shared/RegisterForm',
  component: RegisterForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = (args) => <RegisterForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
