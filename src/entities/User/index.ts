import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { checkAuthData } from './model/services/checkAuthData/checkAuthData';
import { logout } from './model/services/logout/logout';
import { userActions, userReducer } from './model/slice/userSlice';
import { IUser } from './model/types/user.types';
import { UserSchema } from './model/types/UserSchema.types';

export {
  userReducer,
  userActions,
  type UserSchema,
  type IUser,
  getUserAuthData,
  logout,
  checkAuthData,
};
