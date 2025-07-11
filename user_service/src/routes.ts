import {Router, RequestHandler, NextFunction} from "express";
import AuthController from "./controllers/auth.controller";

const router = Router();
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/change-password', AuthController.authenticate, AuthController.changePassword);

export default router;