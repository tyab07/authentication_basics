import express from 'express';
import morgan from 'morgan';
import dbConnect from '../database/mongo.js';
import userRoute from '../routes/userRoute.js';
import cookieParser from 'cookie-parser';
const app = express();
dbConnect(); 
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use('/users', userRoute);

 

export default app;