import User from "../models/userModel.js";

export const getUsers = async (req, res) => {
    try {
        console.log(req.query)
        const response = await User.find({})
        res.send(response);
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

export const saveUser = async (req, res) => {
    try {
        console.log(new User(req.body))
        const response = await new User(req.body).save();
        res.send(req.body);
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

export const updateUser = async (req, res) => {
    try {
        const { _id, ...otherdatas } = req.body;
        console.log(otherdatas)
        const response = await User.findOneAndUpdate({ _id }, otherdatas, { new: true });
        res.send(response);
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { _id, ...otherdatas } = req.body;
        console.log(otherdatas)
        const response = await User.deleteOne({ _id });
        res.send(response);
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}


export const getUser = async (req, res) => {
    try {
        console.log(req.query)
        const { email } = req.query;
        const response = await User.find({ email: email })
        res.send(response);
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

export const updateMulUsers = async (req, res) => {
    try {
        const { _id, ...otherdatas } = req.body;
        console.log(otherdatas)
        const response = await User.updateMany({ _id: { $in: _id } }, otherdatas);
        res.send(response);
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

export const deleteMulUsers = async (req, res) => {
    try {
        const { _id, ...otherdatas } = req.body;
        console.log(otherdatas)
        const response = await User.deleteMany({ _id: { $in: _id } });
        res.send(response);
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

export const saveMulUsers = async (req, res) => {
    try {
        const response = await User.insertMany(req.body);
        res.send(response);
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}




