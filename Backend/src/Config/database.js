import   mongoose from "mongoose"
import { DB_NAME } from "../Constant.js";



export const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Database Connect Successfully! ,  HostName : ${mongoose.connection.host}`)
        
    }catch(error) {
        console.log("Database connection error occur!", error);
        process.exit(1);
    }
}