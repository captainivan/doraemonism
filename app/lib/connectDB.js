import mongoose from "mongoose";


const connectDB = async() => {
    const DB_URL = process.env.DB_URL;
    try {
        await mongoose.connect(DB_URL)
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Error connecting to database")
    }
}
export default connectDB;
