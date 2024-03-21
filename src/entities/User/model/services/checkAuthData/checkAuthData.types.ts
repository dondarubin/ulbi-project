import { IUser } from '../../types/user.types';

// TODO возможно эти типы нужно перенести в shared слой (дока FSD)
export interface RefreshResponseType {
  user: IUser,
  accessToken: string,
  accessTokenExpiration: number,
}
