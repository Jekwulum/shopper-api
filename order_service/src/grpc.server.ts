import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import {ProtoGrpcType as AuthProtoGrpcType} from './generated/auth';
import {ProtoGrpcType as ProductProtoGrpcType} from './generated/product';

const GRPC_PORT = process.env.GRPC_PORT || 50052;
const AUTH_PROTO_FILE = '../proto/user/auth.proto';
const PRODUCT_PROTO_FILE = '../proto/product/product.proto';

const authPackageDef =protoLoader.loadSync(path.resolve(__dirname, AUTH_PROTO_FILE));
const authGrpcObj = grpc.loadPackageDefinition(authPackageDef) as unknown as AuthProtoGrpcType;
const authPackage = authGrpcObj.authPackage;

const productPackageDef = protoLoader.loadSync(path.resolve(__dirname, PRODUCT_PROTO_FILE));
const productGrpcObj = grpc.loadPackageDefinition(productPackageDef) as unknown as ProductProtoGrpcType;
const productPackage = productGrpcObj.product;

export function startGrpcServer() {
  const server = new grpc.Server();

  server.bindAsync(`0.0.0.0:${GRPC_PORT}`, grpc.ServerCredentials.createInsecure(), (error, port) => {
    if (error) {
      console.error(`[Order-service]: Failed to bind gRPC server: ${error.message}`);
      return;
    }
    console.log(`[Order-service]: gRPC server is running on port ${port} ✅`);
  });
}