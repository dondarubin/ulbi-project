import {
  CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';
import { scrollSaveReducer } from 'features/ScrollSave';
import { rtkApi } from 'shared/api/rtkApi';
import { StateSchema, ThunkExtraArgs } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    scrollSave: scrollSaveReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArgs: ThunkExtraArgs = {
    api: $api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArgs,
      },
    }).concat(rtkApi.middleware),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
