import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from '@/app/providers/StoreProvider';
import { StateSchema, StateSchemaKey } from '@/app/providers/StoreProvider/config/StateSchema';

// Ключ: название reducer, значение: сам reducer
export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

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
    Object.entries(reducers).forEach(([keyName, reducer]) => {
      if (!store.reducerManager.has(keyName as StateSchemaKey)) {
        store.reducerManager.add(keyName as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${keyName} reducer` });
      }
    });
  };

  const removeReducers = () => {
    Object.entries(reducers).forEach(([keyName, reducer]) => {
      if (store.reducerManager.has(keyName as StateSchemaKey)) {
        store.reducerManager.remove(keyName as StateSchemaKey);
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
