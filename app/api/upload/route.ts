import Upload from "@/server/models/Upload";
import { NextResponse, NextRequest } from "next/server";

export const config = {
	api: {
		bodyParser: false,
	},
};

export const POST = async (req: NextRequest) => {
	try {
		const data = await req.formData();
		const file: File = data.get("file") as File;

		return new NextResponse("Upload Successful");
	} catch (error) {
		console.log(error);
		return new NextResponse("Internal error", { status: 500 });
	}
};
