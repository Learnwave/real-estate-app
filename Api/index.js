import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
mongoose.connect("mongodb://localhost:27017/real-estate-app").then(()=>{console.log("DB Connected Successfully")}).catch((err)=>{
    console.log();
    
})

const app = express();



app.listen(3000,()=>{
    console.log("Server is runing port 3000");
    
})
