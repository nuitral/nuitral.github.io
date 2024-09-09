import Snippet from '../../components/Snippet.tsx'
import { NuitralButton } from '@nuitral/react-ui-suite'
import Tabs from '../../components/Tabs.tsx'
import Tab from '../../components/Tab.tsx'
import { Link } from 'react-router-dom'

const Button = () => {
	return (
		<>
			<div className="section-title">Button:</div>
			<div className="mt-1rem mb-1rem">
				Import <b>nuitral Button</b> from the library you have installed.
			</div>
			<div className="hint mb-1rem mt-1rem">
				<p>Simply start typing, and it will be imported automatically.</p>
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
			<div className="mt-1rem mb-1rem">
				The nuitral Suite provides a flexible and scalable way to manage
				component styles and colors.
			</div>
			<div className="mt-1rem mb-1rem">
				The Button is neutral white by default. To define its color, simply use
				the color attribute with the name of a color from the{' '}
				<Link to="/docs/colors" className="link-button">
					colors list
				</Link>
				.
			</div>
			<div className="hint mb-1rem mt-1rem">
				<p>
					Gradations between 100 and 900 are also supported for more precise
					color variations.
				</p>
			</div>
			<div className="mt-1rem mb-1rem">Here are some examples:</div>

			<Snippet
				code={`<NuitralButton primary>Button Text</NuitralButton>
<NuitralButton primary-400>Button Text</NuitralButton>
<NuitralButton secondary>Button Text</NuitralButton>
<NuitralButton secondary-600>Button Text</NuitralButton>
<NuitralButton accent>Button Text</NuitralButton>
<NuitralButton accent-300>Button Text</NuitralButton>
<NuitralButton success>Button Text</NuitralButton>
<NuitralButton success-700>Button Text</NuitralButton>`}
				language="html"
				fileName={'your.html'}
			></Snippet>
			<div className="mt-1rem mb-2rem">
				Here is the result of the code above:
			</div>
			<p>primary or primary-500</p>

			<NuitralButton primary>Button Text</NuitralButton>

			<p>primary-400</p>

			<NuitralButton primary-400>Button Text</NuitralButton>

			<p>secondary or seconday-500</p>

			<NuitralButton secondary>Button Text</NuitralButton>

			<p>secondary</p>

			<NuitralButton secondary-600>Button Text</NuitralButton>

			<p>accent or accent-500</p>

			<NuitralButton accent>Button Text</NuitralButton>

			<p>accent-300</p>

			<NuitralButton accent-300>Button Text</NuitralButton>

			<p>success or success-500</p>

			<NuitralButton success>Button Text</NuitralButton>

			<p>success-700</p>

			<NuitralButton success-700>Button Text</NuitralButton>
		</>
	)
}

export default Button
