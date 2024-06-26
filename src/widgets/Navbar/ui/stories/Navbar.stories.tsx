import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRoles } from '@/entities/User';
import { Navbar } from '../Navbar';

export default {
  title: 'widget/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const LightWithAuthUser = Template.bind({});
LightWithAuthUser.args = {};
LightWithAuthUser.decorators = [StoreDecorator({
  user: { authData: {} },
})];

export const DarkWithAuthUser = Template.bind({});
DarkWithAuthUser.args = {};
DarkWithAuthUser.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: { authData: {} },
})];

export const DarkWithAuthAdmin = Template.bind({});
DarkWithAuthAdmin.args = {};
DarkWithAuthAdmin.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: { authData: { roles: [UserRoles.ADMIN] } },
})];

export const DarkWithAuthManager = Template.bind({});
DarkWithAuthManager.args = {};
DarkWithAuthManager.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: { authData: { roles: [UserRoles.MANAGER] } },
})];
