import express, { Express } from 'express';

import serverConfig from './config/serverConfig';
import { mongoConnect } from './config/dbConfig';

const PORT = serverConfig.PORT || '3000';

const startAndSetupServer = () => {
  const app: Express = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    await mongoConnect();
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
  });
};

startAndSetupServer();
