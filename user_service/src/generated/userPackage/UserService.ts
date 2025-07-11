// Original file: proto/user/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteUserRequest as _userPackage_DeleteUserRequest, DeleteUserRequest__Output as _userPackage_DeleteUserRequest__Output } from '../userPackage/DeleteUserRequest';
import type { DeleteUserResponse as _userPackage_DeleteUserResponse, DeleteUserResponse__Output as _userPackage_DeleteUserResponse__Output } from '../userPackage/DeleteUserResponse';
import type { GetUserRequest as _userPackage_GetUserRequest, GetUserRequest__Output as _userPackage_GetUserRequest__Output } from '../userPackage/GetUserRequest';
import type { GetUserResponse as _userPackage_GetUserResponse, GetUserResponse__Output as _userPackage_GetUserResponse__Output } from '../userPackage/GetUserResponse';
import type { ListUsersRequest as _userPackage_ListUsersRequest, ListUsersRequest__Output as _userPackage_ListUsersRequest__Output } from '../userPackage/ListUsersRequest';
import type { ListUsersResponse as _userPackage_ListUsersResponse, ListUsersResponse__Output as _userPackage_ListUsersResponse__Output } from '../userPackage/ListUsersResponse';
import type { UpdateUserRequest as _userPackage_UpdateUserRequest, UpdateUserRequest__Output as _userPackage_UpdateUserRequest__Output } from '../userPackage/UpdateUserRequest';
import type { UpdateUserResponse as _userPackage_UpdateUserResponse, UpdateUserResponse__Output as _userPackage_UpdateUserResponse__Output } from '../userPackage/UpdateUserResponse';

export interface UserServiceClient extends grpc.Client {
  DeleteUser(argument: _userPackage_DeleteUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _userPackage_DeleteUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _userPackage_DeleteUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _userPackage_DeleteUserRequest, callback: grpc.requestCallback<_userPackage_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_DeleteUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_DeleteUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_DeleteUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_DeleteUserRequest, callback: grpc.requestCallback<_userPackage_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  
  GetUser(argument: _userPackage_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _userPackage_GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _userPackage_GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _userPackage_GetUserRequest, callback: grpc.requestCallback<_userPackage_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userPackage_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userPackage_GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userPackage_GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userPackage_GetUserRequest, callback: grpc.requestCallback<_userPackage_GetUserResponse__Output>): grpc.ClientUnaryCall;
  
  ListUsers(argument: _userPackage_ListUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  ListUsers(argument: _userPackage_ListUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  ListUsers(argument: _userPackage_ListUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  ListUsers(argument: _userPackage_ListUsersRequest, callback: grpc.requestCallback<_userPackage_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _userPackage_ListUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _userPackage_ListUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _userPackage_ListUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _userPackage_ListUsersRequest, callback: grpc.requestCallback<_userPackage_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateUser(argument: _userPackage_UpdateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UpdateUserResponse__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _userPackage_UpdateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_UpdateUserResponse__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _userPackage_UpdateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UpdateUserResponse__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _userPackage_UpdateUserRequest, callback: grpc.requestCallback<_userPackage_UpdateUserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _userPackage_UpdateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UpdateUserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _userPackage_UpdateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_UpdateUserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _userPackage_UpdateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UpdateUserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _userPackage_UpdateUserRequest, callback: grpc.requestCallback<_userPackage_UpdateUserResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  DeleteUser: grpc.handleUnaryCall<_userPackage_DeleteUserRequest__Output, _userPackage_DeleteUserResponse>;
  
  GetUser: grpc.handleUnaryCall<_userPackage_GetUserRequest__Output, _userPackage_GetUserResponse>;
  
  ListUsers: grpc.handleUnaryCall<_userPackage_ListUsersRequest__Output, _userPackage_ListUsersResponse>;
  
  UpdateUser: grpc.handleUnaryCall<_userPackage_UpdateUserRequest__Output, _userPackage_UpdateUserResponse>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  DeleteUser: MethodDefinition<_userPackage_DeleteUserRequest, _userPackage_DeleteUserResponse, _userPackage_DeleteUserRequest__Output, _userPackage_DeleteUserResponse__Output>
  GetUser: MethodDefinition<_userPackage_GetUserRequest, _userPackage_GetUserResponse, _userPackage_GetUserRequest__Output, _userPackage_GetUserResponse__Output>
  ListUsers: MethodDefinition<_userPackage_ListUsersRequest, _userPackage_ListUsersResponse, _userPackage_ListUsersRequest__Output, _userPackage_ListUsersResponse__Output>
  UpdateUser: MethodDefinition<_userPackage_UpdateUserRequest, _userPackage_UpdateUserResponse, _userPackage_UpdateUserRequest__Output, _userPackage_UpdateUserResponse__Output>
}
