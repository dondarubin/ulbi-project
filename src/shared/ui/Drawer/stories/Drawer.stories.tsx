import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Drawer } from '../Drawer';

export default {
  title: 'shared/Drawer',
  component: Drawer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  isOpen: true,
  // eslint-disable-next-line i18next/no-literal-string
  children: <>ghbdfhfgdhgdfhf</>,
};
