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
			<div className="section-title mb-1rem mt-2rem">
				Import nuitral theming:
			</div>
			<div>
				Import and use the <b>the nuitral theming hook</b> from the library you
				have installed.
			</div>
			<div className="hint mb-1rem mt-1rem">
				<p>
					Use this hook in the component where you want to manage the dark/light
					mode toggle and theme switching.
				</p>
			</div>

			<Tabs>
				<Tab label="React">
					<Snippet
						code={`import { useNuitralTheming } from '@nuitral/react-ui-suite'\n\nconst ReactComponent = () => {\n useNuitralTheming({\n\t\ttheme: 'nuitral',\n\t\tdarkMode: true,\n\t\tid: 'demo-app',\n\t}) \n return <></>;\n}; \n\nexport default ReactComponent;`}
						language="ts"
						fileName={'ReactComponent.tsx'}
					></Snippet>
				</Tab>
				<Tab label="Vue">
					<Snippet
						code={`<script setup lang="ts">\nimport { useNuitralTheming } from '@nuitral/vue-ui-suite';\n...\n useNuitralTheming({\n\t\ttheme: 'nuitral',\n\t\tdarkMode: true,\n\t\tid: 'demo-app',\n\t})\n...\n</script>`}
						language="ts"
						fileName={'VueComponent.vue'}
					></Snippet>
				</Tab>
			</Tabs>

			<div className="hint mt-1_5rem mb-1rem">
				<p>
					<b>theme</b>: Specifies the default theme to be applied when landing
					on the page. The default theme is 'nuitral'.
				</p>
				<p>
					<b>darkMode</b>: Indicates whether the dark mode is enabled by
					default. To set the light mode as the default, set this to false.
				</p>
				<p>
					<b>id</b>: Refers to the ID of the element to which the theming will
					be applied.
				</p>
			</div>

			<div className="mb-1rem">
				Below is an example demonstrating how this hook works:
			</div>

			<Snippet
				code={`<html id="demo-app" nuitral-theme="nuitral" class="nuitral-dark-mode">\n ... \n</html>`}
				language="html"
				fileName={'index.html'}
			></Snippet>

			<div className="hint mt-1_5rem mb-1rem">
				<p>
					'demo-app' is the selector where the theme and the selected mode are
					applied.{' '}
				</p>
				<p>
					In this case, id='demo-app' has been manually managed in the
					index.html file.
				</p>
				<p>
					{' '}
					In the future, it will be possible to handle everything automatically
					through the previously described hook.
				</p>
			</div>

			<div className="section-title mb-1rem mt-2rem">Display a component:</div>
			<div className="mb-1rem">
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
