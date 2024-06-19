import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { AiResponseRole, ValidateQuestionErrors } from '@/entities/AiHelper';
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
Normal.decorators = [StoreDecorator({
  aiHelper: {
    questionText: 'Question',
    aiHelperResponses: [
      { role: AiResponseRole.ASSISTANT, content: 'Response' },
    ],
  },
})];

export const isLoading = Template.bind({});
isLoading.args = {};
isLoading.decorators = [StoreDecorator({
  aiHelper: {
    questionText: 'Question',
    isLoading: true,
  },
})];

export const ValidateError = Template.bind({});
ValidateError.args = {};
ValidateError.decorators = [StoreDecorator({
  aiHelper: {
    questionText: 'Question',
    validateError: ValidateQuestionErrors.SERVER_ERROR,
  },
})];
