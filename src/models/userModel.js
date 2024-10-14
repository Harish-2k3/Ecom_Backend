import mongoose from "mongoose";
import db from "../db/db.js";

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    phNo:Number,
    password:String,
    role:{type:String,default:"user"}
},{timestamps:true})

// const adminSchema = mongoose.Schema({
//     name:String,
//     email:String,
//     password:String,
//     role:{type:String,default:"admin"}
// },{timestamps:true})

const User = db.model("users",userSchema);
// const Admin = db.model("admins",adminSchema);

// export{User}
export default User;
// export default {User,Admin};
//multi export - export {user1,user2}