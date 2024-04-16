import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileErrors } from '../../types/editableProflieCard.types';

const serverResponse = {
  username: 'admin',
  firstname: 'Mama',
  lastname: 'Papa',
  age: 22,
  currency: Currency.USD,
  city: 'Saratov',
  country: Country.RUSSIA,
};

describe('updateProfileData.test', () => {
  test('success update', async () => {
    const testThunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        profileFormData: serverResponse,
      },
    });
    testThunk.api.put.mockReturnValue(Promise.resolve({
      data: serverResponse,
    }));
    const result = await testThunk.callThunk('1');

    // Вызвался ли метод пост
    expect(testThunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');

    // Вернулись ли правильные данные
    expect(result.payload).toEqual(serverResponse);
  });

  // test('error update', async () => {
  //   const testThunk = new TestAsyncThunk(updateProfileData, {
  //     profile: {
  //       profileFormData: serverResponse,
  //     },
  //   });
  //   testThunk.api.put.mockReturnValue(Promise.resolve({
  //     status: 403,
  //   }));
  //   const result = await testThunk.callThunk('1');
  //
  //   expect(result.meta.requestStatus).toBe('rejected');
  //
  //   // TODO написать на сервере какие ошибки может вернуть
  //   // updateProfileData (когда ошибка в бд или еще какая то) и заменить на них
  //   expect(result.payload).toBe([ValidateProfileErrors.SERVER_ERROR]);
  // });
  //
  // test('error validate', async () => {
  //   const testThunk = new TestAsyncThunk(updateProfileData, {
  //     profile: {
  //       profileFormData: {
  //         ...serverResponse,
  //         firstname: '',
  //       },
  //     },
  //   });
  //   testThunk.api.put.mockReturnValue(Promise.resolve({
  //     status: 403,
  //   }));
  //   const result = await testThunk.callThunk('1');
  //
  //   expect(result.meta.requestStatus).toBe('rejected');
  //
  //   expect(result.payload).toBe([ValidateProfileErrors.INCORRECT_USER_DATA]);
  // });
});
