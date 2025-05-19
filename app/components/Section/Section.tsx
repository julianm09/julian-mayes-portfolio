import Header from "../Header/Header";
import styles from "./Section.module.scss";

interface SectionProps {
	header?: string;
	children?: React.ReactNode;
}

export default function Section({ header = "ABOUT", children }: SectionProps) {
	return (
		<div className={styles.container}>
			<Header header={header} />
			<div className={styles.content}>{children}</div>
		</div>
	);
}
