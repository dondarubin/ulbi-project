import { StateSchema } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';

export interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}
