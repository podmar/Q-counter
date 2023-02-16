import mongoose from "mongoose";

interface Connection {
  isConnected?: Number
}

const MONGODB_URI = process.env.MONGODB_URI

const connection: Connection = {}

const connectDB = async () => {
  console.log('CONNECTING TO MONGO');
  if (connection.isConnected) {
    console.log(connection.isConnected)
    return
  }

  try {
    const db = await mongoose.connect(MONGODB_URI!);
    console.log('CONNECTED TO MONGO');

    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected);

  } catch (error) {
    console.log("Connecting to database failed.")
  }
};

export default connectDB;