import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import MainPage from '../MainPage';

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MainPage>;

// @ts-ignore
const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
  user: {},
})];
