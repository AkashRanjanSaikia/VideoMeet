import express from "express";
import {createServer} from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./src/routes/user.routes.js";
import { connectToSocket } from "./src/controllers/socketManager.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port" , (process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb" ,extended:true }));

app.use("/api/v1/users",userRoutes);



app.get("/" ,(req,res)=>{
    res.json("Welcome Akash");
})

const start = async()=>{
    const connectDb = await mongoose.connect();
    console.log("MongoDB is connected");
    server.listen(app.get("port"),()=>{

        console.log("PORT IS LISTENING ");
    })
}
start();
