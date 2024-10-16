import mongoose from "mongoose";
import db from "../db/db.js";

const userSchema = mongoose.Schema({
    profileimage:String,
    name:String,
    email:String,
    phNo:Number,
    password:String,
    role:{type:String,default:"user"}
},{timestamps:true})

const User = db.model("users",userSchema);

export default User;