// Original file: proto/notification/notification.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { NotificationResponse as _notificationPackage_NotificationResponse, NotificationResponse__Output as _notificationPackage_NotificationResponse__Output } from '../notificationPackage/NotificationResponse';
import type { OrderStatusRequest as _notificationPackage_OrderStatusRequest, OrderStatusRequest__Output as _notificationPackage_OrderStatusRequest__Output } from '../notificationPackage/OrderStatusRequest';
import type { WelcomeRequest as _notificationPackage_WelcomeRequest, WelcomeRequest__Output as _notificationPackage_WelcomeRequest__Output } from '../notificationPackage/WelcomeRequest';

export interface NotificationServiceClient extends grpc.Client {
  NotifyOrderStatus(argument: _notificationPackage_OrderStatusRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  NotifyOrderStatus(argument: _notificationPackage_OrderStatusRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  NotifyOrderStatus(argument: _notificationPackage_OrderStatusRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  NotifyOrderStatus(argument: _notificationPackage_OrderStatusRequest, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  notifyOrderStatus(argument: _notificationPackage_OrderStatusRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  notifyOrderStatus(argument: _notificationPackage_OrderStatusRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  notifyOrderStatus(argument: _notificationPackage_OrderStatusRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  notifyOrderStatus(argument: _notificationPackage_OrderStatusRequest, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  
  NotifyWelcome(argument: _notificationPackage_WelcomeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  NotifyWelcome(argument: _notificationPackage_WelcomeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  NotifyWelcome(argument: _notificationPackage_WelcomeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  NotifyWelcome(argument: _notificationPackage_WelcomeRequest, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  notifyWelcome(argument: _notificationPackage_WelcomeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  notifyWelcome(argument: _notificationPackage_WelcomeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  notifyWelcome(argument: _notificationPackage_WelcomeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  notifyWelcome(argument: _notificationPackage_WelcomeRequest, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface NotificationServiceHandlers extends grpc.UntypedServiceImplementation {
  NotifyOrderStatus: grpc.handleUnaryCall<_notificationPackage_OrderStatusRequest__Output, _notificationPackage_NotificationResponse>;
  
  NotifyWelcome: grpc.handleUnaryCall<_notificationPackage_WelcomeRequest__Output, _notificationPackage_NotificationResponse>;
  
}

export interface NotificationServiceDefinition extends grpc.ServiceDefinition {
  NotifyOrderStatus: MethodDefinition<_notificationPackage_OrderStatusRequest, _notificationPackage_NotificationResponse, _notificationPackage_OrderStatusRequest__Output, _notificationPackage_NotificationResponse__Output>
  NotifyWelcome: MethodDefinition<_notificationPackage_WelcomeRequest, _notificationPackage_NotificationResponse, _notificationPackage_WelcomeRequest__Output, _notificationPackage_NotificationResponse__Output>
}
