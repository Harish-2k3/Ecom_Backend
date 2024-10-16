import express from "express";
import morgan from "morgan";
import router from "../routes/index.js";
import cors from "cors";

const app = express();
app.use(cors({
    origin:["http://localhost:8000","http://localhost:5173"]
}))
app.use(express.json())
app.use(morgan('tiny'))
app.use('/uploads',express.static('uploads'))
app.use(router);
app.get('/',(req,res)=>res.send("Hello server!"));


export default app;