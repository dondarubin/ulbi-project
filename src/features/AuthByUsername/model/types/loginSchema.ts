export enum ValidateLoginErrors {
  USERNAME_LENGTH = 'USERNAME LENGTH',
  USERNAME_MASK = 'USERNAME MASK',
  PASSWORD_LENGTH = 'PASSWORD LENGTH',
  PASSWORD_MASK = 'PASSWORD MASK',
  NO_DATA = 'NO DATA',
  SERVER_ERROR = 'server error in loginByUsername (AsyncThunk)'
}

export interface LoginSchema {
  username: string,
  password: string,
  isLoading: boolean,
  validateErrors?: ValidateLoginErrors[],
}
