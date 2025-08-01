import * as grpc from '@grpc/grpc-js';
import {sendEmail} from "../send.email";
import {socketConnection} from "../socket";
import {orderStatuses, notificationTypes} from "../constants";
import NotificationModel from "../models/notification.model";
import {sendUnaryData, ServerUnaryCall} from "@grpc/grpc-js";
import {OrderStatusRequest} from "../generated/notificationPackage/OrderStatusRequest";
import {NotificationResponse} from "../generated/notificationPackage/NotificationResponse";
import {WelcomeRequest} from "../generated/notificationPackage/WelcomeRequest";
import {generateOrderTemplate} from "../emailTemplates/order.template";
import {generateWelcomeEmail} from "../emailTemplates/welcome.template";

const NotificationHandler: {
  NotifyOrderStatus: (call: ServerUnaryCall<OrderStatusRequest, NotificationResponse>, callback: sendUnaryData<NotificationResponse>) => Promise<void>;
  NotifyWelcome: (call: ServerUnaryCall<WelcomeRequest, NotificationResponse>, callback: sendUnaryData<NotificationResponse>) => Promise<void>
} = {
  NotifyOrderStatus: async (call, callback) => {
    const { userId, email, status, firstName, lastName, orderId } = call.request;
    if (!userId || !email || !status || !firstName || !lastName || !orderId) {
      return callback({
        code: grpc.status.INVALID_ARGUMENT,
        message: 'Missing required fields'
      });
    }

    const type = status === orderStatuses.CANCELLED ? notificationTypes.ORDER_CANCELLED : notificationTypes.ORDER_COMPLETED;
    const message = status === orderStatuses.CANCELLED
    ? 'Your order has been cancelled.' : 'Your order has been completed.';

    try {
      await NotificationModel.create({ userId, type, message });
      const html = generateOrderTemplate(`${firstName} ${lastName}`, orderId, status);

      const [unreadNotificationsCount, notifications] = await Promise.all([
        NotificationModel.countDocuments({ userId, isRead: false }),
        NotificationModel.find({ userId }).sort({ createdAt: -1 }),
      ]);

      socketConnection.io?.emit('unread-notifications', { userId, count: unreadNotificationsCount });
      socketConnection.io?.emit('notifications', notifications);

      await sendEmail(email, `Order ${status}`, html);

      callback(null, { success: true });
    } catch (error) {
      console.error('Error in NotifyOrderStatus:', error);
      return callback({
        code: grpc.status.INTERNAL,
        message: 'Internal server error'
      });
    }
  },

  NotifyWelcome: async (call, callback) => {
    const { userId, email, firstName, lastName } = call.request;
    const type = notificationTypes.WELCOME;
    const message = 'Welcome to our service! We are glad to have you with us.';

    if (!userId || !email || !firstName || !lastName) {
      return callback({
        code: grpc.status.INVALID_ARGUMENT,
        message: 'Missing required fields'
      });
    }

    try {
      await NotificationModel.create({ userId, type, message });

      const [unreadNotificationsCount, notifications] = await Promise.all([
        NotificationModel.countDocuments({ userId, isRead: false }),
        NotificationModel.find({ userId }).sort({ createdAt: -1 }),
      ])

      socketConnection.io?.emit('unread-notifications', { userId, count: unreadNotificationsCount });
      socketConnection.io?.emit('notifications', notifications);

      const html = generateWelcomeEmail(`${firstName} ${lastName}`);
      await sendEmail(email, 'Welcome!', html);

      callback(null, { success: true });
    } catch (error) {
      console.error('Error in NotifyWelcomeEmail:', error);
      return callback({
        code: grpc.status.INTERNAL,
        message: 'Internal server error'
      });
    }
  },
}

export default NotificationHandler;