import { IUser } from '../../types/user.types';

export interface RefreshResponseType {
  user: IUser,
  accessToken: string,
  accessTokenExpiration: number,
}
