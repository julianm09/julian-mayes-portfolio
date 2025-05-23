"use client";

import { GitHub, Linkedin, Mail } from "react-feather";
import styles from "./Welcome.module.scss";

export default function Welcome({}) {
	const iconSize = 18;

	function copyEmailToClipboard(e: React.MouseEvent) {
		e.preventDefault();
		navigator.clipboard.writeText("julianmayes@gmail.com");
		alert("Email copied to clipboard!");
	}

	return (
		<div className={styles["container"]}>
			<img
				src="/profile.png"
				alt="cowboy"
				style={{ borderRadius: "8px", width: "162px", height: "162px" }}
			/>

			<div className={styles["column"]}>
				<h1>Hello, I&apos;m Julian Mayes</h1>
				<p>Frontend Developer</p>

				<div className={styles["links"]}>
					<a
						className={styles["link"]}
						href="https://github.com/julianm09"
						target="_blank"
					>
						<GitHub size={iconSize} />
					</a>

					<a
						className={styles["link"]}
						href="https://www.linkedin.com/in/julian-mayes/"
						target="_blank"
					>
						<Linkedin size={iconSize} />
					</a>

					<div
						className={styles["link"]}
						onClick={copyEmailToClipboard}
					>
						<Mail size={iconSize} />
					</div>
				</div>
			</div>
		</div>
	);
}
