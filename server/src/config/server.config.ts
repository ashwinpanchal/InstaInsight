import dotenv from 'dotenv';

dotenv.config();

export = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
};
