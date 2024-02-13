"use client";
import { SidebarLayout } from "@/app/components/dashboard/Layout";
import { CreateOrganization } from "@clerk/nextjs";
import { Box } from "@mui/material";

export default function CreateTeamPage() {
	return (
		<SidebarLayout>
			<Box sx={{ display: "grid", placeItems: "center" }}>
				<CreateOrganization afterCreateOrganizationUrl={"/team"} />
			</Box>
		</SidebarLayout>
	);
}
