import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from "../generated/notification";
import {WelcomeRequest} from "../generated/notificationPackage/WelcomeRequest";

const PROTO_PATH = path.resolve(__dirname, '../../proto/notification/notification.proto');
const notificationPackageDefinition = protoLoader.loadSync(PROTO_PATH);
const notificationGrpcObject = (grpc.loadPackageDefinition(notificationPackageDefinition) as unknown) as ProtoGrpcType;

const notificationClient = new notificationGrpcObject.notificationPackage.NotificationService(`notification_service:50053`, grpc.credentials.createInsecure());

export function notifyWelcome(data: WelcomeRequest): Promise<any> {
  return new Promise((resolve, reject) => {
    notificationClient.NotifyWelcome(data, (error, response) => {
      if (error) {
        console.error("Error notifying welcome: ", error);
        return reject(error);
      }
      resolve(response);
    });
  });
}