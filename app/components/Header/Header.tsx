import styles from "./Header.module.scss";

interface HeaderProps {
	header?: string;
}

export default function Header({header = "Header"}) {
  return (
    <div className={styles.header}>
      {header}
    </div>
  );
}
