import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { getPostBySlug, getAllPosts } from 'lib/api'
import markdownToHtml from 'lib/markdownToHtml'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Post({ post, posts }) {
	const router = useRouter()
	const canvas = useRef(null)
	const [showMirror, setShowMirror] = useState(false)

	useEffect(async () => {
		if (!showMirror) return

		const REGL = (await import('regl')).default
		const {
			Hydra,
			generators: { src, osc, gradient, shape, voronoi, noise },
		} = await import('hydra-ts')

		const regl = REGL({ canvas: canvas.current })
		const hydra = new Hydra({ regl, width: 1600, height: 900 })
		const { loop, sources, outputs } = hydra
		const time = hydra.synth.time
		const [s0, s1, s2, s3] = sources
		const [o0, o1, o2, o3] = outputs

		loop.start()
		s0.initCam()
		src(s0).out(o0)
		osc(10, 4, 1.7)
			.layer(src(s0).invert().luma().invert().saturate(4))
			.blend(o0, 0.94)
			.modulateScale(osc(1, 0, 1), -0.03)
			.scale(1, () => 1.05 + 0.1 * Math.sin(0.2 * time))
			.out(hydra.output)
	}, [showMirror])

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
							{/* <meta property="og:image" content={post.ogImage.url} /> */}
						</Head>

						{showMirror && <canvas className="aspect-4-3" ref={canvas} />}

						{post.image && !showMirror && (
							<Image
								className={post.image.effect === false ? 'no-effect' : ''}
								key={post.image.url}
								priority={true}
								layout={'responsive'}
								width={post.image.width}
								height={post.image.height}
								src={`/images/${post.image.url}`}
								alt={post.image.alt}
							/>
						)}

						<Link
							href="/"
							className="small"
							style={{
								visibility: post.slug !== 'index' ? 'initial' : 'hidden',
							}}
						>
							return home
						</Link>
						<h1 className="split">
							{post.title}
							<button onClick={() => setShowMirror(!showMirror)}>
								{!showMirror ? 'show the mirror' : 'hide the mirror'}
							</button>
						</h1>
						{/* <p>
                  {format(new Date(post.date), 'M/d/y')}
                </p>
                <p>
                  {post.author.name}
                </p> */}
						{/* {JSON.stringify(post.image, null, 2)}<br /> */}
						{/* {JSON.stringify(post.author, null, 2)}<br /> */}

						{content}

						<footer>
							<nav className="sitemap">
								<details>
									<summary>
										<h2>Sitemap (click to show links) ›</h2>
									</summary>
									<ul className="sitemap-links">
										{posts
											.filter((i) => i.slug !== 'index')
											.map((i) => (
												<li key={i.slug}>
													<Link href={`/${i.slug}`}>{i.title}</Link>
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
		'image',
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
