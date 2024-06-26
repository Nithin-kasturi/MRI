import User from "../models/userModel.js";

export const insertRecord=async(req,res)=>{
    try {
        console.log(req.body);
        const {name,age,gender,showImage,predictedClass}=req.body;
        const newUser=await new User({
            name,
            age,
            gender,
            image:showImage,
            predictedClass,
        });
        if(newUser){
            await newUser.save();
            res.status(200).json({message:"Record inserted into database"});
        }
        else{
            res.status(400).json({error:"Invalid User data"});
        }
    } catch (error) {
        console.log("Error at userController insert",error);
        res.status(400).json({error:"Internal server error"});
    }
}
export const getRecord=async(req,res)=>{
    try {
        const records=await User.find({});
        res.status(200).json({
            records
        });
        if(!records){
            res.status(200).json([]);
        }
    } catch (error) {
        console.log("error at getrecord",error);
        res.status(500).json({error:"Internal server error"})
    }
}