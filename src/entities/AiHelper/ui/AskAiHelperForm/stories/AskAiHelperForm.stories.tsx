import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { AiResponseRole, ValidateQuestionErrors } from '../../../model/consts/consts';
import { AskAiHelperForm } from '../AskAiHelperForm';

export default {
  title: 'entities/AskAiHelperForm',
  component: AskAiHelperForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AskAiHelperForm>;

const Template: ComponentStory<typeof AskAiHelperForm> = (args) => <AskAiHelperForm {...args} />;

// export const Normal = Template.bind({});
// Normal.args = {};
// Normal.decorators = [StoreDecorator({
//   aiHelper: {
//     questionText: 'Question',
//     aiHelperResponses: [
//       { role: AiResponseRole.ASSISTANT, content: 'Response' },
//     ],
//   },
// })];
//
// export const isLoading = Template.bind({});
// isLoading.args = {};
// isLoading.decorators = [StoreDecorator({
//   aiHelper: {
//     questionText: 'Question',
//     isLoading: true,
//   },
// })];
//
// export const ValidateError = Template.bind({});
// ValidateError.args = {};
// ValidateError.decorators = [StoreDecorator({
//   aiHelper: {
//     questionText: 'Question',
//     validateError: ValidateQuestionErrors.SERVER_ERROR,
//   },
// })];
