import { connect } from 'mongoose';

import serverConfig from './serverConfig';

const DATABASE_URL: string = serverConfig.DATABASE_URL || 'default';

export const mongoConnect = async () => {
  try {
    await connect(DATABASE_URL);
    console.log('MongoDb Connection is Successful');
  } catch (error) {
    console.log('Error occurred in MongoDB Connection ', error);
  }
};
