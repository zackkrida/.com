import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { getPostBySlug, getAllPosts } from 'lib/api'
import markdownToHtml from 'lib/markdownToHtml'
import { format } from 'date-fns'
import { Illustration, Ellipse, useRender, Anchor } from 'react-zdog'
import { useRef } from 'react'

function Spin({ children }) {
	const ref = useRef(undefined)
	useRender((t) => (ref.current.rotate.y += 0.03))
	return <Anchor ref={ref}>{children}</Anchor>
}

export default function Post({ post, morePosts, preview }) {
	const router = useRouter()
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />
	}
	return (
		<div>
			{router.isFallback ? (
				<PostTitle>Loading…</PostTitle>
			) : (
				<>
					<article>
						<Head>
							<title>{post.title} ~ zack.cat</title>
							<meta property="og:image" content={post.ogImage.url} />
						</Head>

						<div style={{ width: '100%', height: '146px' }}>
							<Illustration zoom={9}>
								<Spin>
									<Ellipse
										color="#636"
										rotate={{ x: Math.PI }}
										stroke={2}
										diameter={14}
									/>
								</Spin>
								<Ellipse
									color="#636"
									rotate={{ x: Math.PI }}
									stroke={2}
									diameter={14}
								/>
							</Illustration>
						</div>

						<div>
							<h1>{post.title}</h1>
							{/* <p>
                  {format(new Date(post.date), 'M/d/y')}
                </p>
                <p>
                  {post.author.name}
                </p> */}
							{/* {JSON.stringify(post.coverImage, null, 2)}<br /> */}
							{/* {JSON.stringify(post.author, null, 2)}<br /> */}

							<div dangerouslySetInnerHTML={{ __html: post.content }} />
						</div>
					</article>
				</>
			)}
		</div>
	)
}

export async function getStaticProps({ params }) {
	const slug = Array.isArray(params.slug) ? params.slug[0] : 'index' // special case for homepage
	const post = getPostBySlug(slug || 'index', [
		'title',
		'date',
		'slug',
		'author',
		'content',
		'ogImage',
		'coverImage',
	])
	const content = await markdownToHtml(post.content || '')

	return {
		props: {
			post: {
				...post,
				content,
			},
		},
	}
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
