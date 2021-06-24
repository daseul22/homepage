import Layout from "../components/layout"
import { getAllPostIds, getPostData } from "../../lib/posts"
import Head from "next/head"
import styles from "../../styles/markdown.module.scss"
import Date from "../components/date"

export async function getStaticPaths() {
	const paths = getAllPostIds()
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps(props) {
	const { params } = props
	console.log(params)
	const postData = await getPostData(params.id)
	console.log(postData.date)
	return {
		props: {
			postData
		}
	}
}

export default function Post({ postData }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			{postData.title}
			<br />
			{postData.id}
			<br />
			<Date dateString={postData.date} />
			<br />
			<div
				className={styles["basic-theme"]}
				dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
			/>
		</Layout>
	)
}
