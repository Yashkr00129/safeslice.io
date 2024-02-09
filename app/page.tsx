import Image from "next/image";
import styles from "./page.module.css";
import { Layout as SidebarLayout } from "./components/dashboard/Layout";

export default function Home() {
	return (
		<SidebarLayout>
			<h1>Hello</h1>
		</SidebarLayout>
	);
}
