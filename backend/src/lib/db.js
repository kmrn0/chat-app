import mongoose from "mongoose";


const connectDB= async() =>{
    try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB: ${conn.connection.host}`);
    
    } catch (error) {
        console.log("mongo",error);
        
    }
}; 
export default connectDB