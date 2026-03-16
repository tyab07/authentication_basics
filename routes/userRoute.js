import { registerUser } from '../controller/userController.js';
import express from 'express';
import { getMe } from '../controller/userController.js';
import { refreshToken } from '../controller/userController.js';
import { logout } from '../controller/userController.js';
import { loginUser } from '../controller/userController.js';
const userRouter = express.Router();

userRouter.post('/register', registerUser);


userRouter.get('/get-me',getMe);


userRouter.get('/refresh-token',refreshToken)

userRouter.get('/logout',logout);

userRouter.post('/login',loginUser);
export default userRouter;