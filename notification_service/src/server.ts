import express, {Express, Request, Response} from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import {Server as SocketIoServer} from "socket.io";
import http from 'http';
import morgan from "morgan";
import cors from "cors";

import {initializeSocket} from "./socket";
import {startGrpcServer} from "./grpc.server";
import router from "./routes";

dotenv.config();

const PORT: number = 5003;
const app: Express = express();
const server: http.Server = http.createServer(app);

const io = new SocketIoServer(server, {cors: {origin: '*'}});
global.io = io;
initializeSocket(io);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(cors());

app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({status: 'Notification Service is running ✅'});
});

app.use(router);

server.listen(PORT, () => {
    mongoose.connect(process.env.MONGO_URI as string)
      .then(() => console.log('[Notification-service] Connected to MongoDB successfully ✅'))
      .catch((err) => console.error('[Notification-service] Failed to connect to MongoDB: ', err));
    startGrpcServer();
    console.log(`[Notification-service] is running on port ${PORT} ✅`);
});