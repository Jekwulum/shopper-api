import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { NotificationServiceClient as _notificationPackage_NotificationServiceClient, NotificationServiceDefinition as _notificationPackage_NotificationServiceDefinition } from './notificationPackage/NotificationService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  notificationPackage: {
    NotificationResponse: MessageTypeDefinition
    NotificationService: SubtypeConstructor<typeof grpc.Client, _notificationPackage_NotificationServiceClient> & { service: _notificationPackage_NotificationServiceDefinition }
    OrderStatusRequest: MessageTypeDefinition
    WelcomeRequest: MessageTypeDefinition
  }
}

