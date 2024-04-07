import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from 'shared/ui/Select';

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
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  options: [
    { value: 'RUB', content: 'Рубль' },
    { value: 'USD', content: 'Доллар' },
  ],
};
