import Section from "../Section/Section";
import styles from "./Skills.module.scss";

interface SkillsProps {
  header: string;
  skills: string[];
}

export default function Skills({header = "SKILLS", skills=[]}: SkillsProps) {

	return (
		<Section header={header}>
			<div className={styles.grid}>
				<div className={styles.grid}>
					{skills.map((skill, i) => (
						<div className={styles.skill} key={i}>
							{skill}
						</div>
					))}
				</div>
			</div>
		</Section>
	);
}
