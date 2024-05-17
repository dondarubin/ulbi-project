export enum UserRoles {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MANAGER = 'MANAGER'
}

export interface IUser {
  userId: number;
  userName: string;
  roles: UserRoles[];
}
