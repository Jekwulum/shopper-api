import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthServiceClient as _authPackage_AuthServiceClient, AuthServiceDefinition as _authPackage_AuthServiceDefinition } from './authPackage/AuthService';
import type { VerifyTokenRequest as _authPackage_VerifyTokenRequest, VerifyTokenRequest__Output as _authPackage_VerifyTokenRequest__Output } from './authPackage/VerifyTokenRequest';
import type { VerifyTokenResponse as _authPackage_VerifyTokenResponse, VerifyTokenResponse__Output as _authPackage_VerifyTokenResponse__Output } from './authPackage/VerifyTokenResponse';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from './google/protobuf/Timestamp';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  authPackage: {
    AuthService: SubtypeConstructor<typeof grpc.Client, _authPackage_AuthServiceClient> & { service: _authPackage_AuthServiceDefinition }
    VerifyTokenRequest: MessageTypeDefinition<_authPackage_VerifyTokenRequest, _authPackage_VerifyTokenRequest__Output>
    VerifyTokenResponse: MessageTypeDefinition<_authPackage_VerifyTokenResponse, _authPackage_VerifyTokenResponse__Output>
  }
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition<_google_protobuf_Timestamp, _google_protobuf_Timestamp__Output>
    }
  }
}

