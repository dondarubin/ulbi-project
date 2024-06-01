import { AiResponseRole, ValidateQuestionErrors } from '../consts/consts';

export interface AiResponse {
  role: AiResponseRole;
  content: string;
}

export interface AiHelperSchema {
  isLoading: boolean;
  questionText?: string;
  validateError?: ValidateQuestionErrors;
  aiHelperResponses: AiResponse[]
}
