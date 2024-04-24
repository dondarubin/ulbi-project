import { IProfile } from 'entities/Profile';
import { ValidateProfileErrors } from '../../types/editableProflieCard.types';

export function validateProfileData(profile?: IProfile) {
  if (!profile) {
    return [ValidateProfileErrors.NO_DATA];
  }

  const {
    firstname,
    lastname,
    age,
    city,
    username,
  } = profile;
  const errors: ValidateProfileErrors[] = [];

  if ((firstname && !lastname) || (!firstname && lastname)) {
    errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
  }

  if ((!username) || username.length < 3 || username.length > 20) {
    errors.push(ValidateProfileErrors.INCORRECT_USERNAME);
  }

  if ((!age) || age < 0 || age > 100) {
    errors.push(ValidateProfileErrors.INCORRECT_AGE);
  }

  if ((firstname) && (firstname?.length < 0 || firstname?.length > 50)) {
    errors.push(ValidateProfileErrors.INCORRECT_FIRSTNAME);
  }

  if ((city) && (city?.length < 0 || city?.length > 50)) {
    errors.push(ValidateProfileErrors.INCORRECT_CITY);
  }

  return errors;
}
