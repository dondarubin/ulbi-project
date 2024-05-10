import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Currency } from 'entities/Currency';
import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ListBox } from '../ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ padding: '100px' }}><Story /></div>,
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

const currencyOptions = Object.entries(Currency).map(([key, value]) => ({
  value: key,
  content: value,
}));

export const Normal = Template.bind({});
Normal.args = {
  items: currencyOptions,
  selectedValue: Currency.USD,
  onChange: action('OnChange'),
};

export const Dark = Template.bind({});
Dark.args = {
  items: currencyOptions,
  selectedValue: Currency.USD,
  onChange: action('OnChange'),
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkReadonly = Template.bind({});
DarkReadonly.args = {
  items: currencyOptions,
  selectedValue: Currency.USD,
  onChange: action('OnChange'),
  readonly: true,
};
DarkReadonly.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkWithLabel = Template.bind({});
DarkWithLabel.args = {
  items: currencyOptions,
  selectedValue: Currency.USD,
  onChange: action('OnChange'),
  label: 'label',
};
DarkWithLabel.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkTopLeft = Template.bind({});
DarkTopLeft.args = {
  items: currencyOptions,
  selectedValue: Currency.USD,
  onChange: action('OnChange'),
  direction: 'top left',
};
DarkTopLeft.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkTopRight = Template.bind({});
DarkTopRight.args = {
  items: currencyOptions,
  selectedValue: Currency.USD,
  onChange: action('OnChange'),
  direction: 'top right',
};
DarkTopRight.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkBottomLeft = Template.bind({});
DarkBottomLeft.args = {
  items: currencyOptions,
  selectedValue: Currency.USD,
  onChange: action('OnChange'),
  direction: 'bottom left',
};
DarkBottomLeft.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkBottomRight = Template.bind({});
DarkBottomRight.args = {
  items: currencyOptions,
  selectedValue: Currency.USD,
  onChange: action('OnChange'),
  direction: 'bottom right',
};
DarkBottomRight.decorators = [ThemeDecorator(Theme.DARK)];
