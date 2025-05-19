import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import styles from "./page.module.css";

export default function Home() {
	const experience = [
		{
			gradient: "#f24711, #731b00",
			name: "Critical Mass",
			position: "Frontend Developer",
			date: "May 2022 - Present",
			description:
				"Spearheaded the development of scalable web solutions, optimizing user experience for SaaS platforms. Led a team in crafting responsive, high-performing web interfaces using modern frameworks.",
		},
		{
			gradient: "#3659e0,rgb(36, 59, 153)",
			name: "Techies of Tomorrow",
			position: "Frontend Developer Intern",
			date: "Mar 2022 - May 2022",
			description:
				"Spearheaded the development of scalable web solutions, optimizing user experience for SaaS platforms. Led a team in crafting responsive, high-performing web interfaces using modern frameworks.",
		},
		{
			gradient: "#b40000,rgb(88, 1, 1)",
			name: "WelTel Health",
			position: "Web Developer",
			date: "Aug 2021 - Apr 2022",
			description:
				"Spearheaded the development of scalable web solutions, optimizing user experience for SaaS platforms. Led a team in crafting responsive, high-performing web interfaces using modern frameworks.",
		},
		{
			gradient: "#00a8e0, #00b188",
			name: "Emily Carr",
			position: "Web Developer",
			date: "May 2021 - Sep 2021",
			description:
				"Spearheaded the development of scalable web solutions, optimizing user experience for SaaS platforms. Led a team in crafting responsive, high-performing web interfaces using modern frameworks.",
		},
	];

	const education = [
		{
			gradient: "#003c71,rgb(2, 92, 171)",
			name: "BCIT",
			position: "Digital Design & Development",
			date: "Sept 2022 - March 2022",
			description:
				"Completed a hands-on program covering web development and design. Learned to build responsive websites and applications using HTML, CSS, JavaScript, and React. Worked on team projects that followed real-world workflows, focusing on usability, clean code, and practical problem-solving.",
		},
	];

	const languages = ["JavaScript", "TypeScript", "HTML ", "CSS", "Sass"];

	const technologies = [
		"React",
		"Node.js",
		"Next.js",
		"Express",
		"Git",
		"Jest",
		"Redux",
		"Vercel",
	];

	return (
		<div className={styles.page}>
			<div className={styles.container}>
				<About header={"ABOUT"}/>
				<Skills header={"LANGUAGES"} skills={languages} />
				<Skills header={"TECHNOLOGIES"} skills={technologies} />
				<Experience header={"EXPERIENCE"} experience={experience} />
				<Experience header={"EDUCATION"} experience={education} />
			</div>
		</div>
	);
}
