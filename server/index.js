import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import route from './routes/user.routes.js';
const app = express();
app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 7000;

const MONFGODB_URI = process.env.MONGODB_URI;

mongoose
        .connect(MONFGODB_URI)
        .then(() => {
            console.log("db is successfully connected");
            app.listen(PORT,() =>{
                console.log("server is running on port", PORT);
                
            });
            
        })
        .catch((error)=>{
            console.log("db connection error", error);
            
        })

app.use("/api", route);