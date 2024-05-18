import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileErrors } from '../../consts/consts';

const serverResponse = {
  username: 'admin',
  firstname: 'Mama',
  lastname: 'Papa',
  age: 22,
  currency: Currency.USD,
  city: 'Saratov',
  country: Country.RUSSIA,
};

// TODO дописать тесты при добавлении новой валидации
describe('validateProfileData.test', () => {
  test('success validate', async () => {
    const result = validateProfileData(serverResponse);

    // Вернулись ли правильные данные
    expect(result).toEqual([]);
  });

  test('error validate with firstname, but without lastname', async () => {
    const result = validateProfileData({ ...serverResponse, firstname: '' });

    // Вернулись ли правильные данные
    expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
  });

  test('error validate without profile data', async () => {
    const result = validateProfileData();

    // Вернулись ли правильные данные
    expect(result).toEqual([ValidateProfileErrors.NO_DATA]);
  });

  test('error validate with incorrect username', async () => {
    const result = validateProfileData({ ...serverResponse, username: 'pa' });

    // Вернулись ли правильные данные
    expect(result).toEqual([ValidateProfileErrors.INCORRECT_USERNAME]);
  });
});
