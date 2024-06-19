import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

export interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}
