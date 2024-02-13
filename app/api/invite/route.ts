import Invite from "@/server/models/Invite";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

export const GET = async (req: Request) => {
	const { user, userId } = auth();

	if (!userId) {
		return new NextResponse("Unauthorized", { status: 401 });
	}

	try {
		const invites = await Invite.find({ email: user?.emailAddresses });
		return NextResponse.json({ invites });
	} catch (error) {
		console.log("[INVITE ERROR]", error);
		return Response.json({ msg: "Internal Error" });
	}
};

export const POST = async (req: Request) => {
	const { userId } = auth();

	if (!userId) {
		return new NextResponse("Unauthorized", { status: 401 });
	}

  try {
	} catch (error) {
		console.log("[INVITE ERROR]", error);
		return Response.json({ msg: "Internal Error" });
	}
};
