import User from "../../models/userModel.js"
import bcrpt from "bcrypt";
export const Register=async(req,res)=>{
    try{
        const {email,password} = req.body;
        const findUser = await User.findOne({email});
        if(!findUser){
            const hashpassword =await bcrpt.hash(password,10);
            // console.log({...req.body,password:hashpassword});
            const ResData = await new User({...req.body,password:hashpassword}).save();
            res.send({message:"Sucessfully Registered"});
        }
        else{
            res.send({message:"User Already Exists"});
        }
    }
    catch(err){
        console.log(err);
    }
}