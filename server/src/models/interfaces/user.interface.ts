import { Document } from 'mongoose';

export enum UserType {
  COMPANY = 'Company',
  USER = 'User',
}

export interface UserInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userType?: UserType;
}

export interface IUser extends Document, UserInterface {
  comparePassword(candidatePassword: string): Promise<boolean>;
}
