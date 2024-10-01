import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
		console.log("MongoDB connection Success");
	} catch (error) {
		console.error("Error connection loss" + error.message);
		process.exit(1); // 1 means there was an error, 0 means success
	}
};
