import { User } from '../models/User';
import { CrudRepository } from './crud.repository';
import { IUser, UserInterface } from '../models/interfaces/user.interface';

export class UserRepository extends CrudRepository<UserInterface, IUser> {
  constructor() {
    super(User);
  }
}
