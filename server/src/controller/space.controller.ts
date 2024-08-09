import { Request, Response } from 'express';

import { SpaceService } from '../service/space.service';
import { SpaceInterface } from '../models/interfaces/space.interface';

const spaceService = new SpaceService();

const createSpace = async (req: Request, res: Response) => {
  const { title, description, image, visibility, userId, accessCode } =
    req.body;
  const spaceData: SpaceInterface = {
    title,
    description,
    image,
    userId,
    visibility,
    accessCode,
  };
  try {
    const newSpace = await spaceService.createSpace(spaceData);
    return res.status(201).json({
      data: newSpace,
      success: true,
      message: 'Space is created successfully',
      error: '',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      data: '',
      success: false,
      message: 'Internal Server Error',
      error: error,
    });
  }
};

export const SpaceController = {
  createSpace,
};
