import * as grpc from '@grpc/grpc-js';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import UserModel from "../models/user.model";
import {AuthServiceHandlers} from "../generated/authPackage/AuthService";
import {toGrpcUser} from "./user.handler";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

const AuthHandler: AuthServiceHandlers = {
  VerifyToken: async (call, callback) => {
    const token = call.request.token;
    if (!token) {
      return callback({code: grpc.status.UNAUTHENTICATED, message: 'Token is required'});
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
      const user = await UserModel.findById(decoded.id).select('-password');
      if (!user) {
        return callback({code: grpc.status.UNAUTHENTICATED, message: 'Invalid token'});
      }

      callback(null, {...toGrpcUser(user)});
    } catch (error) {
      console.error('Error in VerifyToken:', error);
      return callback({code: grpc.status.INTERNAL, message: 'Internal server error'});
    }
  },
};

export default AuthHandler;