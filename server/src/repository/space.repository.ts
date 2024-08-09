import { Space } from '../models/Space';
import { CrudRepository } from './crud.repository';
import { ISpace, SpaceInterface } from '../models/interfaces/space.interface';

export class SpaceRepository extends CrudRepository<SpaceInterface, ISpace> {
  constructor() {
    super(Space);
  }
}
