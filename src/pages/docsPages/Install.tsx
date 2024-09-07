import Snippet from '../../components/Snippet.tsx'
import Tabs from '../../components/Tabs.tsx'
import Tab from '../../components/Tab.tsx'

const Install = () => {
	return (
		<>
			<div className="section-title">How to install:</div>
			<div className="mt-1rem mb-1rem">
				Install <b>nuitral</b> by running this command on your terminal.
			</div>
			<Tabs>
				<Tab label="React">
					<Snippet
						code="npm i @nuitral/react-ui-suite"
						language="shell"
						fileName={'shell'}
					></Snippet>
				</Tab>
				<Tab label="Vue">
					<Snippet
						code="npm i @nuitral/vue-ui-suite"
						language="shell"
						fileName={'shell'}
					></Snippet>
				</Tab>
			</Tabs>
			<div className="section-title mb-1rem mt-2rem">How to use:</div>
			<div>
				Import the <b>nuitral theme</b> from the theming library in your SCSS
				entry point.
			</div>
			<div className="mb-1rem">Already included with the UI suite.</div>
			<Snippet
				code={`@use '@nuitral/theming/dist/scss/_index.scss' as nuitral;\n\n@include nuitral.generate-theme(\n  nuitral.$light-mode,\n  nuitral.$dark-mode\n);`}
				language="scss"
				fileName={'index.scss'}
			/>
			<div className="section-title mb-1rem mt-2rem">Display a component:</div>
			<div>
				Import the <b>nuitral component</b> from the library you have installed.
			</div>
			<Tabs>
				<Tab label="React">
					<Snippet
						code={`import { NuitralButton } from '@nuitral/react-ui-suite';\n\nconst ReactComponent = () => {\n  return (\n    <NuitralButton>Button Text</NuitralButton>\n  );\n}; \n\nexport default ReactComponent;`}
						language="ts"
						fileName={'ReactComponent.tsx'}
					></Snippet>
				</Tab>
				<Tab label="Vue">
					<Snippet
						code={`<script setup lang="ts">\nimport { NuitralButton } from '@nuitral/vue-ui-suite';\n</script>`}
						language="ts"
						fileName={'VueComponent.vue'}
					></Snippet>
					<Snippet
						code={`<template>\n  <NuitralButton>Button Text</NuitralButton>\n</template>`}
						language="html"
						fileName={'VueComponent.vue'}
					></Snippet>
				</Tab>
			</Tabs>
		</>
	)
}

export default Install
