"use client";
import { SidebarLayout } from "@/app/components/dashboard/Layout";
import {
	OrganizationProfile,
	useOrganizationList,
	useOrganization,
} from "@clerk/nextjs";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

export default function CreateTeamPage() {
	const router = useRouter();
	const {
		isLoaded,
		organization,
		membership,
		invitations,
		memberships,
		membershipRequests,
		domains,
	} = useOrganization();

	return (
		<SidebarLayout>
			<Box sx={{ display: "grid", placeItems: "center" }}>
				{!organization ? (
					<Stack spacing={3}>
						<Typography variant="h5">
							You do not have an organization. In order to invite and manage
							your editors, create an organization.
						</Typography>
						<Button onClick={() => router.push("/team/create")}>
							Create Team
						</Button>
					</Stack>
				) : (
					<OrganizationProfile afterLeaveOrganizationUrl="http://localhost:3000/team/create" />
				)}
			</Box>
		</SidebarLayout>
	);
}
