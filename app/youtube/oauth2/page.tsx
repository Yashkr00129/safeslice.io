"use client";
import { Box, Button, Stack } from "@mui/material";
import { Layout as SidebarLayout } from "@/app/components/dashboard/Layout";
import { useState } from "react";
import { useParams, usePathname, useSearchParams } from "next/navigation";

export default function OauthConnectionPage() {
	const [connectionSuccessful, setConnectionSuccessful] = useState(false);

	return (
		<SidebarLayout>
			<Stack
				alignItems="center"
				justifyContent="center"
				sx={{ height: "100%" }}>
				Your youtube channel has been successfully connected to safeslice.io
			</Stack>
		</SidebarLayout>
	);
}
