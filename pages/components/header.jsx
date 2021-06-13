import styles from "./header.module.scss"
import Link from "next/link"
export default function Header({ children }) {
	const Menu = []

	return (
		<header className={styles.wrap}>
			<nav className={styles.nav}>
				<Link href="/">
					<a className={styles["blog-logo"]}>HOME</a>
				</Link>
				<Link href="/about">ABOUT</Link>
				<Link href="/posts">POSTS</Link>
			</nav>
		</header>
	)
}
