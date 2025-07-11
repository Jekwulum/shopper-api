import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import {ProtoGrpcType} from './generated/user';
import UserHandler from "./handlers/user.handler";

const GRPC_PORT = process.env.GRPC_PORT || '50054';
const PROTO_FILE = '../proto/user/user.proto';

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj = grpc.loadPackageDefinition(packageDef) as unknown as ProtoGrpcType;
const userPackage = grpcObj.userPackage;

export function startGrpcServer() {
  const server = new grpc.Server();
  server.addService(userPackage.UserService.service, UserHandler);

  server.bindAsync(`0.0.0.0:${GRPC_PORT}`, grpc.ServerCredentials.createInsecure(), (error, port) => {
    if (error) {
      console.error(`[User-service]: Failed to bind gRPC server: ${error.message}`);
      return;
    }
    console.log(`[User-service]: gRPC server is running on port ${port} ✅`);
  });
}
