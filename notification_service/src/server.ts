import express, {Express, Request, Response} from 'express';
import {Server} from "socket.io";
import http from 'http';
import morgan from "morgan";
import cors from "cors";

import {initializeSocket} from "./socket";

const PORT: number = 5003;
const app: Express = express();
const server: http.Server = http.createServer(app);
const io = new Server(server, {cors: {origin: '*'}});
initializeSocket(io);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(cors());


app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({status: 'Notification Service is running ✅'});
});

server.listen(PORT, () => {
    console.log(`Notification Service is running on port ${PORT} ✅`);
});