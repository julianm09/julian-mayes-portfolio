import styles from "./Header.module.scss";

export default function Header({ header = "Header" }) {
	return <div className={styles.header}>{header}</div>;
}
