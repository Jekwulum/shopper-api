import {Request, Response} from "express";
import {OrderModel} from "../models/order.model";
import {getProduct} from "../grpc/product.client";
import {getUser} from "../grpc/user.client";
import {orderStatuses} from "../constants";
import {asyncHandler} from "../auth";

type CartItem = {
  productId: string;
  quantity: number;
};

const OrderController = {
  createOrder: asyncHandler(async (req: Request, res: Response) => {
    try {
      const items: CartItem[] = req.body.items;
      const userId = String(req.user?.id);

      if (!items) {
        return res.status(400).json({message: "Missing required fields"});
      }

      // Fetch product details from gRPC service
      const productDetails = await Promise.all(
        items.map(async ({productId, quantity}) => {
          const product = await getProduct(productId);
          return {
            productId: product.id,
            quantity,
            name: product.name,
            price: product.price,
          };
        })
      );

      const order = await OrderModel.create({userId, items: productDetails, status: orderStatuses.PENDING});
      res.status(201).json({status: 'SUCCESS', data: order});
    } catch (error) {
      console.error("Error creating order:", error);
      return res.status(500).json({message: "Internal server error"});
    }
  }),

  getOrder: asyncHandler(async (req: Request, res: Response) => {
    try {
      const {id} = req.params;
      const order = await OrderModel.findOne({_id: id}).lean();

      if (!order) {
        return res.status(404).json({status: 'FAILED', message: "Order not found"});
      }

      // fetch user data from user-service using order.userId
      const user = await getUser(order.userId);
      const { createdAt, updatedAt, ...userInfo } = user;
      const {userId, ...data} = order;

      const responseData = {...data, user: userInfo};
      return res.status(200).json({data: responseData, status: 'SUCCESS', message: 'Order retrieved successfully'});
    } catch (error) {
      console.error("Error fetching order:", error);
      return res.status(500).json({message: "Internal server error"});
    }
  }),

  getOrders: asyncHandler(async (req: Request, res: Response) => {
    try {
      const userId = String(req.user?.id);
      const orders = await OrderModel.find({userId});

      return res.status(200).json({data: orders, status: 'SUCCESS', message: 'Orders retrieved successfully'});
    } catch (error) {
      console.error("Error fetching orders:", error);
      return res.status(500).json({message: "Internal server error"});
    }
  }),

  updateOrderStatus: asyncHandler(async (req: Request, res: Response) => {
    try {
      const {id} = req.params;
      const {status} = req.body;

      if (!status || !Object.values(orderStatuses).includes(status)) {
        return res.status(400).json({status: 'FAILED', message: "Invalid or missing status"});
      }

      const order = await OrderModel.findOneAndUpdate(
        {_id: id, status: {$ne: orderStatuses.CANCELLED}},
        {status},
        {new: true}
      );

      if (!order) {
        return res.status(404).json({status: 'FAILED', message: "Order not found"});
      }

      return res.status(200).json({data: order, status: 'SUCCESS', message: 'Order status updated successfully'});
    } catch (error) {
      console.error("Error updating order status:", error);
      return res.status(500).json({message: "Internal server error"});
    }
  }),
};


export default OrderController;