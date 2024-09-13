import Tabs from '../../components/Tabs.tsx'
import Tab from '../../components/Tab.tsx'
import Snippet from '../../components/Snippet.tsx'
import { NuitralIcon } from '@nuitral/react-ui-suite'
import { Link } from 'react-router-dom'

const IconCmp = () => {
	return <>
		<div className="section-title">Icon:</div>
		<div className="mt-1rem mb-1rem">
			To use the icons in your project, import the @nuitra/icons SCSS file into the root of your stylesheet
		</div>
		<Snippet code={`@import '@nuitral/icons/dist/nuitral-icons.scss;'`} language='scss' fileName='index.scss'></Snippet>

		<div className="mt-1rem mb-1rem">
			Import <b>nuitral icon component </b> from the library you have installed.
		</div>
		<div className="hint mb-1rem mt-1rem">
			<p>Simply start typing, and it will be imported automatically.</p>
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
			<NuitralIcon icon={'user'}/>
			<p>
				All icons are mapped, allowing you to easily use the <b>NuitralIcon</b> component.
				To get started, select an icon from this {' '}
				<Link to="/docs/icons" className="link-button">icon list</Link>.
			</p>
			<p>
				Once you've chosen your icon, simply assign its name to the <b>icon</b> prop, as shown in the example above.
			</p>
		</div>
	</>
}

export default IconCmp