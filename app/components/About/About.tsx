import Section from "../Section/Section";
import styles from "./About.module.scss";

interface AboutProps {
	header: string;
}

export default function About({ header = "ABOUT" }: AboutProps) {
	return (
		<Section header={header}>
			<p>
				I’m Julian, a Frontend Developer based in Vancouver, BC. I build
				accessible, responsive applications with a focus on clean,
				maintainable code. I enjoy turning design ideas into reliable,
				user-friendly interfaces.
				<br></br>
				<br></br>
				In my spare time, I work on side projects to try out new tools
				and keep learning. I’m interested in building tools that solve
				real problems and improve how people get things done.
			</p>
		</Section>
	);
}
