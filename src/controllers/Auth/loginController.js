import User from "../../models/userModel.js";
import jwt from "jsonwebtoken"; 
import bcrpt from "bcrypt";

export const login =async(req,res)=> {
    try{
        console.log(req.body)
        const {email,password} = req.body;
        const ResData = await User.findOne({email});
        if(ResData){
            const checkPassword = await bcrpt.compare(password,ResData.password)
            if (checkPassword){
                const token = jwt.sign({email:ResData.email,name:ResData.name,role:ResData.role},"Sample2024")
                res.send({message:"Sucessfully Login",token});
            }
            else{
                res.send({message:"Invalid email or password"});
            }
        }
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
}
