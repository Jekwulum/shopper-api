import {NextFunction, Request, Response} from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

import UserModel, {IUser} from '../models/user.model';
import {notifyWelcome} from "../grpc/notification.client";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in environment variables');
}

const AuthController = {
  generateToken: (userId: string) => {
    const token = jwt.sign({id: userId}, JWT_SECRET, {expiresIn: '30d'});
    return token;
  },

  authenticate: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({message: 'Unauthorized'});
      return;
    }

    try {
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, JWT_SECRET) as { id: string };

      req.user = await UserModel.findById(decoded.id).select('-password') as IUser | null;
      next();
    } catch (error) {
      console.error('Error in authenticate:', error);
      res.status(401).json({message: 'Invalid token'});
    }
  },

  register: async (req: Request, res: Response): Promise<void> => {
    try {
      const {email, password, firstName, lastName} = req.body;

      if (!email || !password || !firstName || !lastName) {
        res.status(400).json({message: 'All fields are required'});
        return;
      }

      const existingUser = await UserModel.findOne({email});
      if (existingUser) {
        res.status(400).json({message: 'User already exists'});
        return;
      }

      const newUser = new UserModel(req.body) as IUser;
      await newUser.save();
      // don't await the notification to avoid blocking the response
      notifyWelcome({ userId: newUser._id.toString(), email: newUser.email, firstName: newUser.firstName, lastName: newUser.lastName });

      const token = AuthController.generateToken(newUser._id.toString());

      res.status(201).json({
        message: 'User registered successfully',
        token,
        user: {
          id: newUser._id,
          email: newUser.email,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
        },
      });
    } catch (error) {
      console.error('Error in register:', error);
      res.status(500).json({message: 'Internal server error'});
    }
  },

  login: async (req: Request, res: Response): Promise<void> => {
    try {
      const {email, password} = req.body;

      if (!email || !password) {
        res.status(400).json({message: 'Email and password are required'});
        return;
      }

      const user = await UserModel.findOne({email}) as IUser;
      if (!user || !(await user.validatePassword(password))) {
        res.status(401).json({message: 'Invalid credentials'});
        return;
      }

      const token = AuthController.generateToken(user._id.toString());

      res.status(200).json({
        message: 'Login successful',
        token,
        user: {
          id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        },
      });
    } catch (error) {
      console.error('Error in login:', error);
      res.status(500).json({message: 'Internal server error'});
    }
  },

  changePassword: async (req: Request, res: Response): Promise<void> => {
    try {
      const {userId} = req.params;
      const {currentPassword, newPassword} = req.body;

      if (!currentPassword || !newPassword) {
        res.status(400).json({message: 'Current and new passwords are required'});
        return;
      }

      const user = await UserModel.findById(userId) as IUser;
      if (!user || !(await user.validatePassword(currentPassword))) {
        res.status(401).json({message: 'Invalid current password'});
        return;
      }

      user.password = newPassword;
      await user.save();

      res.status(200).json({message: 'Password updated successfully'});
    } catch (error) {
      console.error('Error in updatePassword:', error);
      res.status(500).json({message: 'Internal server error'});
    }
  },
};

export default AuthController;