import { UserRoles } from '../consts/consts';

export interface IUser {
  userId: number;
  userName: string;
  roles: UserRoles[];
}

export interface UserSchema {
  authData?: IUser;
}
