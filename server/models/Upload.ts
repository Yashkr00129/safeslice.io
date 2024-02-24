import mongoose from "mongoose";
import { IUploadStatus, IUpload } from "@/types";

const uploadSchema = new mongoose.Schema<IUpload>(
	{
		user: { type: String, required: true },
		organization: { type: String, required: true },
		name: { type: String },
		initialVideo: {
			type: String,
			required: true,
		},
		finalVideo: {
			type: String,
			default: null,
		},
		status: {
			type: String,
			enum: [
				IUploadStatus.Pending,
				IUploadStatus.Editing,
				IUploadStatus.Edited,
				IUploadStatus.Uploaded,
			],
			default: IUploadStatus.Pending,
		},
	},
	{
		timestamps: true,
	}
);

const Upload = mongoose.model("Upload", uploadSchema);
export default Upload;
