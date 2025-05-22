import Image from "next/image";
import styles from "./ProjectsCard.module.scss";
import { ArrowUpRight } from "react-feather";

export default function ProjectsCard({}) {
	return (
		<div className={styles["card"]}>
			<div className={styles["image"]}>
				<img
					src="/cowboy.png"
					alt="cowboy"
					width={218}
					height={145}
					style={{ borderRadius: "8px" }}
				/>
			</div>
			<div className={styles["content"]}>
				<div className={styles["name"]}>Cowboy Interactive</div>
				<div className={styles["description"]}>
					A sleek and responsive landing page designed for modern
					startups to showcase their products effectively.
				</div>
				<div className={styles["link"]}>Click to view <ArrowUpRight size={14}/></div>
			</div>
		</div>
	);
}
