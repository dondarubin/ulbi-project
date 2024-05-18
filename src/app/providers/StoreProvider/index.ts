import type {
  ReduxStoreWithManager, StateSchema, ThinkAPI,
} from './config/StateSchema';
import { AppDispatch, createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  ReduxStoreWithManager,
  type AppDispatch,
  ThinkAPI,
};
