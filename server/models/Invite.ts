import mongoose from "mongoose";

const inviteSchema = new mongoose.Schema({
	owner: { type: String, required: true },
	editorEmail: { type: String, required: true },
	status: {
		type: String,
		enum: ["Pending", "Complete"],
		default: "Pending",
	},
});

const Invite = mongoose.model("Invite", inviteSchema);
export default Invite;
