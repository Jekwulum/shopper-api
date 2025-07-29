import express, {Express, Request, Response} from 'express';
import mongoose from "mongoose";
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes';
import {startGrpcServer} from './grpc.server';

dotenv.config();

const PORT: number = 5004;
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors());

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({status: 'User service is running ✅'});
});

app.use(router);

app.listen(PORT, () => {
  mongoose.connect(process.env.MONGO_URI as string)
    .then(() => console.log('[User-service]: Connected to MongoDB successfully ✅'))
    .catch((err) => console.error('[User-service]: Failed to connect to MongoDB: ', err));
  startGrpcServer();
  console.log(`[User-service]: User service is running on port ${PORT} ✅`);
});