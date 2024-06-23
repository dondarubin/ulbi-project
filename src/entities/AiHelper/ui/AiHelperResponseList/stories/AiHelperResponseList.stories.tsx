import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AiHelperResponseList } from '../AiHelperResponseList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { AiResponseRole } from '@/entities/AiHelper';

export default {
  title: 'entities/AiHelperResponseList',
  component: AiHelperResponseList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AiHelperResponseList>;

const Template: ComponentStory<typeof AiHelperResponseList> = (args) => <AiHelperResponseList {...args} />;

export const NoData = Template.bind({});
NoData.args = {};
NoData.decorators = [StoreDecorator({})];

export const Data = Template.bind({});
Data.args = {};
Data.decorators = [StoreDecorator({
  aiHelper: {
    aiHelperResponses: [
      {
        role: AiResponseRole.USER,
        content: 'Some question',
      },
      {
        role: AiResponseRole.ASSISTANT,
        content: 'Some response',
      },
    ],
  },
})];
