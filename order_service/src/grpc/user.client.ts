import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from "../generated/user";

const PROTO_PATH = path.resolve(__dirname, '../../proto/user/user.proto');
const userPackageDefinition = protoLoader.loadSync(PROTO_PATH)
const userGrpcObject = (grpc.loadPackageDefinition(userPackageDefinition) as unknown) as ProtoGrpcType;

const userClient = new userGrpcObject.userPackage.UserService(`user_service:50054`, grpc.credentials.createInsecure());

export function getUser(userId: string): Promise<any> {
  return new Promise((resolve, reject) => {
    userClient.GetUser({ id: userId }, (err, response) => {
      if (err) {
        console.error("Error fetching user:", err);
        return reject(err);
      } else if (!response || !response.user) {
        console.error("User not found or invalid response:", response);
        return reject(new Error("User not found"));
      }
      resolve(response.user);
    });
  });
}