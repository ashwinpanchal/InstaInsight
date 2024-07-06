import { Document } from 'mongoose';

export interface UserInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IUser extends Document, UserInterface {
  comparePassword(candidatePassword: string): Promise<boolean>;
}
