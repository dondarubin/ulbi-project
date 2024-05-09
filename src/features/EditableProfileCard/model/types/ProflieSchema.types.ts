import { IProfile } from 'entities/Profile';

export enum ValidateProfileErrors {
  INCORRECT_USER_DATA = 'INCORRECT USER DATA',
  INCORRECT_USERNAME = 'INCORRECT USERNAME',
  INCORRECT_AGE = 'INCORRECT AGE',
  INCORRECT_FIRSTNAME = 'INCORRECT FIRSTNAME',
  INCORRECT_CITY = 'INCORRECT CITY',
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
