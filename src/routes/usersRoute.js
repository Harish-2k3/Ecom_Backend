import express from "express";
import { deleteMulUsers, deleteUser, getUser, getUsers, saveMulUsers, saveUser, updateMulUsers, updateUser } from "../controllers/usersController.js";

const userRouter = express.Router()


userRouter.get('/getusers',getUsers)
userRouter.post('/saveuser',saveUser)
userRouter.put('/updateuser',updateUser)
userRouter.delete('/deleteuser',deleteUser)

userRouter.get('/getuser',getUser)
userRouter.post('/savemuluser',saveMulUsers)
userRouter.put('/updatemuluser',updateMulUsers)
userRouter.delete('/deletemuluser',deleteMulUsers)

export default userRouter;