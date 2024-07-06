import { Document, Model, UpdateQuery } from 'mongoose';
import { FilterQuery } from 'mongoose';

export class CrudRepository<T, U extends Document & T> {
  constructor(public model: Model<U>) {}

  async create(data: T): Promise<U> {
    try {
      const newItem = await this.model.create(data);
      return newItem;
    } catch (error) {
      console.error('Error creating item:', error);
      throw error;
    }
  }

  async getAll(filter: FilterQuery<U> = {}): Promise<U[]> {
    try {
      const items = await this.model.find(filter);
      return items;
    } catch (error) {
      console.error('Error fetching items:', error);
      throw error;
    }
  }

  async getById(id: string): Promise<U | null> {
    try {
      const item = await this.model.findById(id);
      return item;
    } catch (error) {
      console.error('Error fetching item by ID:', error);
      throw error;
    }
  }

  async updateById(id: string, updatedData: Partial<T>): Promise<U | null> {
    try {
      const updatedItem = await this.model.findByIdAndUpdate(
        id,
        updatedData as UpdateQuery<U>,
        { new: true }
      );
      return updatedItem;
    } catch (error) {
      console.error('Error updating item by ID:', error);
      throw error;
    }
  }

  async deleteById(id: string): Promise<U | null> {
    try {
      const deletedItem = await this.model.findByIdAndDelete(id);
      return deletedItem;
    } catch (error) {
      console.error('Error deleting item by ID:', error);
      throw error;
    }
  }
}
