import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Button } from '../../../../Button';
import { Dropdown } from '../Dropdown';

export default {
  title: 'shared/Popups/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ padding: 100 }}><Story /></div>,
  ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  // eslint-disable-next-line i18next/no-literal-string
  trigger: <Button>Open!</Button>,
  items: [
    {
      content: 'first',
    },
    {
      content: 'second',
    },
    {
      content: 'third',
    },
  ],
};

export const Dark = Template.bind({});
Dark.args = {
  // eslint-disable-next-line i18next/no-literal-string
  trigger: <Button>Open!</Button>,
  items: [
    {
      content: 'first',
    },
    {
      content: 'second',
    },
    {
      content: 'third',
    },
  ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  // eslint-disable-next-line i18next/no-literal-string
  trigger: <Button>Open!</Button>,
  direction: 'bottom left',
  items: [
    {
      content: 'first',
    },
    {
      content: 'second',
    },
    {
      content: 'third',
    },
  ],
};
BottomLeft.decorators = [ThemeDecorator(Theme.DARK)];

export const BottomRight = Template.bind({});
BottomRight.args = {
  // eslint-disable-next-line i18next/no-literal-string
  trigger: <Button>Open!</Button>,
  direction: 'bottom right',
  items: [
    {
      content: 'first',
    },
    {
      content: 'second',
    },
    {
      content: 'third',
    },
  ],
};
BottomRight.decorators = [ThemeDecorator(Theme.DARK)];

export const TopRight = Template.bind({});
TopRight.args = {
  // eslint-disable-next-line i18next/no-literal-string
  trigger: <Button>Open!</Button>,
  direction: 'top right',
  items: [
    {
      content: 'first',
    },
    {
      content: 'second',
    },
    {
      content: 'third',
    },
  ],
};
TopRight.decorators = [ThemeDecorator(Theme.DARK)];

export const TopLeft = Template.bind({});
TopLeft.args = {
  // eslint-disable-next-line i18next/no-literal-string
  trigger: <Button>Open!</Button>,
  direction: 'top left',
  items: [
    {
      content: 'first',
    },
    {
      content: 'second',
    },
    {
      content: 'third',
    },
  ],
};
TopLeft.decorators = [ThemeDecorator(Theme.DARK)];
