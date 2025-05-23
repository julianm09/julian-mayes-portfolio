import styles from "./ProjectsCard.module.scss";
import { ArrowUpRight, GitHub } from "react-feather";

interface projectsProps {
	project: {
		image?: string;
		name?: string;
		description?: string;
		link?: string;
		repo?: string;
	};
}

export default function ProjectsCard({ project }: projectsProps) {
	return (
		<div className={styles["card"]}>
			<div className={styles["image"]}>
				<img
					src={project.image}
					alt="cowboy"
					width={218}
					height={145}
					style={{ borderRadius: "8px" }}
				/>
			</div>
			<div className={styles["content"]}>
				<div className={styles["name"]}>{project.name}</div>
				<div className={styles["description"]}>
					{project.description}
				</div>
				<div className={styles["links"]}>
					{project.link && (
						<a
							className={styles["link"]}
							href={project.link}
							target="_blank"
						>
							View
							<ArrowUpRight size={14} />
						</a>
					)}
					{project.repo && (
						<a
							className={`${styles["link"]} ${styles["link"]}`}
							href={project.repo}
							target="_blank"
						>
							Repo
							<GitHub size={14} />
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
