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
		const el = galleryRef.current;
		if (!el) return;

		const newScrollLeft = Math.max(el.scrollLeft - el.clientWidth, 0);
		el.scrollTo({ left: newScrollLeft, behavior: "smooth" });
	};

	const scrollRightHandler = () => {
		const el = galleryRef.current;
		if (!el) return;

		const maxScrollLeft = el.scrollWidth - el.clientWidth;
		const newScrollLeft = Math.min(
			el.scrollLeft + el.clientWidth,
			maxScrollLeft
		);
		el.scrollTo({ left: newScrollLeft, behavior: "smooth" });
	};

	return (
		<Section header="PROJECTS">
			<div className={styles["gallery-wrapper"]}>
				<div
					className={`${styles["arrow-container-left"]} ${
						styles["arrow-container"]
					} ${showLeft ? styles["visible"] : ""}`}
				>
					<div
						className={`${styles["arrow-left"]} ${
							styles["arrow"]
						} ${showLeft ? styles["visible"] : ""}`}
						onClick={scrollLeftHandler}
					>
						<ArrowLeft size={20} />
					</div>
				</div>
				<div className={styles["gallery"]} ref={galleryRef}>
					{projects?.map((project) => (
						<ProjectsCard key={project.name} project={project} />
					))}
				</div>
				<div
					className={`${styles["arrow-container-right"]} ${
						styles["arrow-container"]
					} ${showRight ? styles["visible"] : ""}`}
				>
					<div
						className={`${styles["arrow-right"]} ${
							styles["arrow"]
						} ${showRight ? styles["visible"] : ""}`}
						onClick={scrollRightHandler}
					>
						<ArrowRight size={20} />
					</div>
				</div>
			</div>
		</Section>
	);
}
