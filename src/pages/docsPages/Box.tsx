import Tab from '../../components/Tab.tsx'
import Snippet from '../../components/Snippet.tsx'
import Tabs from '../../components/Tabs.tsx'
import { Link } from 'react-router-dom'
import { NuitralBox } from '@nuitral/react-ui-suite'

const Box = () => {
	return (
		<>
			<div className="section-title">Box:</div>
			<div className="mt-1rem mb-1rem">
				Import <b>nuitral Box</b> from the library you have installed.
			</div>
			<Tabs>
				<Tab label="React">
					<Snippet
						code={`import { NuitralBox } from '@nuitral/react-ui-suite';\n\nconst ReactComponent = () => {\n  return (\n    <NuitralBox title="Box Title" description="Box Description" />\n  );\n};\n\nexport default ReactComponent;`}
						language="ts"
						fileName={'ReactComponent.tsx'}
					></Snippet>
				</Tab>
				<Tab label="Vue">
					<Snippet
						code={`<script setup lang="ts">\nimport { NuitralBox } from '@nuitral/vue-ui-suite';\n</script>`}
						language="ts"
						fileName={'VueComponent.vue'}
					></Snippet>
					<Snippet
						code={`<template>\n  <NuitralBox title="Box Title" description="Box Description" />\n</template>`}
						language="html"
						fileName={'VueComponent.vue'}
					></Snippet>
				</Tab>
			</Tabs>
			<div className="mt-1rem mb-1rem">
				The <b>nuitral UI Suite</b> provides a flexible and scalable way to
				manage component styles and colors.
			</div>
			<div className="mt-1rem mb-1rem">
				The Box border is neutral white by default. To define its color, simply
				use the color attribute with the name of a color from the{' '}
				<Link to="/docs/colors" className="link-button">
					colors list
				</Link>
				.
			</div>
			<div className="mt-1rem mb-2rem">
				<p>On hover, the component dynamically adjusts its styles:</p>
				<ul>
					<li>
						<b>Background Color</b>: Becomes 40% lighter than the original
						color, creating a brighter appearance.
					</li>
					<li>
						<b>Text Color</b>: Becomes 30% darker than the original color,
						ensuring optimal contrast and readability against the lighter
						background.
					</li>
				</ul>
			</div>
			<div className="hint mb-1rem mt-1rem">
				<p>
					Gradations between 100 and 900 are also supported for more precise
					color variations.
				</p>
			</div>
			<div className="mt-1rem mb-1rem">Here are some examples:</div>
			<Snippet
				code={`<NuitralBox primary title="Primary Box" description="This is a primary or primary-500 box" />
<NuitralBox primary-700 title="Primary 700 Box" description="This is a primary-700 box" />
<NuitralBox primary-200 title="Primary 200 Box" description="This is a primary-200 box" />
<NuitralBox secondary-900 title="Secondary 900 Box" description="This is a secondary-900 box" />
<NuitralBox secondary-100 title="Secondary 100 Box" description="This is a secondary-100 box" />
<NuitralBox accent-800 title="Accent 800 Box" description="This is an accent-800 box" />
<NuitralBox accent-200 title="Accent 200 Box" description="This is an accent-200 box" />
<NuitralBox success-700 title="Success 700 Box" description="This is a success-700 box" />
<NuitralBox success-300 title="Success 300 Box" description="This is a success-300 box" />`}
				language="html"
				fileName={'your.html'}
			></Snippet>

			<div className="mt-1rem mb-2rem">
				Here is the result of the code above:
			</div>

			<p>primary or primary-500</p>

			<NuitralBox
				primary
				title="Primary Box"
				description="This is a primary or primary-500 box"
			/>

			<p>primary-700</p>

			<NuitralBox
				primary-700
				title="Primary 700 Box"
				description="This is a primary-700 box"
			/>

			<p>primary-200</p>

			<NuitralBox
				primary-200
				title="Primary 200 Box"
				description="This is a primary-200 box"
			/>

			<p>secondary-900</p>

			<NuitralBox
				secondary-900
				title="Secondary 900 Box"
				description="This is a secondary-900 box"
			/>

			<p>secondary-100</p>

			<NuitralBox
				secondary-100
				title="Secondary 100 Box"
				description="This is a secondary-100 box"
			/>

			<p>accent-800</p>

			<NuitralBox
				accent-800
				title="Accent 800 Box"
				description="This is an accent-800 box"
			/>

			<p>accent-200</p>

			<NuitralBox
				accent-200
				title="Accent 200 Box"
				description="This is an accent-200 box"
			/>

			<p>success-700</p>

			<NuitralBox
				success-700
				title="Success 700 Box"
				description="This is a success-700 box"
			/>

			<p>success-300</p>

			<NuitralBox
				success-300
				title="Success 300 Box"
				description="This is a success-300 box"
			/>
		</>
	)
}
export default Box
