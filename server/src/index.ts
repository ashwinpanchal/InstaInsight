import express, { Express } from 'express';

import serverConfig from './config/server.config';
import { mongoConnect } from './config/db.config';

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
