export interface IUser {
  userId: number,
  userName: string,
}

export interface UserSchema {
  authData?: IUser,
}
