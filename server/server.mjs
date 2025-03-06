// $ npm init -y  // create package.json file
import express from 'express'; // $ npm install express
import { createServer } from 'http';
import { Server } from "socket.io" // $ npm install socket.io

const PORT = 3000;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {/* options */});



io.on('connection', (socket) => {
    // socket represents the connection to the client
    console.log('A user connected with ID:', socket.id);
    const event = 'welcome';
    const data = 'Welcome to the server!';
    socket.emit(event, data);

    socket.on('hello', (data) => {
        console.log('Client says:', data);
    });

    socket.on('submit', (data) => {
        console.log('Client submitted:', data);
        io.emit('server-message', data);
    });
});


// Serve static files in Express
import path from 'path';
app.use(express.static(path.join(process.cwd(), '../public')));

httpServer.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT);
});




// Express handles HTTP requests/responses. It creates a server.
// Socket.io handles real-time bidirectional communication.
