import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../generated/auth';

const PROTO_PATH = path.resolve(__dirname, '../../proto/user/auth.proto');
const authPackageDefinition = protoLoader.loadSync(PROTO_PATH);
const authGrpcObject = (grpc.loadPackageDefinition(authPackageDefinition) as unknown) as ProtoGrpcType;

const authClient = new authGrpcObject.authPackage.AuthService(`user_service:50054`, grpc.credentials.createInsecure());

export function verifyToken(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
        authClient.verifyToken({ token }, (error, response) => {
            if (error) {
                console.error('Error verifying token:', error);
                return reject(error);
            }

            resolve(response);
        });
    });
}