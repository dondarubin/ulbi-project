import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

// Этот тип - функция, которая принимает аргумент и возвращает AsyncThunkAction
// (такой же тип имеет конкретный asyncThunk)
type ActionCreatorType<Return, Arg, RejectedValue>
  = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  // Мок
  dispatch: jest.MockedFn<any>;

  // Мок
  getState: () => StateSchema;

  // Конкретный asyncThunk
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: Arg) {
    // Вызов конкретного asyncThunk, который возвращает action, который принимает dispatch, getState и extra
    const action = this.actionCreator(arg);
    // Результат выполнения asyncThunk (Promise)
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
