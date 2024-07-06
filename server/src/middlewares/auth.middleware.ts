import { Request, Response, NextFunction } from 'express';
import passport from 'passport';

import passportConfig from '../config/passport.config';
import { IUser } from '../models/interfaces/user.interface';

passportConfig(passport);

const authenticateMe = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate(
    'jwt',
    { session: false },
    (err: Error | null, user: IUser | null, info?: { message: string }) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'Internal Server Error',
        });
      }

      if (!user) {
        return res.status(401).json({
          success: false,
          message: info?.message || 'Unauthorized',
        });
      }

      req.user = user;

      next();
    }
  )(req, res, next);
};

export const AuthMiddleware = {
  authenticateMe,
};
