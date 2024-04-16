import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { fetchProfileData } from './fetchProfileData';

const serverResponse = {
  username: 'admin',
  firstname: 'Mama',
  lastname: 'Papa',
  age: 22,
  currency: Currency.USD,
  city: 'Saratov',
  country: Country.RUSSIA,
};

describe('fetchProfileData.test', () => {
  test('success fetch', async () => {
    const testThunk = new TestAsyncThunk(fetchProfileData);
    testThunk.api.get.mockReturnValue(Promise.resolve({
      data: serverResponse,
    }));
    const result = await testThunk.callThunk('1');

    // Вызвался ли метод пост
    expect(testThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');

    // Вернулись ли правильные данные
    expect(result.payload).toEqual(serverResponse);
  });

  test('error fetch', async () => {
    const testThunk = new TestAsyncThunk(fetchProfileData);
    // Полные данные, которые должен вернуть сервер
    testThunk.api.get.mockReturnValue(Promise.resolve({
      status: 403,
    }));
    const result = await testThunk.callThunk('1');

    // Вызвался ли метод пост
    expect(testThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');

    expect(result.payload).toBe('error in fetchProfileData (AsyncThunk)');
  });
});
