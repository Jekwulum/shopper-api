import mongoose, { Schema, Document } from "mongoose";
import { orderStatuses } from '../constants';

interface OrderItem {
  productId: string;
  quantity: number;
  name?: string;
  price?: number;
}

export interface IOrder extends Document {
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  status: "pending" | "completed" | "cancelled";
  createdAt: Date;
  updatedAt: Date;
}

const schema = new Schema<IOrder>(
  {
    userId: { type: String, required: true },
    items: [{
      productId: { type: String, required: true },
      name: String,
      price: Number,
      quantity: { type: Number, default: 1 },
    }],
    status: { type: String, enum: Object.values(orderStatuses) }
  },
  { timestamps: true }
);

export const OrderModel = mongoose.model<IOrder>('Order', schema);