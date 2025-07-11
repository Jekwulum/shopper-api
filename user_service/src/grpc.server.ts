import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import {ProtoGrpcType} from './generated/user';
import {ProtoGrpcType as AuthProtoGrpcType} from './generated/auth';

import AuthHandler from "./handlers/auth.handler";
import UserHandler from "./handlers/user.handler";

const GRPC_PORT = process.env.GRPC_PORT || '50054';
const PROTO_FILE = '../proto/user/user.proto';
const AUTH_PROTO_FILE = '../proto/user/auth.proto';

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj = grpc.loadPackageDefinition(packageDef) as unknown as ProtoGrpcType;
const userPackage = grpcObj.userPackage;

const authPackageDef = protoLoader.loadSync(path.resolve(__dirname, AUTH_PROTO_FILE));
const authGrpcObj = grpc.loadPackageDefinition(authPackageDef) as unknown as AuthProtoGrpcType;
const authPackage = authGrpcObj.authPackage;

export function startGrpcServer() {
  const server = new grpc.Server();
  server.addService(userPackage.UserService.service, UserHandler);
  server.addService(authPackage.AuthService.service, AuthHandler);

  server.bindAsync(`0.0.0.0:${GRPC_PORT}`, grpc.ServerCredentials.createInsecure(), (error, port) => {
    if (error) {
      console.error(`[User-service]: Failed to bind gRPC server: ${error.message}`);
      return;
    }
    console.log(`[User-service]: gRPC server is running on port ${port} ✅`);
  });
}
