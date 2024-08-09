import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

import { IUser, UserType } from './interfaces/user.interface';
import serverConfig from '../config/server.config';

const userSchema: Schema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userType: {
      type: String,
      enum: Object.values(UserType),
      default: UserType.USER,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const password: string = this.password as string;
  const saltRounds = serverConfig.BCRYPT_SALT_ROUNDS;
  this.password = await bcrypt.hash(password, saltRounds);
  next();
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  const password: string = this.password as string;
  return bcrypt.compare(candidatePassword, password);
};

export const User = model<IUser>('User', userSchema);
