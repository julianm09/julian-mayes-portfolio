"use client";
import { useState } from "react";
import styles from "./ExperienceDropdown.module.scss";
import { ChevronDown, ChevronUp } from "react-feather";

type ExperienceProps = {
	experience: {
		gradient: string;
		name: string;
		position: string;
		date: string;
		description: string;
	};
};

export default function ExperienceDropdown({ experience }: ExperienceProps) {
	const [open, setOpen] = useState(false);
	return (
		<div className={styles["container"]} onClick={() => setOpen(!open)}>
			<div className={styles["dropdown"]}>
				<div
					className={styles["image"]}
					style={{
						background: `linear-gradient(${experience.gradient})`,
					}}
				></div>
				<div className={styles["info"]}>
					<div className={styles["name"]}>{experience.name}</div>
					<div className={styles["position"]}>
						{experience.position}
					</div>
				</div>
				<div className={styles["date"]}>{experience.date}</div>
				<div className={styles["icon"]}>
					{open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
				</div>
			</div>

			{open && (
				<div className={styles["content"]}>
					<p>{experience.description}</p>
				</div>
			)}
		</div>
	);
}
