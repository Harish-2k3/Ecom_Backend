import mongoose from "mongoose";

const db = mongoose.createConnection("mongodb://localhost:27017/trainingdb");
db.once('open',()=> console.log("DB Sucessfully connected!"));
db.on('error',(err)=>console.log(`db not connected due to ${err.message}`))

export default db;