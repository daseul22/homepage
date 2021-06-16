import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { getSortedPostsData } from "../lib/posts"
import Layout from "./components/layout"

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData
		}
	}
}

export default function Home({ allPostsData }) {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<p>HOME ARITICLE</p>
				<p>{allPostsData.title}</p>
			</Layout>
		</>
	)
}
