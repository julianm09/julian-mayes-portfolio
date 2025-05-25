"use client";

import Header from "../Header/Header";
import styles from "./Section.module.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionProps {
	header?: string;
	children?: React.ReactNode;
}

export default function Section({ header, children }: SectionProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<motion.div
			className={styles.container}
			ref={ref}
			initial={{ opacity: 0, y: 20 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			{header && <Header header={header} />}
			<div className={styles.content}>{children}</div>
		</motion.div>
	);
}
