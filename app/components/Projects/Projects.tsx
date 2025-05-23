"use client";

import { ArrowLeft, ArrowRight } from "react-feather";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import Section from "../Section/Section";
import styles from "./Projects.module.scss";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/app/data";

export default function Projects({}) {
	const galleryRef = useRef<HTMLDivElement | null>(null);
	const [showLeft, setShowLeft] = useState(false);
	const [showRight, setShowRight] = useState(false);

	const updateArrows = () => {
		const el = galleryRef.current;
		if (!el) return;

		const { scrollLeft, clientWidth, scrollWidth } = el;

		setShowLeft(scrollLeft > 0);
		setShowRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
	};

	useEffect(() => {
		const el = galleryRef.current;
		if (!el) return;

		updateArrows(); // initial check
		el.addEventListener("scroll", updateArrows);
		window.addEventListener("resize", updateArrows);

		return () => {
			el.removeEventListener("scroll", updateArrows);
			window.removeEventListener("resize", updateArrows);
		};
	}, []);

	const scrollLeftHandler = () => {
		galleryRef.current?.scrollBy({ left: -600, behavior: "smooth" });
	};

	const scrollRightHandler = () => {
		galleryRef.current?.scrollBy({ left: 600, behavior: "smooth" });
	};

	return (
		<Section header="PROJECTS">
			<div className={styles["gallery-wrapper"]}>
				<div
					className={`${styles["arrow-left"]} ${styles["button"]} ${
						showLeft ? styles["visible"] : ""
					}`}
					onClick={scrollLeftHandler}
				>
					<ArrowLeft size={20} />
				</div>
				<div className={styles["gallery"]} ref={galleryRef}>
					{projects?.map((project) => (
						<ProjectsCard
							key={project.name}
							project={project}
						/>
					))}
				</div>
				<div
					className={`${styles["arrow-right"]} ${styles["button"]} ${
						showRight ? styles["visible"] : ""
					}`}
					onClick={scrollRightHandler}
				>
					<ArrowRight size={20} />
				</div>
			</div>
		</Section>
	);
}
