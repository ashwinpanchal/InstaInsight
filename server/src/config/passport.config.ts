import { PassportStatic } from 'passport';
import {
  Strategy as JwtStrategy,
  ExtractJwt,
  StrategyOptions,
} from 'passport-jwt';

import serverConfig from './server.config';
import { UserService } from '../service/user.service';
import { IUser } from '../models/interfaces/user.interface';

const userService = new UserService();

export default function (passport: PassportStatic) {
  const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: serverConfig.JWT_TOKEN,
  };

  passport.use(
    'jwt',
    new JwtStrategy(opts, async (jwtPayload, done) => {
      try {
        if (jwtPayload.exp && Date.now() >= jwtPayload.exp * 1000) {
          return done(null, false, { message: 'Token expired' });
        }
        const user = await userService.getUserById(jwtPayload.id);
        if (user) return done(null, user as IUser);
        else return done(null, false);
      } catch (err) {
        return done(err, false);
      }
    })
  );
}
