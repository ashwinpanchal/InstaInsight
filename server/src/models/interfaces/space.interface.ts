import { Document, Types } from 'mongoose';

export enum SpaceVisibility {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

export interface SpaceInterface {
  title: string;
  description?: string;
  image?: string;
  userId: Types.ObjectId;
  visibility?: SpaceVisibility;
  accessCode?: string;
}

export interface ISpace extends Document, SpaceInterface {
  responses: any[];
}
