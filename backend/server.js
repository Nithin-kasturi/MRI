import express from 'express'
import dotenv from 'dotenv';
import connectToMongoDB from './db/connectToMongoDB.js';
import userRouter from  './routes/userRoutes.js';
dotenv.config();
const app=express();
app.use(express.json());
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Connected to port ${PORT}`);
});
app.get('/',(req,res)=>{
    res.send("Hello server");
});
app.use('/api/users',userRouter);