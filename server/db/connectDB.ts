import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Ensure MONGO_URI is available
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not defined in environment variables");
        }

        // Connecting to MongoDB using the URI
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected.');
    } catch (error) {
        console.log('Error connecting to MongoDB:', error);
    }
};

export default connectDB;
