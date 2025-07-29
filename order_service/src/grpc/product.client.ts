import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import {ProtoGrpcType} from "../generated/product";

const PROTO_PATH = path.resolve(__dirname, '../../proto/product/product.proto');
const productPackageDefinition = protoLoader.loadSync(PROTO_PATH);
const productGrpcObject = (grpc.loadPackageDefinition(productPackageDefinition) as unknown) as ProtoGrpcType;

const productClient = new productGrpcObject.product.ProductService(`product_service:50051`, grpc.credentials.createInsecure());

export function getProduct(productId: string): Promise<any> {
  return new Promise((resolve, reject) => {
    productClient.GetProduct({id: productId}, (err, response) => {
      if (err || !response?.product) return reject('Product not found');
      resolve(response.product);
    });
  });
}