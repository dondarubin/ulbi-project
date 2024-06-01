import { ComponentMeta, ComponentStory } from '@storybook/react';
import AiHelperPage from '../AiHelperPage';

export default {
  title: 'pages/AiHelperPage',
  component: AiHelperPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AiHelperPage>;

const Template: ComponentStory<typeof AiHelperPage> = (args) => <AiHelperPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
