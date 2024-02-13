"use client";
import { Button } from "@mui/material";
import { SidebarLayout as SidebarLayout } from "./components/dashboard/Layout";
import axios from "axios";

export default function Home() {
	const getAccessToken = async () => {
		const res = await axios.get("/api/google/get-oauth-token");
		console.log(res.data);
		try {
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<SidebarLayout>
			<Button onClick={getAccessToken}>Get Oauth Access Token</Button>
		</SidebarLayout>
	);
}
