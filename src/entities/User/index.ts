import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { checkAuthData } from './model/services/checkAuthData/checkAuthData';
import { logout } from './model/services/logout/logout';
import { userActions, userReducer } from './model/slice/userSlice';
import { IUser, UserSchema } from './model/types/user.types';

export {
  userReducer,
  userActions,
  UserSchema,
  IUser,
  getUserAuthData,
  logout,
  checkAuthData,
};
