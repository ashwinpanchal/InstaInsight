import { SpaceRepository } from '../repository/space.repository';
import { ISpace, SpaceInterface } from '../models/interfaces/space.interface';

export class SpaceService {
  private spaceRepository: SpaceRepository;

  constructor() {
    this.spaceRepository = new SpaceRepository();
  }

  async createSpace(spaceData: SpaceInterface): Promise<ISpace> {
    try {
      const newSpace = await this.spaceRepository.create(spaceData);
      return newSpace;
    } catch (error) {
      console.error('Error creating space at service layer:', error);
      throw error;
    }
  }

  async getSpaceById(id: string): Promise<ISpace | null> {
    try {
      const space = await this.spaceRepository.getById(id);
      return space;
    } catch (error) {
      console.error('Error fetching space by ID at service layer:', error);
      throw error;
    }
  }

  async getSpaceByUserId(id: string): Promise<ISpace[]> {
    try {
      const spaces = await this.spaceRepository.getAll({ userId: id });
      return spaces;
    } catch (error) {
      console.error('Error fetching space by user ID at service layer:', error);
      throw error;
    }
  }

  async deleteSpaceById(id: string): Promise<ISpace | null> {
    try {
      const deletedSpace = await this.spaceRepository.deleteById(id);
      return deletedSpace;
    } catch (error) {
      console.error('Error deleting space by ID at service layer:', error);
      throw error;
    }
  }

  async updateSpaceById(
    id: string,
    updatedData: Partial<SpaceInterface>
  ): Promise<ISpace | null> {
    try {
      const updatedSpace = await this.spaceRepository.updateById(
        id,
        updatedData
      );
      return updatedSpace;
    } catch (error) {
      console.error('Error updating space by ID at service layer:', error);
      throw error;
    }
  }
}
