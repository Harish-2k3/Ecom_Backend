import express from "express";
import { Register } from "../controllers/Auth/registerController.js";
import { login } from "../controllers/Auth/loginController.js";

const authRouter = express.Router();
authRouter.post('/apiRegister',Register)
authRouter.post('/apiLogin',login)

export default authRouter;