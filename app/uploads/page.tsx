"use client";
import {
	Button,
	Box,
	Container,
	Stack,
	Typography,
	SvgIcon,
} from "@mui/material";
import { SidebarLayout as SidebarLayout } from "@/app/components/dashboard/Layout";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";

import axios from "axios";
import { SearchBox } from "../components/SearchBox";
import { useOrganization } from "@clerk/nextjs";

const upload = [
	{
		name: "Project 1",
		status: "Upload Pending",
	},
	{
		name: "Project 2",
		status: "Upload Pending",
	},
	{
		name: "Project 3",
		status: "Upload Completed",
	},
];

export default function Upload() {
	const { organization, } = useOrganization();

	return (
		<SidebarLayout>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					py: 8,
				}}>
				<Container maxWidth="xl">
					<Stack spacing={3}>
						<Stack
							direction="row"
							justifyContent="space-between"
							spacing={4}>
							<Typography variant="h4">Uploads</Typography>
							<div>
								<Button
									startIcon={
										<SvgIcon fontSize="small">
											<PlusIcon />
										</SvgIcon>
									}
									variant="contained">
									Add
								</Button>
							</div>
						</Stack>
						<SearchBox placeholder={"Search Uploads"} />
					</Stack>
				</Container>
			</Box>
		</SidebarLayout>
	);
}
