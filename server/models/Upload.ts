import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema({
	user: { type: String },
	clips: {
		type: [String],
	},
	finalVideo: {
		type: String,
		default: null,
	},
	status: {
		type: String,
		enum: [
			"Clips Submitted",
			"Editing",
			"Editing Finished",
			"Upload Completed",
		],
	},
});

const Upload = mongoose.model("Upload", uploadSchema);
export default Upload;
