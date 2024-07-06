import express from 'express';
import { createServer } from 'node:http';
import {Server} from "socket.io";
import cors from "cors";


const app= express();
const server =createServer(app);

const io =new Server(server,{
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    }

})

app.use(cors());


// socket io code

io.on('connection',(socket)=>{
    console.log("client connected");

    socket.on("message",(message)=>{
        console.log("message recived");
        io.emit("message",message);
    })
    socket.on("disconnected",()=>{
        console.log("client disconnected");
    })
})


const port =5000;
server.listen(port,()=>{
    console.log('server is running ')
});
