"use client";

import Section from "../Section/Section";
import styles from "./Contact.module.scss";
import { useForm, ValidationError } from "@formspree/react";

interface AboutProps {
	header: string;
}

export default function Contact({ header = "CONTACT" }: AboutProps) {
	const [state, handleSubmit] = useForm("meogwrqp");

	return (
		<Section header={header}>
			{state.succeeded ? (
				<p>Thanks, I'll get back to you soon!</p>
			) : (
				<form onSubmit={handleSubmit} className={styles["form"]}>
					<div className={styles["input-container"]}>
						<label htmlFor="email" className={styles["label"]}>
							Name
						</label>
						<input
							id="name"
							type="text"
							name="name"
							className={styles["input"]}
						/>
						<ValidationError
							prefix="Name"
							field="name"
							errors={state.errors}
						/>
					</div>

					<div className={styles["input-container"]}>
						<label htmlFor="email" className={styles["label"]}>
							Email Address
						</label>
						<input
							id="email"
							type="email"
							name="email"
							className={styles["input"]}
						/>
						<ValidationError
							prefix="Email"
							field="email"
							errors={state.errors}
						/>
					</div>

					<div className={styles["input-container"]}>
						<label htmlFor="message" className={styles["label"]}>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							className={styles["text-area"]}
						/>
						<ValidationError
							prefix="Message"
							field="message"
							errors={state.errors}
						/>
					</div>

					<button
						type="submit"
						disabled={state.submitting}
						className={styles["button"]}
					>
						Send
					</button>
				</form>
			)}
		</Section>
	);
}
