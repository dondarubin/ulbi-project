import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registerByUsername } from '../services/registerByUsername/registerByUsername';
import { RegisterSchema } from '../types/registerSchema.types';

const initialState: RegisterSchema = {
  isLoading: false,
  username: '',
  password: '',
  replyPassword: '',
};

export const registerSlice = createSlice({
  name: 'registerSlice',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setReplyPassword: (state, action: PayloadAction<string>) => {
      state.replyPassword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerByUsername.pending, (state) => {
        state.isLoading = true;
        state.validateErrors = undefined;
      })
      .addCase(registerByUsername.fulfilled, (state, action) => {
        state.isLoading = false;
        state.validateErrors = undefined;
      })
      .addCase(registerByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.validateErrors = action.payload;
      });
  },
});

export const { actions: registerActions } = registerSlice;
export const { reducer: registerReducer } = registerSlice;
