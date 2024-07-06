import { Document, model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

import { UserInterface } from './interfaces/user.interface';

interface IUser extends Document, UserInterface {}

const userSchema: Schema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const password: string = this.password as string;
  const saltRounds = 9;
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
