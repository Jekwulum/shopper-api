import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import {startGrpcServer} from "./grpc.server";

import router from "./routes";

dotenv.config();

const PORT: number = 5002;
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'Order Service is running ✅' });
});

app.use(router);

app.listen(PORT, () => {
  mongoose.connect(process.env.MONGO_URI as string)
    .then(() => console.log('[Order-service]: Connected to MongoDB successfully ✅'))
    .catch((err) => console.error('[Order-service]: Failed to connect to MongoDB: ', err));
  startGrpcServer();
  console.log(`Order Service is running on port ${PORT} ✅`);
});