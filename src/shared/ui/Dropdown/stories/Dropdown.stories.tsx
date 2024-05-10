import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button } from '../../Button';
import { Dropdown } from '../index';

export default {
  title: 'shared/Dropdown',
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
