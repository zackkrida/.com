import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { getPostBySlug, getAllPosts } from 'lib/api'
import markdownToHtml from 'lib/markdownToHtml'
import Link from 'next/link'
import { format } from 'date-fns'
import { useEffect, useState } from 'react'

export default function Post({ post, posts }) {
	const router = useRouter()

	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />
	}

	const content = markdownToHtml(post.content || '')

	return (
		<div>
			{router.isFallback ? (
				<PostTitle>Loading…</PostTitle>
			) : (
				<>
					<article className="content">
						<Head>
							<title>{post.title} ~ zack.cat</title>
							<meta property="og:image" content={post.ogImage.url} />
						</Head>

						<div>
							<Link href="/">
								<a
									style={{
										visibility: post.slug !== 'index' ? 'initial' : 'hidden',
									}}
								>
									Return home
								</a>
							</Link>
							<h1>{post.title}</h1>
							{/* <p>
                  {format(new Date(post.date), 'M/d/y')}
                </p>
                <p>
                  {post.author.name}
                </p> */}
							{/* {JSON.stringify(post.coverImage, null, 2)}<br /> */}
							{/* {JSON.stringify(post.author, null, 2)}<br /> */}

							{content}

							<footer>
								<nav class="sitemap">
									<details>
										<summary>
											<h2>Sitemap (click to show links) ›</h2>
										</summary>
										<ul class="sitemap-links">
											{posts
												.filter((i) => i.slug !== 'index')
												.map((i) => (
													<li key={i.slug}>
														<Link href={`/${i.slug}`}>
															<a>{i.title}</a>
														</Link>
													</li>
												))}
										</ul>
									</details>
								</nav>

								<p className="small">
									Content on this site is licensed under a{' '}
									<a href="https://creativecommons.org/licenses/by/4.0/">
										Creative Commons Attribution 4.0 International license
									</a>
									.
								</p>
							</footer>
						</div>
					</article>
				</>
			)}
		</div>
	)
}

export async function getStaticProps({ params }) {
	const slug = Array.isArray(params.slug) ? params.slug[0] : 'index' // special case for homepage
	const posts = getAllPosts(['slug', 'title'])
	const post = getPostBySlug(slug || 'index', [
		'title',
		'date',
		'slug',
		'author',
		'content',
		'ogImage',
		'coverImage',
	])

	return { props: { post, posts } }
}

export async function getStaticPaths() {
	const posts = getAllPosts(['slug'])
	const paths = posts.map((post) => {
		return {
			params: {
				slug: [post.slug === 'index' ? '' : post.slug],
			},
		}
	})

	return {
		paths,
		fallback: false,
	}
}
