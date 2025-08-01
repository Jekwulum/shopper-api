import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from './google/protobuf/Timestamp';
import type { DeleteUserRequest as _userPackage_DeleteUserRequest, DeleteUserRequest__Output as _userPackage_DeleteUserRequest__Output } from './userPackage/DeleteUserRequest';
import type { DeleteUserResponse as _userPackage_DeleteUserResponse, DeleteUserResponse__Output as _userPackage_DeleteUserResponse__Output } from './userPackage/DeleteUserResponse';
import type { GetUserRequest as _userPackage_GetUserRequest, GetUserRequest__Output as _userPackage_GetUserRequest__Output } from './userPackage/GetUserRequest';
import type { GetUserResponse as _userPackage_GetUserResponse, GetUserResponse__Output as _userPackage_GetUserResponse__Output } from './userPackage/GetUserResponse';
import type { ListUsersRequest as _userPackage_ListUsersRequest, ListUsersRequest__Output as _userPackage_ListUsersRequest__Output } from './userPackage/ListUsersRequest';
import type { ListUsersResponse as _userPackage_ListUsersResponse, ListUsersResponse__Output as _userPackage_ListUsersResponse__Output } from './userPackage/ListUsersResponse';
import type { UpdateUserRequest as _userPackage_UpdateUserRequest, UpdateUserRequest__Output as _userPackage_UpdateUserRequest__Output } from './userPackage/UpdateUserRequest';
import type { UpdateUserResponse as _userPackage_UpdateUserResponse, UpdateUserResponse__Output as _userPackage_UpdateUserResponse__Output } from './userPackage/UpdateUserResponse';
import type { User as _userPackage_User, User__Output as _userPackage_User__Output } from './userPackage/User';
import type { UserServiceClient as _userPackage_UserServiceClient, UserServiceDefinition as _userPackage_UserServiceDefinition } from './userPackage/UserService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition<_google_protobuf_Timestamp, _google_protobuf_Timestamp__Output>
    }
  }
  userPackage: {
    DeleteUserRequest: MessageTypeDefinition<_userPackage_DeleteUserRequest, _userPackage_DeleteUserRequest__Output>
    DeleteUserResponse: MessageTypeDefinition<_userPackage_DeleteUserResponse, _userPackage_DeleteUserResponse__Output>
    GetUserRequest: MessageTypeDefinition<_userPackage_GetUserRequest, _userPackage_GetUserRequest__Output>
    GetUserResponse: MessageTypeDefinition<_userPackage_GetUserResponse, _userPackage_GetUserResponse__Output>
    ListUsersRequest: MessageTypeDefinition<_userPackage_ListUsersRequest, _userPackage_ListUsersRequest__Output>
    ListUsersResponse: MessageTypeDefinition<_userPackage_ListUsersResponse, _userPackage_ListUsersResponse__Output>
    UpdateUserRequest: MessageTypeDefinition<_userPackage_UpdateUserRequest, _userPackage_UpdateUserRequest__Output>
    UpdateUserResponse: MessageTypeDefinition<_userPackage_UpdateUserResponse, _userPackage_UpdateUserResponse__Output>
    User: MessageTypeDefinition<_userPackage_User, _userPackage_User__Output>
    UserService: SubtypeConstructor<typeof grpc.Client, _userPackage_UserServiceClient> & { service: _userPackage_UserServiceDefinition }
  }
}

