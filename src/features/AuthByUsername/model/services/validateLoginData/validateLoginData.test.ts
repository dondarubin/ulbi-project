import { ValidateLoginErrors } from '../../consts/consts';
import { validateLoginData } from './validateLoginData';

// TODO дописать тесты при добавлении новой валидации
describe('validateLoginData.test', () => {
  test('success validate', async () => {
    const result = validateLoginData('mama', 'mama228');
    expect(result).toEqual([]);
  });

  test('error validate no data', async () => {
    const result = validateLoginData('', '');
    expect(result).toEqual([ValidateLoginErrors.NO_DATA]);
  });

  test('error validate no data', async () => {
    const result = validateLoginData('ma', 'mama228');
    expect(result).toEqual([ValidateLoginErrors.USERNAME_LENGTH]);
  });

  test('error validate no data', async () => {
    const result = validateLoginData('mama@', 'mama228');
    expect(result).toEqual([ValidateLoginErrors.USERNAME_MASK]);
  });

  test('error validate no data', async () => {
    const result = validateLoginData('mama228', 'mama');
    expect(result).toEqual([ValidateLoginErrors.PASSWORD_LENGTH]);
  });

  test('error validate no data', async () => {
    const result = validateLoginData('mama228', 'mama@');
    expect(result).toEqual([ValidateLoginErrors.PASSWORD_MASK]);
  });
});
