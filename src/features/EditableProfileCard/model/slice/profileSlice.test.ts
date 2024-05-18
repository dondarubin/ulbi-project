import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileSchema } from '../types/ProflieSchema.types';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ValidateProfileErrors } from '../consts/consts';

const serverResponse = {
  username: 'admin',
  firstname: 'Mama',
  lastname: 'Papa',
  age: 22,
  currency: Currency.USD,
  city: 'Saratov',
  country: Country.RUSSIA,
};

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true),
    )).toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      profileData: serverResponse,
      profileFormData: { ...serverResponse, username: '' },
    };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit(),
    )).toEqual({
      readonly: true,
      validateErrors: undefined,
      profileData: serverResponse,
      profileFormData: serverResponse,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { profileFormData: { ...serverResponse, username: '123' } };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({
        username: '12345',
      }),
    )).toEqual({
      profileFormData: {
        ...serverResponse,
        username: '12345',
      },
    });
  });

  test('test async thunk update profile is pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileErrors.SERVER_ERROR],
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test async thunk update profile is fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(serverResponse, '', ''),
    )).toEqual({
      isLoading: false,
      profileData: serverResponse,
      profileFormData: serverResponse,
      readonly: true,
      validateErrors: undefined,
    });
  });
});
