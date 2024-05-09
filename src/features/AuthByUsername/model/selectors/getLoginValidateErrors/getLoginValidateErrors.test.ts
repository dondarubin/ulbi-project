import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateLoginErrors } from '../../types/loginSchema';
import { getLoginValidateErrors } from './getLoginValidateErrors';

describe('getLoginValidateErrors.test', () => {
  test('should return error', () => {
    const validateErrors = [
      ValidateLoginErrors.NO_DATA,
    ];
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        validateErrors,
      },
    };
    expect(getLoginValidateErrors(state as StateSchema)).toEqual(validateErrors);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
