import styles from "./aside.module.scss"
import Link from "next/link"

export default function Aside({ children }) {
	const Menu = []

	return (
		<aside className={styles.sidebar} style={{ background: "#3535" }}>
			<div className={styles.cover}>
				<div className={styles.contents}>
					<div className={styles.heading}>TITLE</div>
					<p>DESCRIPTION</p>
				</div>
			</div>
			<div id={styles.switcher}></div>
		</aside>
	)
}
