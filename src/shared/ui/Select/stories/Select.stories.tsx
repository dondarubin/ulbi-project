import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Select } from '../Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Currency',
  options: [
    { value: 'RUB', content: 'Рубль' },
    { value: 'USD', content: 'Доллар' },
  ],
  onChange: action('OnChangeValue'),
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  options: [
    { value: 'RUB', content: 'Рубль' },
    { value: 'USD', content: 'Доллар' },
  ],
  onChange: action('OnChangeValue'),
};
