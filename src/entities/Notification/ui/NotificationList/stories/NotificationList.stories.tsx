import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { NotificationList } from '../NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

const userId = 1;

const notification = {
  notificationId: 1,
  title: 'Уведомление 1',
  description: 'Текст уведомления 1',
  href: '',
};

export const Normal = Template.bind({});
Normal.args = {
  userId,
};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications/${userId}`,
      method: 'GET',
      status: 200,
      response: [
        notification,
        notification,
        notification,
        {
          notificationId: 4,
          title: 'Уведомление 4',
          description: 'Текст уведомления 4',
          href: 'https://youtube.com',
        },
      ],
    },
  ],
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  userId,
};
WithLoading.decorators = [StoreDecorator({})];
WithLoading.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications/${userId}`,
      method: 'GET',
      status: 200,
      response: [
        notification,
        notification,
        notification,
      ],
      delay: 3000,
    },
  ],
};
