import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationItem } from '../NotificationItem';

export default {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  item: {
    title: 'Уведомление 1',
    description: 'Описание 1',
    notificationId: 1,
  },
};

export const WithHref = Template.bind({});
WithHref.args = {
  item: {
    title: 'Уведомление 2',
    description: 'Описание 2',
    notificationId: 2,
    href: 'https://youtube.com',
  },
};
