import { Router } from "express";
import { authenticate } from "./auth";
import OrderController from "./controllers/order.controller";

const router = Router();

router.use(authenticate);

router.post('/orders', OrderController.createOrder);
router.get('/orders/:id', OrderController.getOrder);
router.get('/orders', OrderController.getOrders);
router.patch('/orders/:id/status', OrderController.updateOrderStatus);

export default router;