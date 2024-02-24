export enum IUploadStatus {
	Pending = "Upload Pending",
	Editing = "Editing Started",
	Edited = "Editing Finished",
	Uploaded = "Upload Completed",
}

export type IUpload = {
	id: string;
	user: string;
	organization: string;
	name?: string;
	initialVideo: string;
	finalVideo: string;
	status: IUploadStatus;
	createdAt: Date;
	updatedAt: Date;
};
