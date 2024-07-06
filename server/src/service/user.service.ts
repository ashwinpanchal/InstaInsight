import { FilterQuery } from 'mongoose';

import { UserRepository } from '../repository/user.repository';
import { UserInterface, IUser } from '../models/interfaces/user.interface';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(userData: UserInterface): Promise<IUser> {
    try {
      const newUser = await this.userRepository.create(userData);
      return newUser;
    } catch (error) {
      console.error('Error creating user at service layer:', error);
      throw error;
    }
  }

  async getAllUsers(filter: FilterQuery<IUser> = {}): Promise<IUser[]> {
    try {
      const users = await this.userRepository.getAll(filter);
      return users;
    } catch (error) {
      console.error('Error fetching users at service layer:', error);
      throw error;
    }
  }

  async getUserById(id: string): Promise<IUser | null> {
    try {
      const user = await this.userRepository.getById(id);
      return user;
    } catch (error) {
      console.error('Error fetching user by ID at service layer:', error);
      throw error;
    }
  }

  async updateUserById(
    id: string,
    updatedData: Partial<UserInterface>
  ): Promise<IUser | null> {
    try {
      const updatedUser = await this.userRepository.updateById(id, updatedData);
      return updatedUser;
    } catch (error) {
      console.error('Error updating user by ID at service layer:', error);
      throw error;
    }
  }

  async deleteUserById(id: string): Promise<IUser | null> {
    try {
      const deletedUser = await this.userRepository.deleteById(id);
      return deletedUser;
    } catch (error) {
      console.error('Error deleting user by ID at service layer:', error);
      throw error;
    }
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    try {
      const user = await this.userRepository.getAll({ email: email });
      if (user[0]) {
        return user[0];
      }
      return null;
    } catch (error) {
      console.error('Error fetching user by email at service layer:', error);
      throw error;
    }
  }
}
