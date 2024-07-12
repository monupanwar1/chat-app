import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import connectdb from './src/config/connectDB.js';
import config from './src/config/config.js';
import userRouter from './src/user/userRouter.js';


// Load environment variables from .env file
dotenv.config();

// Initialize Express app and HTTP server
const app = express();
const server = createServer(app);

// Database connection
connectdb(config.DATABASE_URL);

// Middleware
app.use(cors());
app.use(express.json());

// User routes
app.use('/api/users', userRouter);

// Initialize Socket.io server with CORS settings
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

// Socket.io connection and message handling
io.on('connection', (socket) => {
    console.log("Client connected");

    socket.on("message", (message) => {
        console.log("Message received");
        io.emit("message", message);
    });

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

// Start the server
server.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});
