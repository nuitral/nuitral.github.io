import { useEffect } from 'react'

const languageMap: { [key: string]: string } = {
	js: 'javascript',
	ts: 'typescript',
	shell: 'shell',
	html: 'markup',
}

const Snippet = ({ code, language }: { code: string; language: string }) => {
	useEffect(() => {
		// @ts-ignore
		if (window.Prism) {
			// @ts-ignore
			window.Prism.highlightAll()
		}
	}, [code])
	const languageClass = languageMap[language] || 'typescript'

	return (
		<pre>
			<code className={`language-${languageClass}`}>{code}</code>
		</pre>
	)
}

export default Snippet
