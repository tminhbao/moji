import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error when connecting database", error);
    process.exit(1);
  }
};
