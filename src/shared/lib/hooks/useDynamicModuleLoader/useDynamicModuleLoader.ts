import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { Reducer } from '@reduxjs/toolkit';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';

// Ключ: название reducer, значение: сам reducer
export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

// Чисто для Object.entries
type ReducersListForObjectEntry = [StateSchemaKey, Reducer]

interface useDynamicModuleLoaderProps {
  reducers: ReducersList,
  removeAfterUnmount?: boolean,
}

export function useDynamicModuleLoader(
  {
    reducers,
    removeAfterUnmount = true,
  }: useDynamicModuleLoaderProps,
) {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  const addReducers = () => {
    Object.entries(reducers).forEach(([keyName, reducer]: ReducersListForObjectEntry) => {
      if (!store.reducerManager.has(keyName)) {
        store.reducerManager.add(keyName, reducer);
        dispatch({ type: `@INIT ${keyName} reducer` });
      }
    });
  };

  const removeReducers = () => {
    Object.entries(reducers).forEach(([keyName, reducer]: ReducersListForObjectEntry) => {
      if (store.reducerManager.has(keyName)) {
        store.reducerManager.remove(keyName);
        dispatch({ type: `@DELETE ${keyName} reducer` });
      }
    });
  };

  useEffect(() => {
    addReducers();

    return () => {
      if (removeAfterUnmount) {
        removeReducers();
      }
    };
    // eslint-disable-next-line
  }, []);
}
