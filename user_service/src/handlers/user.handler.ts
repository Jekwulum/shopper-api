import * as grpc from '@grpc/grpc-js';
import {UserServiceHandlers} from '../generated/userPackage/UserService';
import {User as GrpcUser} from '../generated/userPackage/User';
import {Timestamp} from '../generated/google/protobuf/Timestamp';
import UserModel, {IUser} from "../models/user.model";

// convert a Mongoose user document to a gRPC User object
const toGrpcUser = (user: any): GrpcUser => {
  const toTimestamp = (date: Date): Timestamp => ({
    seconds: Math.floor(date.getTime() / 1000),
    nanos: (date.getTime() % 1000) * 1e6
  });

  return {
    id: user._id.toString(),
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    createdAt: toTimestamp(user.createdAt),
    updatedAt: toTimestamp(user.updatedAt)
  };
};

const UserHandler: UserServiceHandlers = {
  GetUser: async (call, callback) => {
    try {
      const user = await UserModel.findById(call.request.id);
      if (!user) {
        return callback({
          code: grpc.status.NOT_FOUND,
          message: 'User not found'
        });
      }

      callback(null, {user: toGrpcUser(user)});
    } catch (error) {
      console.error('Error in GetUser:', error);
      callback({code: grpc.status.INTERNAL, message: 'Internal server error'});
    }
  },

  ListUsers: async (call, callback) => {
    try {
      const users = await UserModel.find({}) as IUser[];
      const grpcUsers = users.map(toGrpcUser);
      callback(null, {users: grpcUsers});
    } catch (error) {
      console.error('Error in ListUsers:', error);
      callback({code: grpc.status.INTERNAL, message: 'Internal server error'});
    }
  },

  UpdateUser: async (call, callback) => {
    try {
      const userData = call.request;
      const updatedUser = await UserModel.findByIdAndUpdate(userData.id, userData, {new: true});
      if (!updatedUser) {
        return callback({code: grpc.status.NOT_FOUND, message: 'User not found'});
      }

      callback(null, {user: toGrpcUser(updatedUser)});
    } catch (error) {
      console.error('Error in UpdateUser:', error);
      callback({code: grpc.status.INTERNAL, message: 'Internal server error'});
    }
  },

  DeleteUser: async (call, callback) => {
    try {
      const result = await UserModel.findByIdAndDelete(call.request.id);
      const success = !!result;
      callback(null, {success});
    } catch (error) {
      console.log('Error in DeleteUser:', error);
      callback({code: grpc.status.INTERNAL, message: 'Internal server error'});
    }
  },
};

export default UserHandler;
