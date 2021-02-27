import { Server, Socket } from 'socket.io';
import { frontend_url } from '../index';

const enableSocket = (server: any) => {
    const io = new Server(server, {
        cors: {
            origin: frontend_url
        }
    });

    io.on('connection', (socket: Socket) => {
        console.log('connected');
    });
}

export default enableSocket;