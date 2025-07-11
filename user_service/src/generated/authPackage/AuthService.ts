// Original file: proto/user/auth.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { VerifyTokenRequest as _authPackage_VerifyTokenRequest, VerifyTokenRequest__Output as _authPackage_VerifyTokenRequest__Output } from '../authPackage/VerifyTokenRequest';
import type { VerifyTokenResponse as _authPackage_VerifyTokenResponse, VerifyTokenResponse__Output as _authPackage_VerifyTokenResponse__Output } from '../authPackage/VerifyTokenResponse';

export interface AuthServiceClient extends grpc.Client {
  VerifyToken(argument: _authPackage_VerifyTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authPackage_VerifyTokenResponse__Output>): grpc.ClientUnaryCall;
  VerifyToken(argument: _authPackage_VerifyTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authPackage_VerifyTokenResponse__Output>): grpc.ClientUnaryCall;
  VerifyToken(argument: _authPackage_VerifyTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authPackage_VerifyTokenResponse__Output>): grpc.ClientUnaryCall;
  VerifyToken(argument: _authPackage_VerifyTokenRequest, callback: grpc.requestCallback<_authPackage_VerifyTokenResponse__Output>): grpc.ClientUnaryCall;
  verifyToken(argument: _authPackage_VerifyTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authPackage_VerifyTokenResponse__Output>): grpc.ClientUnaryCall;
  verifyToken(argument: _authPackage_VerifyTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authPackage_VerifyTokenResponse__Output>): grpc.ClientUnaryCall;
  verifyToken(argument: _authPackage_VerifyTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authPackage_VerifyTokenResponse__Output>): grpc.ClientUnaryCall;
  verifyToken(argument: _authPackage_VerifyTokenRequest, callback: grpc.requestCallback<_authPackage_VerifyTokenResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  VerifyToken: grpc.handleUnaryCall<_authPackage_VerifyTokenRequest__Output, _authPackage_VerifyTokenResponse>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  VerifyToken: MethodDefinition<_authPackage_VerifyTokenRequest, _authPackage_VerifyTokenResponse, _authPackage_VerifyTokenRequest__Output, _authPackage_VerifyTokenResponse__Output>
}
