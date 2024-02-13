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

const upload = [
	{
		user: {},
		clips: ["https://someurl.com"],
		finalVideo: ["https://someurl.com"],
	},
];

export default function Upload() {
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
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					py: 8,
				}}>
				<Container maxWidth="xl">
					<Stack
						direction="row"
						justifyContent="space-between"
						spacing={4}>
						<Stack spacing={1}>
							<Typography variant="h4">Uploads</Typography>
							<Stack
								alignItems="center"
								direction="row"
								spacing={1}></Stack>
						</Stack>
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
				</Container>
			</Box>
		</SidebarLayout>
	);
}
