import express from "express";
import { getUser, updateuser } from "../controllers/usersController.js";
import { authMiddleware } from "../Middlewares/authMiddleware.js";
import multer from "multer";

const userRouter = express.Router()
const upload = multer({storage:multer.memoryStorage()});

// userRouter.get('/getusers',getUsers)
// userRouter.post('/saveuser',saveUser)
// userRouter.put('/updateUser',updateUser)
// userRouter.delete('/deleteuser',deleteUser)

userRouter.get('/getuser',authMiddleware(['admin','user']),getUser)
// userRouter.post('/savemuluser',saveMulUsers)
// userRouter.put('/updatemuluser',updateMulUsers)
// userRouter.delete('/deletemuluser',deleteMulUsers)

userRouter.put('/updateuser',upload.single('profileimage'),authMiddleware(['admin','user']),updateuser)

export default userRouter;