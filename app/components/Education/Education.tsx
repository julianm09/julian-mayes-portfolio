import ExperienceDropdown from "../ExperienceDropdown/ExperienceDropdown";
import Header from "../Header/Header";
import Section from "../Section/Section";
import styles from "./Education.module.scss";

export default function Education({}) {
	const experience = [
		{
			gradient: "#f24711, #731b00",
			name: "Critical Mass",
			position: "Frontend Developer",
			date: "May 2022 - Present",
			description:
				"Spearheaded the development of scalable web solutions, optimizing user experience for SaaS platforms. Led a team in crafting responsive, high-performing web interfaces using modern frameworks.",
		},
	];

	return (
		<Section header="EDUCATION">
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
