import { useEffect } from 'react'

const languageMap: { [key: string]: string } = {
	js: 'javascript',
	ts: 'typescript',
	shell: 'shell',
	html: 'markup',
	scss: 'scss',
}

const Snippet = ({
	code,
	language,
	fileName,
}: {
	code: string
	language: string
	fileName?: string
}) => {
	useEffect(() => {
		// @ts-ignore
		if (window.Prism) {
			// @ts-ignore
			window.Prism.highlightAll()
		}
	}, [code])
	const languageClass = languageMap[language] || 'typescript'

	return (
		<div className="snippet-container">
			{fileName && <div className="snippet-filename">{fileName}</div>}
			<pre>
				<code className={`language-${languageClass}`}>{code}</code>
			</pre>
		</div>
	)
}

export default Snippet
