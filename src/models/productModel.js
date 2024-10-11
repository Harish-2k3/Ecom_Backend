import mongoose from "mongoose";
import db from "../db/db.js";

const productSchema = mongoose.Schema({
    product_name:String,
    price:Number
},{timestamps:true})

const Product = db.model("products ",productSchema);

// export {Product};
export default Product;