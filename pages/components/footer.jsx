import styles from "./footer.module.scss"
import Link from "next/link"

export default function Footer({ children }) {
	return (
		<footer className={styles.footer}>
			<p>
				<a href="/archive">Archive</a> <a href="feed.xml">RSS</a>
			</p>
			<p>
				© <span className="full-year">2021</span> Daseul22's Blog
			</p>
		</footer>
	)
}
