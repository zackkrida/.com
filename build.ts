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

	const directories = []
	const files = []

	for await (const file of klaw(pagesDir)) {
		if(file.path.endsWith(pagesDir)) {
			continue
		}

		if(file.stats.isDirectory()) {
			directories.push(`${outputDir}/${file.path.split(`${pagesDir}/`)[1]}`)
		} else {
			const { meta, page } = await import(`./${pagesDir}/${file.path.split(`${pagesDir}/`)[1]}`)
			const content = md.render(page)
			files.push({path: `${outputDir}/${file.path.split(`${pagesDir}/`)[1].replace('.ts', '.html')}`, content: getPageString(meta, content) })
		}
	}

	await Promise.all(directories.map(dirname => mkdir(dirname)))
	await Promise.all(files.map(({path, content}) => writeFile(path,content)))
}

try {
	build()
} catch(error) {
	console.error(error)
	process.exit(0)
}

function getPageString(meta: PageMeta, content: string) {
	return `
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

			p:last-of-type {
				margin-bottom: 2.5em;
			}

			p + h2,
			p + h3,
			p + h4,
			p + h5,
			p + h6 {
				margin-top: 2.5em;
			}

			a,
			a:visited {
				text-decoration: none;
				color: rebeccapurple;
				padding-bottom: 2px;
				border-bottom: 2px solid currentcolor;
			}

			img {
				width: 400px;
				max-width: 100%;
				border: .5em solid #ff7e95;
			}

			@media screen and (min-width: 940px) {
				img {
					float: left;
					margin: 0 1.5em 0 -25%;
				}
			}

			pre {
				display: block;
				width: 100%;
				background-color: #ff7e95;
				border-radius: 4px;
				padding: 1em;
		}

		</style>
	</head>

	<body>
		<header>
			<h1>Zack Krida is remotely building software for distributed teams.</h1>
			<h2>Current location: Pahoa, Hawaii</h2>
		</header>

		<main>
			${content}
		</main>

		<footer>
			<h2>Want to know more?</h2>
			<p>You can find me on most social media platforms <b>@zackkrida</b>. For the most direct access, email me at
				<a href="mailto:sayhi@zackkrida.com">sayhi@zackkrida.com.</a></p>
			<p>Additionally, you can view my resume <a href="https://represent.io/zackkrida">here (html)</a> or here <a
					href="https://represent.io/zackkrida.pdf">or here
					(PDF)</a>.</p>
			<h2>About this site</h2>
			<p>I made this site on <b>Friday January 24th, 2019</b> in a McDonalds in Keaʻau, Hawaii. It uses a single-file custom static site generator to turn TypeScript files into html pages. I will make improvements soon and will keep a changelog. For now you can view the code on Github  <a href="https://github.com/zackkrida/.com">here.</a>
	`
}

interface PageMeta {
	name: string
}
