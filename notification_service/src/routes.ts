import { Router } from "express";
import {authenticate} from "./auth";
import NotificationController from "./controllers/notification.controller";

const router = Router();
router.use(authenticate)

router.get('/notifications', NotificationController.GetNotificationsREST);

export default router;