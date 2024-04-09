import { IProfile } from 'entities/Profile';

export interface ProfileSchema {
  profileData?: IProfile,
  profileFormData?: IProfile,
  isLoading: boolean,
  error?: string,
  readonly: boolean,
}
