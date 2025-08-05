import mongoose from "mongoose";
 

const connectDB = async (MONGO_URI: string) => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB has been connected successfully.");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1); // Exit the process with failure.
  }
};

export default connectDB;
