import Section from "../Section/Section";
import styles from "./About.module.scss";

interface AboutProps {
	header: string;
}

export default function About({ header = "ABOUT" }: AboutProps) {
	return (
		<Section header={header}>
			<p>
				I’m Julian Mayes, a Frontend Engineer based in Vancouver. I
				build accessible, responsive web interfaces with a focus on
				clean code and practical design. I care about creating smooth,
				reliable experiences and enjoy working where design and
				development come together.
				<br></br>
				<br></br>
				In my spare time, I like to work on small side projects to try
				out new tools and keep learning. I'm especially interested in
				making everyday workflows better through thoughtful design and
				well-structured code.
			</p>
		</Section>
	);
}
