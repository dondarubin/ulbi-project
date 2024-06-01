import { IUser } from 'entities/User';

export interface RegisterByUsernameProps {
  username: string,
  password: string,
  replyPassword: string,
}

export interface RegisterResponseType {
  user: IUser,
  accessToken: string,
  accessTokenExpiration: number,
}
