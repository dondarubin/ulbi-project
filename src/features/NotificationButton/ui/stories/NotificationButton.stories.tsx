import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { NotificationButton } from '../NotificationButton';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'features/NotificationButton',
  component: NotificationButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ paddingLeft: 500 }}><Story /></div>,
    withMock,
  ],
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />;

const userId = 1;

export const Normal = Template.bind({});
Normal.args = { userId };
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications/${userId}`,
      method: 'GET',
      status: 200,
      response: [
        {
          notificationId: 1,
          title: 'Уведомление 1',
          description: 'Текст уведомления 1',
          href: '',
        },
        {
          notificationId: 2,
          title: 'Уведомление 2',
          description: 'Текст уведомления 2',
          href: '',
        },
        {
          notificationId: 3,
          title: 'Уведомление 3',
          description: 'Текст уведомления 3',
          href: '',
        },
        {
          notificationId: 4,
          title: 'Уведомление 4',
          description: 'Описание 4',
          href: 'https://youtube.com',
        },
      ],
    },
  ],
};
