// Original file: proto/product/product.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddProductRequest as _product_AddProductRequest, AddProductRequest__Output as _product_AddProductRequest__Output } from '../product/AddProductRequest';
import type { Empty as _product_Empty, Empty__Output as _product_Empty__Output } from '../product/Empty';
import type { GetProductRequest as _product_GetProductRequest, GetProductRequest__Output as _product_GetProductRequest__Output } from '../product/GetProductRequest';
import type { ProductListResponse as _product_ProductListResponse, ProductListResponse__Output as _product_ProductListResponse__Output } from '../product/ProductListResponse';
import type { ProductResponse as _product_ProductResponse, ProductResponse__Output as _product_ProductResponse__Output } from '../product/ProductResponse';
import type { UpdateProductRequest as _product_UpdateProductRequest, UpdateProductRequest__Output as _product_UpdateProductRequest__Output } from '../product/UpdateProductRequest';

export interface ProductServiceClient extends grpc.Client {
  AddProduct(argument: _product_AddProductRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_product_ProductResponse__Output>): grpc.ClientUnaryCall;
  AddProduct(argument: _product_AddProductRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_product_ProductResponse__Output>): grpc.ClientUnaryCall;
  AddProduct(argument: _product_AddProductRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_product_ProductResponse__Output>): grpc.ClientUnaryCall;
  AddProduct(argument: _product_AddProductRequest, callback: grpc.requestCallback<_product_ProductResponse__Output>): grpc.ClientUnaryCall;
  addProduct(argument: _product_AddProductRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_product_ProductResponse__Output>): grpc.ClientUnaryCall;
  addProduct(argument: _product_AddProductRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_product_ProductResponse__Output>): grpc.ClientUnaryCall;
  addProduct(argument: _product_AddProductRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_product_ProductResponse__Output>): grpc.ClientUnaryCall;
  addProduct(argument: _product_AddProductRequest, callback: grpc.requestCallback<_product_ProductResponse__Output>): grpc.ClientUnaryCall;
  
  GetProduct(argument: _product_GetProductRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_product_ProductResponse__Output>): grpc.ClientUnaryCall;
  GetProduct(argument: _product_GetProductRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_product_ProductResponse__Output>): grpc.ClientUnaryCall;
  GetProduct(argument: _product_GetProductRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_product_ProductResponse__Output>): grpc.ClientUnaryCall;
  GetProduct(argument: _product_GetProductRequest, callback: grpc.requestCallback<_product_ProductResponse__Output>): grpc.ClientUnaryCall;
  getProduct(argument: _product_GetProductRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_product_ProductResponse__Output>): grpc.ClientUnaryCall;
  getProduct(argument: _product_GetProductRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_product_ProductResponse__Output>): grpc.ClientUnaryCall;
  getProduct(argument: _product_GetProductRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_product_ProductResponse__Output>): grpc.ClientUnaryCall;
  getProduct(argument: _product_GetProductRequest, callback: grpc.requestCallback<_product_ProductResponse__Output>): grpc.ClientUnaryCall;
  
  ListProducts(argument: _product_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_product_ProductListResponse__Output>): grpc.ClientUnaryCall;
  ListProducts(argument: _product_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_product_ProductListResponse__Output>): grpc.ClientUnaryCall;
  ListProducts(argument: _product_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_product_ProductListResponse__Output>): grpc.ClientUnaryCall;
  ListProducts(argument: _product_Empty, callback: grpc.requestCallback<_product_ProductListResponse__Output>): grpc.ClientUnaryCall;
  listProducts(argument: _product_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_product_ProductListResponse__Output>): grpc.ClientUnaryCall;
  listProducts(argument: _product_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_product_ProductListResponse__Output>): grpc.ClientUnaryCall;
  listProducts(argument: _product_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_product_ProductListResponse__Output>): grpc.ClientUnaryCall;
  listProducts(argument: _product_Empty, callback: grpc.requestCallback<_product_ProductListResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateProduct(argument: _product_UpdateProductRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_product_ProductResponse__Output>): grpc.ClientUnaryCall;
  UpdateProduct(argument: _product_UpdateProductRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_product_ProductResponse__Output>): grpc.ClientUnaryCall;
  UpdateProduct(argument: _product_UpdateProductRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_product_ProductResponse__Output>): grpc.ClientUnaryCall;
  UpdateProduct(argument: _product_UpdateProductRequest, callback: grpc.requestCallback<_product_ProductResponse__Output>): grpc.ClientUnaryCall;
  updateProduct(argument: _product_UpdateProductRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_product_ProductResponse__Output>): grpc.ClientUnaryCall;
  updateProduct(argument: _product_UpdateProductRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_product_ProductResponse__Output>): grpc.ClientUnaryCall;
  updateProduct(argument: _product_UpdateProductRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_product_ProductResponse__Output>): grpc.ClientUnaryCall;
  updateProduct(argument: _product_UpdateProductRequest, callback: grpc.requestCallback<_product_ProductResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface ProductServiceHandlers extends grpc.UntypedServiceImplementation {
  AddProduct: grpc.handleUnaryCall<_product_AddProductRequest__Output, _product_ProductResponse>;
  
  GetProduct: grpc.handleUnaryCall<_product_GetProductRequest__Output, _product_ProductResponse>;
  
  ListProducts: grpc.handleUnaryCall<_product_Empty__Output, _product_ProductListResponse>;
  
  UpdateProduct: grpc.handleUnaryCall<_product_UpdateProductRequest__Output, _product_ProductResponse>;
  
}

export interface ProductServiceDefinition extends grpc.ServiceDefinition {
  AddProduct: MethodDefinition<_product_AddProductRequest, _product_ProductResponse, _product_AddProductRequest__Output, _product_ProductResponse__Output>
  GetProduct: MethodDefinition<_product_GetProductRequest, _product_ProductResponse, _product_GetProductRequest__Output, _product_ProductResponse__Output>
  ListProducts: MethodDefinition<_product_Empty, _product_ProductListResponse, _product_Empty__Output, _product_ProductListResponse__Output>
  UpdateProduct: MethodDefinition<_product_UpdateProductRequest, _product_ProductResponse, _product_UpdateProductRequest__Output, _product_ProductResponse__Output>
}
