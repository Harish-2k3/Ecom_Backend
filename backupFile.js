// import express from "express";
// import mongoose from "mongoose";
// import morgan from "morgan";

// const app = express();
// const port = 8000;
// app.use(express.json())
// app.use(morgan('tiny'))

//db connection
// const db = mongoose.createConnection("mongodb://localhost:27017/trainingdb");
// db.once('open',()=> console.log("DB Sucessfully connected!"));
// db.on('error',(err)=>console.log(`db not connected due to ${err.message}`))
//schema model
// const userschema = mongoose.Schema({
//     name:String,
//     email:String,
//     phNo:Number
// })
// const productschema = mongoose.Schema({
//     product_name:String
// })
// const User = db.model("users",userschema);
// const Product = db.model("products ",productschema);

// app.get('/',(req,res)=>{
//     console.log("hello")
//     res.send("Hello server!")
// })

// app.post('/saveuser',async(req,res)=>{
//     try{
//         console.log(new User (req.body))
//         const response = await new User(req.body).save();
//         res.send(req.body);
//     }
//     catch(err){
//         console.log(err)
//         res.send(err)
//     }
// })

// app.post('/saveManyUser',async(req,res)=>{
//     try{
//         const response = await User.insertMany(req.body);
//         res.send(response);
//     }
//     catch(err){
//         console.log(err)
//         res.send(err)
//     }
// })

// app.get('/user',async(req,res)=>{
//     try{
//         console.log(req.query)
//         const response = await User.find({})
//         res.send(response);
//     }
//     catch(err){
//         console.log(err)
//         res.send(err)
//     }
// })

app.get('/users',async(req,res)=>{
    try{
        console.log(req.query)
        const {email} = req.query;
        const response = await User.find({email:email})
        res.send(response);
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})

// app.put('/updateUser',async(req,res)=>{
//     try{
//         const {_id,...otherdatas} = req.body;
//         console.log(otherdatas)
//         const response = await User.findOneAndUpdate({_id},otherdatas,{new:true});
//         res.send(response);
//     }
//     catch(err){
//         console.log(err)
//         res.send(err)
//     }
// })

// app.put('/updateManyUser',async(req,res)=>{
//     try{
//         const {_id,...otherdatas} = req.body;
//         console.log(otherdatas)
//         const response = await User.updateMany({_id:{$in:_id}},otherdatas);
//         res.send(response);
//     }
//     catch(err){
//         console.log(err)
//         res.send(err)
//     }
// })

// app.delete('/deleteUser',async(req,res)=>{
//     try{
//         const {_id,...otherdatas} = req.body;
//         console.log(otherdatas)
//         const response = await User.deleteOne({_id});
//         res.send(response);
//     }
//     catch(err){
//         console.log(err)
//         res.send(err)
//     }
// })

// app.put('/deleteMany',async(req,res)=>{
//     try{
//         const {_id,...otherdatas} = req.body;
//         console.log(otherdatas)
//         const response = await User.deleteMany({_id:{$in:_id}});
//         res.send(response);
//     }
//     catch(err){
//         console.log(err)
//         res.send(err)
//     }
// })


app.get('/products',(req,res)=>{
    res.send("List of Products...")
    console.log(res.body)
})

app.post('/products',(req,res)=>{
    console.log(req.body)
    res.send("sucessfully saved!")
    console.log(res.body)
})

app.put('/api/products',(req,res)=>{
    res.send("updated")
    console.log(res.body)
})

app.delete('/products',(req,res)=>{
    res.send("deleted")
    console.log(res.body)
})

// app.listen(port,()=>console.log(`Server is running on port http://localhost:${port}...`))