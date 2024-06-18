import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRoles } from 'entities/User';
import { AvatarDropdown } from '../AvatarDropdown';

export default {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ padding: 100 }}><Story /></div>,
  ],
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Admin = Template.bind({});
Admin.args = {};
Admin.decorators = [StoreDecorator({
  user: {
    authData: {
      userId: 1,
      userName: 'admin',
      roles: [UserRoles.ADMIN],
    },
  },
})];

export const User = Template.bind({});
User.args = {};
User.decorators = [StoreDecorator({
  user: {
    authData: {
      userId: 1,
      userName: 'admin',
      roles: [UserRoles.USER],
    },
  },
})];
