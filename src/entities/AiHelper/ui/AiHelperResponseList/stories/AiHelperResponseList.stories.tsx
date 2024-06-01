import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AiHelperResponseList } from '../AiHelperResponseList';

export default {
  title: 'shared/AiHelperResponseList',
  component: AiHelperResponseList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AiHelperResponseList>;

const Template: ComponentStory<typeof AiHelperResponseList> = (args) => <AiHelperResponseList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
