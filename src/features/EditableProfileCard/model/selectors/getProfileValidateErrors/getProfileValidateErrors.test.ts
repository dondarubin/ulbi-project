import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileErrors } from '../../types/ProflieSchema.types';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
  test('should return error', () => {
    const validateErrors = [
      ValidateProfileErrors.NO_DATA,
      ValidateProfileErrors.INCORRECT_USERNAME,
    ];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors,
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
