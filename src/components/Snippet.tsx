import { useEffect } from 'react'
const Snippet = ({ code }: any) => {
	useEffect(() => {
		// @ts-ignore
		if (window.Prism) {
			// @ts-ignore
			window.Prism.highlightAll()
		}
	}, [code])
	return (
		<pre>
			<code className="language-javascript">{code}</code>
		</pre>
	)
}

export default Snippet
