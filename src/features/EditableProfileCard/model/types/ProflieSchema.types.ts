import { IProfile } from '@/entities/Profile';
import { ValidateProfileErrors } from '../consts/consts';

export interface ProfileSchema {
  profileData?: IProfile,
  profileFormData?: IProfile,
  isLoading: boolean,
  error?: string,
  readonly: boolean,
  validateErrors?: ValidateProfileErrors[],
}
