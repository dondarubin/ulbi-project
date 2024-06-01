import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AskAiHelperForm } from '../AskAiHelperForm';

export default {
  title: 'features/AskAiHelperForm',
  component: AskAiHelperForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AskAiHelperForm>;

const Template: ComponentStory<typeof AskAiHelperForm> = (args) => <AskAiHelperForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
