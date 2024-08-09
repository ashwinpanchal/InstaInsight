import { Router } from 'express';
import { AuthController } from '../../controller/auth.controller';
import { AuthMiddleware } from '../../middlewares/auth.middleware';
import { SpaceController } from '../../controller/space.controller';

export const v1Router = Router();

v1Router.post('/signup', AuthController.registerUser);
v1Router.post('/login', AuthController.loginUser);
v1Router.get(
  '/profile',
  AuthMiddleware.authenticateMe,
  AuthController.authenticateProfile
);

v1Router.post(
  '/spaces',
  AuthMiddleware.authenticateMe,
  SpaceController.createSpace
);
