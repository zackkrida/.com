import klaw from 'klaw'
import {mkdir, remove, writeFile, copy} from 'fs-extra'
const md = require('markdown-it')()

const pagesDir = 'pages'
const assetDir = 'resources'
const outputDir = 'public'

/**
 * This is the build script for zackkrida.com!
 * Cool, basicaly building my own static site generator
 */


// Create directories and build pages as needed
async function build() {
	await remove(outputDir)
	await mkdir(outputDir)
	await copy(assetDir, outputDir)

	for await (const file of klaw(pagesDir)) {
		if(file.path.endsWith(pagesDir)) {
			continue
		}

		if(file.stats.isDirectory()) {
			await mkdir(`${outputDir}/${file.path.split(`${pagesDir}/`)[1]}`)
		} else {
			let {meta, page} = await import(`./${pagesDir}/${file.path.split(`${pagesDir}/`)[1]}`)
			let pageMarkdownContent = md.render(page)
			let finalPage = `
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<meta http-equiv="X-UA-Compatible" content="ie=edge">
				<meta name="description" content="personal site of zack krida. i write javascript for moneyyyyy">
				<title>${meta.name} ~ zackkrida.com</title>
				<style>
					* {
						box-sizing: border-box;
						margin: 0;
						padding: 0;
					}

					body {
						display: block;
						margin: 0;
						font-family: BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
						padding: 2em 1.5em;
						font-size: 16px;
						background: #fff6f2;
						text-transform: lowercase;
					}

					p,
					ul {
						font-size: 18px;
					}

					body:after {
						content: '';
						display: block;
						position: fixed;
						top: 0;
						left: 0;
						width: calc(100% - 1em);
						height: calc(100vh - 1em);
						border: .5em solid #0a97b7;
						pointer-events: none;
					}

					p,
					ul {
						line-height: 1.8;
					}

					ul {
						padding-left: 1em;
					}

					header,
					main,
					footer {
						width: 38rem;
						max-width: 100%;
						display: block;
						margin: 0 auto;
					}

					h1 {
						margin-bottom: .5em;
					}

					h2 {
						font-weight: normal;
					}

					h2,
					h3,
					h4,
					h5,
					h5,
					h6,
					p,
					ul {
						margin-bottom: 1em;
					}

					a,
					a:visited {
						text-decoration: none;
						color: rebeccapurple;
						padding-bottom: 2px;
						border-bottom: 2px solid currentcolor;
					}
				</style>
			</head>

			<body>
				<header>
					<h1>Zack Krida is remotely building software for distributed teams.</h1>
					<h2>Current location: Pahoa, Hawaii</h2>
				</header>

				<main>
					${pageMarkdownContent}
				</main>

				<footer>
					<h2>Want to know more?</h2>
					<p>You can find me on most social media platforms <b>@zackkrida</b>. For the most direct access, email me at
						<a href="mailto:sayhi@zackkrida.com">sayhi@zackkrida.com.</a></p>
					<p>Additionally, you can view my resume <a href="https://represent.io/zackkrida">here (html)</a> or here <a
							href="https://represent.io/zackkrida.pdf">or here
							(PDF)</a>.
						</ul>
						</nav>
				</footer>
			</body>
			`
			await writeFile(`${outputDir}/${file.path.split(`${pagesDir}/`)[1].replace('.ts', '.html')}`, finalPage)
		}
 }
}

try {
	build()
} catch(error) {
	console.error(error)
	process.exit(0)
}
