import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Popover } from '../Popover';
import { Button } from '../../../../Button';

export default {
  title: 'shared/Popups/Popover',
  component: Popover,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ padding: 100 }}><Story /></div>,
  ],
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  // eslint-disable-next-line i18next/no-literal-string
  trigger: <Button>Open!</Button>,
  children: (
    // eslint-disable-next-line i18next/no-literal-string
    <div>
      Content
    </div>
  ),
};

export const Dark = Template.bind({});
Dark.args = {
  // eslint-disable-next-line i18next/no-literal-string
  trigger: <Button>Open!</Button>,
  children: (
    // eslint-disable-next-line i18next/no-literal-string
    <div>
      Content
    </div>
  ),
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  // eslint-disable-next-line i18next/no-literal-string
  trigger: <Button>Open!</Button>,
  direction: 'bottom left',
  children: (
    // eslint-disable-next-line i18next/no-literal-string
    <div>
      Content
    </div>
  ),
};
BottomLeft.decorators = [ThemeDecorator(Theme.DARK)];

export const BottomRight = Template.bind({});
BottomRight.args = {
  // eslint-disable-next-line i18next/no-literal-string
  trigger: <Button>Open!</Button>,
  direction: 'bottom right',
  children: (
    // eslint-disable-next-line i18next/no-literal-string
    <div>
      Content
    </div>
  ),
};
BottomRight.decorators = [ThemeDecorator(Theme.DARK)];

export const TopRight = Template.bind({});
TopRight.args = {
  // eslint-disable-next-line i18next/no-literal-string
  trigger: <Button>Open!</Button>,
  direction: 'top right',
  children: (
    // eslint-disable-next-line i18next/no-literal-string
    <div>
      Content
    </div>
  ),
};
TopRight.decorators = [ThemeDecorator(Theme.DARK)];

export const TopLeft = Template.bind({});
TopLeft.args = {
  // eslint-disable-next-line i18next/no-literal-string
  trigger: <Button>Open!</Button>,
  direction: 'top left',
  children: (
    // eslint-disable-next-line i18next/no-literal-string
    <div>
      Content
    </div>
  ),
};
TopLeft.decorators = [ThemeDecorator(Theme.DARK)];
