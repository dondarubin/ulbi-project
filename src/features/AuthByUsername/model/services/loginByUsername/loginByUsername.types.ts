import { IUser } from '@/entities/User';

export interface LoginByUsernameProps {
  username: string,
  password: string,
}

export interface LoginResponseType {
  user: IUser,
  accessToken: string,
  accessTokenExpiration: number,
}
