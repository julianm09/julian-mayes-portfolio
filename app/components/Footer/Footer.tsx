import styles from "./Footer.module.scss";

export default function Footer({}) {
	return (
		<div className={styles["container"]}>
			<div>© Julian Mayes 2025</div>
			<div>
				Based on a design by{" "}
				<a target="_blank" href="https://x.com/prathamBuilds">
					Pratham
				</a>.
				Built in Next.js
			</div>
		</div>
	);
}
