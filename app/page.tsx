import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { education, experience, languages, technologies } from "./data";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.page}>
			<div className={styles.container}>
				<About header={"ABOUT"} />
				<Skills header={"TECHNOLOGIES"} skills={technologies} />
				<Experience header={"EXPERIENCE"} experience={experience} />
				<Projects />
				<Experience header={"EDUCATION"} experience={education} />
			</div>
		</div>
	);
}
