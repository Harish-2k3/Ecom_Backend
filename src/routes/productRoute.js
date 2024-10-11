import express from "express";
import { deleteProduct, getProduct, saveProduct, updateProduct } from "../controllers/productController.js";
const productRouter = express.Router()


productRouter.get('/getproduct',getProduct)
productRouter.post('/saveproduct',saveProduct)
productRouter.put('/updateproduct',updateProduct)
productRouter.delete('/deleteproduct',deleteProduct)


export default productRouter;