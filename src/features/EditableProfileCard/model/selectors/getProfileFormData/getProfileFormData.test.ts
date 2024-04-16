import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileFormData } from './getProfileFormData';

describe('getProfileFormData.test', () => {
  test('should return data', () => {
    const data = {
      username: 'admin',
      firstname: 'Mama',
      lastname: 'Papa',
      age: 22,
      currency: Currency.USD,
      city: 'Saratov',
      country: Country.RUSSIA,
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        profileFormData: data,
      },
    };
    expect(getProfileFormData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileFormData(state as StateSchema)).toEqual(undefined);
  });
});
