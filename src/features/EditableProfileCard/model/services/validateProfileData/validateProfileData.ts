import { IProfile } from 'entities/Profile';
import { ValidateProfileErrors } from '../../types/editableProflieCard.types';

// TODO добавить валидацию на:
// Username must consist of latin letters and numbers
// firstname: VARCHAR(50)
// lastname: VARCHAR(50)
// city: VARCHAR(50)

export function validateProfileData(profile?: IProfile) {
  if (!profile) {
    return [ValidateProfileErrors.NO_DATA];
  }

  const {
    firstname,
    lastname,
    age,
    country,
    username,
  } = profile;
  const errors: ValidateProfileErrors[] = [];

  if ((firstname && !lastname) || (!firstname && lastname)) {
    errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
  }

  if ((!username) || username.length < 3 || username.length > 20) {
    errors.push(ValidateProfileErrors.INCORRECT_USERNAME);
  }

  return errors;
}
