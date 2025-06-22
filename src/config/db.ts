// import mongoose from "mongoose";
// export const connectDB = async () => {
//   await mongoose.connect("mongodb+srv://mongodb:mongodb@cluster0.gswfx77.mongodb.net/librarydata?retryWrites=true&w=majority&appName=Cluster0");
//   console.log("MongoDB connected");
// };

// // // Create a MongoClient with a MongoClientOptions object to set the Stable API version
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error(" MongoDB connection error:", error);
    process.exit(1);
  }
};
