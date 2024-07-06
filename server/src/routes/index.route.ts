import { Router } from 'express';

import { v1Router } from './v1/v1.route';

export const appRouter = Router();

appRouter.use('/v1', v1Router);
