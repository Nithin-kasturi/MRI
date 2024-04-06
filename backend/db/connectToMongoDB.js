import mongoose from "mongoose";
const connectToMongoDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connecte to mongodb");
    } catch (error) {
        console.log("Error connecting to mongodb",error);
    }
}
export default connectToMongoDB;