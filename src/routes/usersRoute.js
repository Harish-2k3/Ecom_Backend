import express from "express";
import { deleteMulUsers, deleteUser, getUser, getUsers, saveMulUsers, saveUser, updateMulUsers, updateuser, updateUser } from "../controllers/usersController.js";
import { authMiddleware } from "../Middlewares/authMiddleware.js";

const userRouter = express.Router()


userRouter.get('/getusers',getUsers)
userRouter.post('/saveuser',saveUser)
userRouter.put('/updateUser',updateUser)
userRouter.delete('/deleteuser',deleteUser)

userRouter.get('/getuser',authMiddleware(['admin','user']),getUser)
userRouter.post('/savemuluser',saveMulUsers)
userRouter.put('/updatemuluser',updateMulUsers)
userRouter.delete('/deletemuluser',deleteMulUsers)

userRouter.put('/updateuser',authMiddleware(['admin','user']),updateuser)

export default userRouter;