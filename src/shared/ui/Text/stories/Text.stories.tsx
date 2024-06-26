import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { TextSize, TextTheme } from '../Text.types';
import { Text } from '../Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus',
  text: 'Text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus',
  text: 'Text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus',
  theme: TextTheme.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  title: 'Title Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus',
  text: 'Text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus',
  theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus',
  text: 'Text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'Text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus',
  text: 'Text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus',
  size: TextSize.L,
};

export const SizeS = Template.bind({});
SizeS.args = {
  title: 'Text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus',
  text: 'Text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus',
  size: TextSize.S,
};

export const SizeM = Template.bind({});
SizeM.args = {
  title: 'Text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus',
  text: 'Text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, minus',
  size: TextSize.M,
};
