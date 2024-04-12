import { IProfile } from 'entities/Profile';

// TODO поменять текст ошибок
export enum ValidateProfileErrors {
  INCORRECT_USER_DATA = 'INCORRECT USER DATA',
  INCORRECT_USERNAME = 'INCORRECT USERNAME',
  NO_DATA = 'NO DATA',
  SERVER_ERROR = 'error in updateProfileData (AsyncThunk)'
}

export interface ProfileSchema {
  profileData?: IProfile,
  profileFormData?: IProfile,
  isLoading: boolean,
  error?: string,
  readonly: boolean,
  validateErrors?: ValidateProfileErrors[],
}
