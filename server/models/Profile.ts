import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
	user: { type: String, required: true },
	roles: [],
});
