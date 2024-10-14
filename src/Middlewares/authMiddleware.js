import jwt from "jsonwebtoken";

export const authMiddleware = (roles) =>(req,res,next)=> {
    try{
        console.log(roles)
        const header = req.headers.authorization;
        if(header){
        const token =header.split(' ')[1];
        jwt.verify(token,"Sample2024",(err,data)=>{
            if(err){
                return res.send(err);
            }
            if(roles.includes(data.role)){
                req.user = data;
                next();
            }
            else{
                res.send("Unauthorized access");
            }
        })
        }
    }
    catch(err){
        console.log(err)
    }
}