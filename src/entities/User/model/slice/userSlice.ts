import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { checkAuthData } from '../services/checkAuthData/checkAuthData';
import { logout } from '../services/logout/logout';
import { IUser } from '../types/user.types';
import { UserSchema } from '../types/UserSchema.types';

const initialState: UserSchema = {
  authData: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthData.pending, (state, action) => {
      })
      .addCase(checkAuthData.fulfilled, (state, action) => {
        state.authData = action.payload.user;
      })
      .addCase(checkAuthData.rejected, (state, action) => {
        state.authData = undefined;
      });

    builder
      .addCase(logout.pending, (state, action) => {
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.authData = undefined;
      })
      .addCase(logout.rejected, (state, action) => {
      });
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
