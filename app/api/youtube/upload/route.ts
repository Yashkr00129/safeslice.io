import { google } from "googleapis";
import fs from "fs";

export const POST = async (request: Request) => {
	const CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
	const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;
	const REDIRECT_URI = "http://localhost:3000/";

	const oauth2Client = new google.auth.OAuth2(
		CLIENT_ID,
		CLIENT_SECRET,
		REDIRECT_URI
	);

	// This will be the access token of the current user
	oauth2Client.setCredentials({
		access_token:
			"ya29.a0AfB_byARIbzZPsmZuPZ5UOvuD34EqjkgarsiB-CpJrSOzuxXgNOioE-JctR9WICQW7Ze6P6gQAM3MbJlSXy_kLdhMsPAVbGujogP1Tc1Ph2bRtxdWmqYJy1Jv2SUpOFlaEBVx9N24bCEkTr1qboJCnp661OrWQo9HwaCgYKAfISARASFQHGX2MiWj9jqlstFho1V8-veg6iBg0169",
	});

	const youtube = google.youtube({ version: "v3", auth: oauth2Client });

	try {
		const response = await youtube.videos.insert({
			part: ["snippet", "status"],
			requestBody: {
				snippet: {
					title: "Muay Thai Bag Work",
					description: "Heavy bag workout on 08-02-2024",
					categoryId: "17",
					tags: ["muay thai", "heavy bag workout"],
				},
				status: {
					privacyStatus: "unlisted",
				},
			},
			media: {
				body: fs.createReadStream("./bag-work.mp4"),
			},
		});

		console.log(`Upload successful! Video ID: ${response.data.id}`);
		console.log(response.data);
		return Response.json(response.data);
	} catch (err) {
		console.log(err);
	}
};
