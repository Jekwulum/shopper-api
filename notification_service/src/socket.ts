import {Server as SocketIoServer, Socket} from 'socket.io';
import {DefaultEventsMap} from 'socket.io/dist/typed-events';
import {verifyToken} from "./grpc/auth.client";
import {VerifyTokenResponse} from "./generated/authPackage/VerifyTokenResponse";
import NotificationController from "./controllers/notification.controller";

interface CustomSocket extends Socket<DefaultEventsMap, DefaultEventsMap> {
  user?: VerifyTokenResponse;
}

class SocketConnection {
  io: SocketIoServer | null;
  connectedUsers: Record<string, any>;

  constructor(io: SocketIoServer | null) {
    this.io = io;
    this.connectedUsers = {};
  }
}

export const socketConnection = new SocketConnection(null);

const socketAuth = async (socket: CustomSocket, next: (err?: Error) => void) => {
  let token = socket.handshake.headers.authorization;
  if (!token) {
    token = socket.handshake.auth.token;
  }
  if (!token) {
    return next(new Error('Authentication error: No token provided'));
  }

  const user = await verifyToken(token!);
  if (!user) {
    return next(new Error('Authentication error: Invalid token'));
  }
  (socket as CustomSocket).user = user;

  next();
};


export const initializeSocket = (io: SocketIoServer) => {
  io.use(socketAuth);
  socketConnection.io = io;


  io.on('connection', async (socket: CustomSocket) => {
    const {user} = socket;
    if (!user) {
      console.error('User not authenticated');
      socket.disconnect();
      return;
    }

    const userId: string = user.id!;
    if (!socketConnection.connectedUsers[userId]) {
      socketConnection.connectedUsers[userId] = [];
    }
    socketConnection.connectedUsers[userId].push(socket);
    socketConnection.connectedUsers[userId] = [...new Set(socketConnection.connectedUsers[userId])];

    console.log(`User connected: ${userId}, Socket ID: ${socket.id} for ${user.firstName} ${user.lastName} ✅`);

    try {
      const notifications = await NotificationController.GetNotificationsSocket(userId);
      socket.emit('notifications', notifications);
    } catch (error) {
      console.error('Error emitting notifications:', error);
    }

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log(`User disconnected: ${userId}, Socket ID: ${socket.id} for ${user.firstName} ${user.lastName} ❌`);
    });
  });

  console.log('Socket.io initialized');
};