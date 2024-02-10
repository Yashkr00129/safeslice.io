import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import clerk from "@clerk/clerk-sdk-node";

export async function GET() {
	try {
		const { userId } = auth();

		const [OauthAccessToken] = await clerk.users.getUserOauthAccessToken(
			userId || "",
			"oauth_google"
		);

		const { token } = OauthAccessToken;

		if (!token)
			return new NextResponse("Unauthorized NO TOKEN", { status: 401 });

		return Response.json(OauthAccessToken);
	} catch (error) {
		console.log("[OAUTH ERROR]", error);
		return new NextResponse("Internal error", { status: 500 });
	}
}
