import express from "express";
import userRouter from "./usersRoute.js";
import productRouter from "./productRoute.js";
import authRouter from "./authRouter.js";

const router = express.Router();
router.use('/users',userRouter);
router.use('/product',productRouter);
router.use('/auth',authRouter);
export default router;