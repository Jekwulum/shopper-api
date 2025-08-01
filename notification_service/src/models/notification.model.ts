import mongoose, {Schema, Document} from "mongoose";
import {notificationTypes} from "../constants";

export interface INotification extends Document {
  userId: string;
  type: 'ORDER_CANCELLED' | 'ORDER_COMPLETED' | 'WELCOME';
  message: string;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new Schema<INotification>(
  {
    userId: { type: String, required: true },
    type: {
      type: String,
      enum: Object.values(notificationTypes),
      required: true
    },
    message: { type: String, required: true },
    isRead: { type: Boolean, default: false }
  },
  { timestamps: true }
);

const NotificationModel = mongoose.model<INotification>('Notification', schema);
export default NotificationModel;