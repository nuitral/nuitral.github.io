import Tabs from '../../components/Tabs.tsx'
import Tab from '../../components/Tab.tsx'
import Snippet from '../../components/Snippet.tsx'
import { NuitralIcon } from '@nuitral/react-ui-suite'
import { Link } from 'react-router-dom'

const IconCmp = () => {
	return (
		<>
			<div className="section-title">Icon:</div>
			<div className="mt-1rem mb-1rem">
				To use the icons in your project, import the <code>@nuitral/icons</code>{' '}
				SCSS file into the root of your stylesheet or directly into your Vue{' '}
				<code>main.ts</code> or React <code>main.tsx</code>.
			</div>
			<Tabs>
				<Tab label="Stylesheet">
					<Snippet
						code={`@import '@nuitral/icons/dist/nuitral-icons.scss';`}
						language="scss"
						fileName="index.scss"
					></Snippet>
				</Tab>
				<Tab label="Vue (main.ts)">
					<Snippet
						code={`import { createApp } from 'vue';\nimport App from './App.vue';\nimport '@nuitral/icons/dist/nuitral-icons.scss';\n\ncreateApp(App).mount('#app');`}
						language="ts"
						fileName="main.ts"
					></Snippet>
				</Tab>
				<Tab label="React (main.tsx)">
					<Snippet
						code={`import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\nimport '@nuitral/icons/dist/nuitral-icons.scss';\n\nReactDOM.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>,\n  document.getElementById('root')\n);`}
						language="tsx"
						fileName="main.tsx"
					></Snippet>
				</Tab>
			</Tabs>

			<div className="mt-1rem mb-1rem">
				Import <b>nuitral icon component </b> from the library you have
				installed.
			</div>
			<Tabs>
				<Tab label="React">
					<Snippet
						code={`import { NuitralIcon } from '@nuitral/react-ui-suite';\n\nconst ReactComponent = () => {\n  return (\n    <NuitralIcon icon={'user'}/>\n  );\n}; \n\nexport default ReactComponent;`}
						language="ts"
						fileName={'ReactComponent.tsx'}
					></Snippet>
				</Tab>
				<Tab label="Vue">
					<Snippet
						code={`<script setup lang="ts">\nimport { NuitralIcon } from '@nuitral/vue-ui-suite';\n</script>`}
						language="ts"
						fileName={'VueComponent.vue'}
					></Snippet>
					<Snippet
						code={`<template>\n  <NuitralIcon :icon="'user'"/>\n</template>`}
						language="html"
						fileName={'VueComponent.vue'}
					></Snippet>
				</Tab>
			</Tabs>

			<div className="hint mb-1rem mt-1rem">
				<p>Here is the result of the code above:</p>
				<NuitralIcon icon={'user'} />
				<p>
					All icons are mapped, allowing you to easily use the{' '}
					<b>NuitralIcon</b> component. To get started, select an icon from this{' '}
					<Link to="/docs/icons" className="link-button">
						icon list
					</Link>
					.
				</p>
				<p>
					Once you've chosen your icon, simply assign its name to the{' '}
					<b>icon</b> prop, as shown in the example above.
				</p>
			</div>
		</>
	)
}

export default IconCmp
