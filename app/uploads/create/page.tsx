"use client";
import { SidebarLayout } from "@/app/components/dashboard/Layout";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { ChangeEvent } from "react";

export default function CreateUploadPage() {
	return (
		<SidebarLayout>
			<TextField
				type="file"
				name="video"
			/>
		</SidebarLayout>
	);
}
