import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("MongoDB has been connected successfully.");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1); // Exit the process with failure.
  }
};

export default connectDB;
