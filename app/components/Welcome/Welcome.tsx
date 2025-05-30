"use client";

import { GitHub, Linkedin, Mail } from "react-feather";
import styles from "./Welcome.module.scss";
import { useState } from "react";

export default function Welcome({}) {
	const [copied, setCopied] = useState(false);
	const iconSize = 18;

	function copyEmailToClipboard(e: React.MouseEvent) {
		e.preventDefault();
		navigator.clipboard.writeText("julianmayes@gmail.com");
		// alert("Email copied to clipboard!");
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	}

	return (
		<div className={styles["container"]}>
			<img src="/profile.png" alt="cowboy" className={styles["image"]} />

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
					{copied ? (
						<div className={styles["message"]}>
							Copied!
						</div>
					) : (
						<button
							className={styles["link"]}
							onClick={copyEmailToClipboard}
						>
							<Mail size={iconSize} />
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
