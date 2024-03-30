import { createSlice } from '@reduxjs/toolkit';
import { IProfile, ProfileSchema } from '../types/profile.types';

const initialState: ProfileSchema = {
  profile: undefined,
  isLoading: false,
  readonly: true,
  error: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
