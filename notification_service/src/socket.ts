import { Server } from 'socket.io';

export const initializeSocket = (io: Server) => {
    io.on('connection', (socket) => {
        console.log('A user connected:', socket.id);

        // Handle disconnection
        socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
        });
    });

    console.log('Socket.io initialized');
};