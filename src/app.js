import express from 'express';
import morgan from 'morgan';
import dbConnect from '../database/mongo.js';
import userRoute from '../routes/userRoute.js';
const app = express();
dbConnect(); 
app.use(express.json());
app.use(morgan('dev'));
app.use('/users', userRoute);
 

export default app;