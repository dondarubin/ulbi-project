import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import { StateSchema } from '@/app/providers/StoreProvider';

// Этот тип - функция, которая принимает аргумент и возвращает AsyncThunkAction
// (такой же тип имеет конкретный asyncThunk)
type ActionCreatorType<Return, Arg, RejectedValue>
  = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  // Мок
  dispatch: jest.MockedFn<any>;

  // Мок
  getState: () => StateSchema;

  // Конкретный asyncThunk
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  constructor(
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
    state?: DeepPartial<StateSchema>,
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);
    this.api = mockedAxios;
  }

  async callThunk(arg: Arg) {
    // Вызов конкретного asyncThunk, который возвращает action, который принимает dispatch, getState и extra
    const action = this.actionCreator(arg);
    // Результат выполнения asyncThunk (Promise)
    const result = await action(
      this.dispatch,
      this.getState,
      { api: this.api },
    );

    return result;
  }
}
