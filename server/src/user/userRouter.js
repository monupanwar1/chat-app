import express from 'express';
import { login, register } from '../user/userController.js'; // Adjust the path as needed

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);

export default userRouter;
