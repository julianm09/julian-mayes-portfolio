import ExperienceDropdown from "../ExperienceDropdown/ExperienceDropdown";
import Section from "../Section/Section";
import styles from "./Experience.module.scss";

type ExperienceProps = {
	header: string;
	experience: {
		gradient: string;
		name: string;
		position: string;
		date: string;
		description: string;
	}[];
};

export default function Experience({ header = "EXPERIENCE", experience }: ExperienceProps) {
	return (
		<Section header={header}>
			<div className={styles.grid}>
				{experience.map((experience) => (
					<ExperienceDropdown
						experience={experience}
						key={experience.name}
					/>
				))}
			</div>
		</Section>
	);
}
