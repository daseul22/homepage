import { getAllPostIds, getPostData } from "../../lib/posts"
import styles from "../../styles/posts.module.scss"
import Layout from "../components/layout"
import Section from "../components/section"

export async function getStaticProps({ params }) {
	const postIds = await getAllPostIds()
	const postsData = []
	for (const { params } of postIds) {
		postsData.push(await getPostData(params.id))
	}
	return {
		props: {
			postsData
		}
	}
}

export default function Posts({ postsData }) {
	return (
		<Layout>
			{postsData.map((postData, i) => {
				return <Section key={i} postData={postData} />
			})}
		</Layout>
	)
}
