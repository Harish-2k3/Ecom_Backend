import User from "../models/userModel.js";
import { fileUpload } from "../services/imageUpload.js";
// import { fileUpload } from "../services/imageUpload.js";

// export const getUsers = async (req, res) => {
//     try {
//         console.log(req.query)
//         const response = await User.find({})
//         res.send(response);
//     }
//     catch (err) {
//         console.log(err)
//         res.send(err)
//     }
// }

// export const saveUser = async (req, res) => {
//     try {
//         console.log(new User(req.body))
//         const response = await new User(req.body).save();
//         res.send(req.body);
//     }
//     catch (err) {
//         console.log(err)
//         res.send(err)
//     }
// }

// export const updateUser = async (req, res) => {
//     try {
//         const { _id, ...otherdatas } = req.body;
//         console.log(otherdatas)
//         const response = await User.findOneAndUpdate({ _id }, otherdatas, { new: true });
//         res.send(response);
//     }
//     catch (err) {
//         console.log(err)
//         res.send(err)
//     }
// }

// export const deleteUser = async (req, res) => {
//     try {
//         const { _id, ...otherdatas } = req.body;
//         console.log(otherdatas)
//         const response = await User.deleteOne({ _id });
//         res.send(response);
//     }
//     catch (err) {
//         console.log(err)
//         res.send(err)
//     }
// }


export const getUser = async (req, res) => {
    try {
        const{email} = req.user;
        const response = await User.findOne({email},{email:1,name:1,profileimage:1})
        res.send(response);
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}
export const updateuser=async(req,res)=>{
    console.log(req)
    try {
        var filepath;
        if(req.file){
            filepath=await fileUpload(req.file)
        }
        console.log(filepath)

        const{_id,...otherdatas} = req.body;
        const response = await User.findOneAndUpdate({_id},{...otherdatas,profileimage:filepath},{new:true});
        const message = response?"Successfully updated":"Not updated";
        res.send({message:message});
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

// export const updateMulUsers = async (req, res) => {
//     try {
//         const { _id, ...otherdatas } = req.body;
//         console.log(otherdatas)
//         const response = await User.updateMany({ _id: { $in: _id } }, otherdatas);
//         res.send(response);
//     }
//     catch (err) {
//         console.log(err)
//         res.send(err)
//     }
// }

// export const deleteMulUsers = async (req, res) => {
//     try {
//         const { _id, ...otherdatas } = req.body;
//         console.log(otherdatas)
//         const response = await User.deleteMany({ _id: { $in: _id } });
//         res.send(response);
//     }
//     catch (err) {
//         console.log(err)
//         res.send(err)
//     }
// }

// export const saveMulUsers = async (req, res) => {
//     try {
//         const response = await User.insertMany(req.body);
//         res.send(response);
//     }
//     catch (err) {
//         console.log(err)
//         res.send(err)
//     }
// }




