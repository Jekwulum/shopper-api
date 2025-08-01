import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import {ProtoGrpcType} from "./generated/notification";
import NotificationHandler from "./handlers/notification.handler";

const GRPC_PORT = process.env.GRPC_PORT || 50053;
const PROTO_PATH = path.resolve(__dirname, "../proto/notification/notification.proto");

const notificationPackageDef = protoLoader.loadSync(PROTO_PATH);
const grpcObj = grpc.loadPackageDefinition(notificationPackageDef) as unknown as ProtoGrpcType;
const notificationPackage = grpcObj.notificationPackage;

export function startGrpcServer() {
  const server = new grpc.Server();
  server.addService(notificationPackage.NotificationService.service, NotificationHandler);

  server.bindAsync(`0.0.0.0:${GRPC_PORT}`, grpc.ServerCredentials.createInsecure(), (error, port) => {
    if (error) {
      console.error(`[Notification-service]: Failed to bind gRPC server: ${error.message}`);
      return;
    }
    console.log(`[Notification-service]: gRPC server is running on port ${port} ✅`);
  });
}
