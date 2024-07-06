import dotenv from 'dotenv';

dotenv.config();

export = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_TOKEN: process.env.JWT_TOKEN as string,
  BCRYPT_SALT_ROUNDS: Number(process.env.BCRYPT_SALT_ROUNDS),
};
