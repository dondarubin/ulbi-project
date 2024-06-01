export enum ValidateQuestionErrors {
  NO_DATA = 'NO DATA',
  SERVER_ERROR = 'error in askQuestion (AsyncThunk)'
}

export enum AiResponseRole {
  USER = 'user',
  ASSISTANT = 'assistant',
  SYSTEM = 'system',
  TOOL = 'tool',
}
