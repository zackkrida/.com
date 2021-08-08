import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import CustomLink from './customLink'

export default function markdownToHtml(markdown) {
	return unified()
		.use(parse)
		.use(remark2react, {
			remarkReactComponents: {
				a: CustomLink,
			},
		})
		.processSync(markdown).result
}
