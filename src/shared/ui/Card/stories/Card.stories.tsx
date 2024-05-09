import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text } from '../../Text';
import { Card } from '../index';

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  // eslint-disable-next-line i18next/no-literal-string
  children: <Text title="title" text="text text" />,
};

export const Dark = Template.bind({});
Dark.args = {
  // eslint-disable-next-line i18next/no-literal-string
  children: <Text title="title" text="text text" />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
