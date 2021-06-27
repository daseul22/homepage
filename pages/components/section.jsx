import styles from "./section.module.scss"
import Link from "next/link"
import React from "react"

export default function Section({ postData }) {
	return (
		<article className={styles.post}>
			<h2>
				<Link href={`/posts/${postData.id}`}>{postData.title}</Link>
			</h2>
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			<span className={styles.date}>{postData.date}</span>
		</article>
	)
}
