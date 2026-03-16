import { registerUser } from '../controller/userController.js';
import express from 'express';
import { getMe } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);


userRouter.get('/get-me',getMe);

export default userRouter;