import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { UserService } from '../service/user.service';
import {
  validateLoginInput,
  validateRegisterInput,
} from '../utils/validation.util';
import { UserInterface } from '../models/interfaces/user.interface';
import serverConfig from '../config/server.config';

const userService = new UserService();

const registerUser = async (req: Request, res: Response) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json({
      data: '',
      success: false,
      message: 'Invalid Inputs',
      error: errors,
    });
  }
  const { firstName, lastName, email, password, userType }: UserInterface =
    req.body;
  try {
    const user = await userService.getUserByEmail(email);
    if (user)
      return res.status(400).json({
        data: '',
        success: false,
        message: 'Email already exists',
        error: 'An account with same email already exists',
      });
    const newUser = await userService.createUser({
      firstName,
      lastName,
      email,
      password,
      userType,
    });

    const payload = { id: newUser.id, email: newUser.email };
    const token = jwt.sign(payload, serverConfig.JWT_TOKEN, {
      expiresIn: 3600,
    });

    res.status(201).json({
      data: { token: `${token}` },
      success: true,
      message: 'User Successfully Registered',
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

const loginUser = async (req: Request, res: Response) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json({
      data: '',
      success: false,
      message: 'Invalid Inputs',
      error: errors,
    });
  }

  const { email, password } = req.body;

  try {
    const user = await userService.getUserByEmail(email);

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({
        data: '',
        success: false,
        message: 'Invalid Credentials',
        error: 'Invalid email or password',
      });
    }

    const payload = { id: user.id, email: user.email };
    const token = jwt.sign(payload, serverConfig.JWT_TOKEN, {
      expiresIn: 3600,
    });

    res.json({
      data: { token: `${token}` },
      success: true,
      message: 'Successfully logged in',
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

const authenticateProfile = async (req: Request, res: Response) => {
  res.json({
    success: !!req.user,
    message: req.user ? 'Authentication Success' : 'Error in Authentication',
  });
};

export const AuthController = {
  registerUser,
  loginUser,
  authenticateProfile,
};
