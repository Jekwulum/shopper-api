import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { NotificationResponse as _notificationPackage_NotificationResponse, NotificationResponse__Output as _notificationPackage_NotificationResponse__Output } from './notificationPackage/NotificationResponse';
import type { NotificationServiceClient as _notificationPackage_NotificationServiceClient, NotificationServiceDefinition as _notificationPackage_NotificationServiceDefinition } from './notificationPackage/NotificationService';
import type { OrderStatusRequest as _notificationPackage_OrderStatusRequest, OrderStatusRequest__Output as _notificationPackage_OrderStatusRequest__Output } from './notificationPackage/OrderStatusRequest';
import type { WelcomeRequest as _notificationPackage_WelcomeRequest, WelcomeRequest__Output as _notificationPackage_WelcomeRequest__Output } from './notificationPackage/WelcomeRequest';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  notificationPackage: {
    NotificationResponse: MessageTypeDefinition<_notificationPackage_NotificationResponse, _notificationPackage_NotificationResponse__Output>
    NotificationService: SubtypeConstructor<typeof grpc.Client, _notificationPackage_NotificationServiceClient> & { service: _notificationPackage_NotificationServiceDefinition }
    OrderStatusRequest: MessageTypeDefinition<_notificationPackage_OrderStatusRequest, _notificationPackage_OrderStatusRequest__Output>
    WelcomeRequest: MessageTypeDefinition<_notificationPackage_WelcomeRequest, _notificationPackage_WelcomeRequest__Output>
  }
}

