import {Request, Response, NextFunction} from "express";
import {verifyToken} from "./grpc/auth.client";

export const asyncHandler = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => (req: Request, res: Response, next: NextFunction) => {
  fn(req, res, next).catch(next);
};

export const authenticate = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

    if (!token) {
      return res.status(401).json({status: 'FAILED', message: 'Unauthorized'});
    }

    try {
      const user = await verifyToken(token);
      req.user = user;
      next();
    } catch (error) {
      console.error('Token verification failed:', error);
      return res.status(401).json({status: 'FAILED', message: 'Invalid token'});
    }
  }
);