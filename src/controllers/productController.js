import Product from "../models/productModel.js";

export const getProduct = async (req, res) => {
    try{
        console.log(req.query)
        const response = await Product.find({})
        res.send(response);
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
}

export const saveProduct = async (req, res) => {
    try{
        console.log(new Product (req.body))
        const response = await new Product(req.body).save();
        res.send(req.body);
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
}

export const updateProduct = async (req, res) => {
    try{
        const {_id,...otherdatas} = req.body;
        console.log(otherdatas)
        const response = await Product.findOneAndUpdate({_id},otherdatas,{new:true});
        res.send(response);
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
}

export const deleteProduct = async (req, res) => {
    try{
        const {_id,...otherdatas} = req.body;
        console.log(otherdatas)
        const response = await Product.deleteOne({_id});
        res.send(response);
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
}

