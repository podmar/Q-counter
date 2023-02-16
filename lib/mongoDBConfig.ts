import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI

const connectDB = async () => {
    console.log('CONNECTING TO MONGO');
  try {
    await mongoose.connect(MONGODB_URI!);
    console.log('CONNECTED TO MONGO');

  } catch (error) {
    console.log("Connecting to database failed.")
  }
};

export default connectDB;