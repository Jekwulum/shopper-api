import {Request, Response} from 'express';
import NotificationModel from "../models/notification.model";
import {asyncHandler} from "../auth";

const NotificationController = {
  GetNotificationsSocket: async (userId: string) => {
    try {
      const notifications = await NotificationModel.find({ userId }).sort({createdAt: -1});
      return notifications;
    } catch (error) {
      console.error('Error fetching notifications:', error);
      throw new Error('Failed to fetch notifications');
    }
  },

  GetNotificationsREST: asyncHandler(async (req: Request, res: Response) => {
    try {
      const userId = req.user?.id;
      const notifications = await NotificationModel.find({ userId }).sort({createdAt: -1});
      return res.status(200).json({status: 'SUCCESS', data: notifications, message: 'Notifications fetched successfully'});
    } catch (error) {
      console.error('Error fetching notifications:', error);
      return res.status(500).json({status: 'FAILED', message: 'Failed to fetch notifications'});
    }
  }),
};

export default NotificationController;