import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const PORT=9000
const url=process.env.MONGO_URI
if(!url){
    throw new Error("cannot find mongo url")
}
mongoose.connect(url)
.then(()=>{
    console.log("server is connected to the database")
})
.catch((error)=>{
    console.log("error"+error)
})