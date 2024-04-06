import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    predictedClass:{
        type:String,
        required:true,
    }

},{timestamps:true});
const User=mongoose.model("User",userSchema);
export default User;