import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Welcome from "./components/Welcome/Welcome";
import { experience, technologies } from "./data";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.page}>
			<div className={styles.container}>
				<Welcome />
				<About header={"ABOUT"} />
				<Skills header={"TECHNOLOGIES"} skills={technologies} />
				<Experience header={"EXPERIENCE"} experience={experience} />
				<Projects />
				<Contact header={"CONTACT"} />
				<Footer />
			</div>
		</div>
	);
}
