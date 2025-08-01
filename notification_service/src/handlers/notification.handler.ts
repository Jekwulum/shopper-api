import * as grpc from '@grpc/grpc-js';
import {NotificationServiceHandlers} from "../generated/notificationPackage/NotificationService";
import {sendEmail} from "../send.email";
import {orderStatuses, notificationTypes} from "../constants";
import NotificationModel from "../models/notification.model";
import {sendUnaryData, ServerUnaryCall} from "@grpc/grpc-js";
import {OrderStatusRequest} from "../generated/notificationPackage/OrderStatusRequest";
import {NotificationResponse} from "../generated/notificationPackage/NotificationResponse";
import {WelcomeRequest} from "../generated/notificationPackage/WelcomeRequest";

const NotificationHandler: {
  NotifyOrderStatus: (call: ServerUnaryCall<OrderStatusRequest, NotificationResponse>, callback: sendUnaryData<NotificationResponse>) => Promise<void>;
  NotifyWelcomeEmail: (call: ServerUnaryCall<WelcomeRequest, NotificationResponse>, callback: sendUnaryData<NotificationResponse>) => Promise<void>
} = {
  NotifyOrderStatus: async (call, callback) => {
    const { userId, email, status } = call.request;
    if (!userId || !email || !status) {
      return callback({
        code: grpc.status.INVALID_ARGUMENT,
        message: 'Missing required fields'
      });
    }

    const type = status === orderStatuses.CANCELLED ? notificationTypes.ORDER_CANCELLED : notificationTypes.ORDER_COMPLETED;
    const message = status === orderStatuses.CANCELLED
    ? 'Your order has been cancelled.' : 'Your order has been completed.';

    try {
      const notif = await NotificationModel.create({ userId, type, message });
      const html = `<p>${message}</p>`;
      await sendEmail(email, `Order ${status}`, html);

      global.io.to(userId).emit('notification', notif);

      callback(null, { success: true });
    } catch (error) {
      console.error('Error in NotifyOrderStatus:', error);
      return callback({
        code: grpc.status.INTERNAL,
        message: 'Internal server error'
      });
    }
  },

  NotifyWelcomeEmail: async (call, callback) => {
    const { userId, email } = call.request;
    const type = notificationTypes.WELCOME;
    const message = 'Welcome to our service! We are glad to have you with us.';

    if (!userId || !email) {
      return callback({
        code: grpc.status.INVALID_ARGUMENT,
        message: 'Missing required fields'
      });
    }

    try {
      const notif = await NotificationModel.create({ userId, type, message });
      const html = `<p>${message}</p>`;
      await sendEmail(email, 'Welcome!', html);

      global.io.to(userId).emit('notification', notif);

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