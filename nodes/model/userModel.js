
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        uppercase:true,
        required:true,
        trim:true,
        min:[4,'minimum four alfabets are required']
    },
    email:{
        type:String,
        required:true,
        unique:true
       
    },
    phone:{
        type:Number,
        unique:true
    }

},{Timestamps:true})

export default mongoose.model('User',userSchema)