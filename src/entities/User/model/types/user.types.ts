export interface IUser {
  userId: string,
  userName: string,
}

export interface UserSchema {
  authData?: IUser,
}
