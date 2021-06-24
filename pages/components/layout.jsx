import styles from "./layout.module.scss"
import Header from "./header"
import Aside from "./aside"
import Footer from "./footer"

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<Aside />
			<main className={styles.wrap}>
				<article className="page">{children}</article>
			</main>
			<Footer />
		</>
	)
}
