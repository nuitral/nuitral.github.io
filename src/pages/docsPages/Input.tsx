import Snippet from '../../components/Snippet.tsx'
import { NuitralInput } from '@nuitral/react-ui-suite'
import Tabs from '../../components/Tabs.tsx'
import Tab from '../../components/Tab.tsx'
import { useState } from 'react'

const Input = () => {
	const [inputValue, setInputValue] = useState<string | number>('Input test')
	return (
		<>
			<div className="section-title">Input:</div>
			<div className="mt-1rem mb-1rem">
				Import <b>nuitral Input</b> from the library you have installed.
			</div>
			<Tabs>
				<Tab label="React">
					<Snippet
						code={`import { NuitralInput } from '@nuitral/react-ui-suite';\nimport { useState } from 'react';\n\nconst ReactComponent = () => {\n  const [inputValue, setInputValue] = useState<string | number>('Input test');\n\n  return (\n    <NuitralInput\n      value={inputValue}\n      onChange={setInputValue}\n      placeholder={'placeholder'}\n      icon={'user'}\n    ></NuitralInput>\n  );\n};\n\nexport default ReactComponent;`}
						language="tsx"
						fileName={'ReactComponent.tsx'}
					></Snippet>
				</Tab>
				<Tab label="Vue">
					<Snippet
						code={`<script setup lang="ts">\nimport { ref } from 'vue';\nimport { NuitralInput } from '@nuitral/vue-ui-suite';\n\nconst inputModel = ref('Input test');\n</script>\n\n<template>\n  <NuitralInput v-model="inputModel" placeholder="placeholder" icon="user"></NuitralInput>\n</template>`}
						language="vue"
						fileName={'VueComponent.vue'}
					></Snippet>
				</Tab>
			</Tabs>

			<div className="mt-1rem mb-1rem">
				<p>
					<b>NuitralInput</b> component supports various props such as:
				</p>
				<ul>
					<li>
						<b>placeholder</b>: A string that provides a short hint describing
						the expected value of the input field.
					</li>
					<li>
						<b>icon</b>: The icon from the icon set displayed inside the input
						(e.g., 'user').
					</li>
					<li>
						<b>iconPosition</b>: Determines whether the icon appears on the left
						or right side of the input. Accepts <code>'left'</code> (default) or{' '}
						<code>'right'</code>.
					</li>
					<li>
						<b>type</b>: Specifies the input type (e.g., <code>'text'</code>,{' '}
						<code>'password'</code>, <code>'email'</code>).
					</li>
					<li>
						<b>disabled</b>: Disables the input field when set to{' '}
						<code>true</code>.
					</li>
				</ul>
			</div>

			<div className="mt-1rem mb-1rem">Here are some examples:</div>

			<Tabs>
				<Tab label="React">
					<Snippet
						code={`import { NuitralInput } from '@nuitral/react-ui-suite';\nimport { useState } from 'react';\n\nconst ReactComponent = () => {\n  const [inputValue, setInputValue] = useState<string | number>('Input test');\n\n  return (\n    <>\n      <NuitralInput\n        value={inputValue}\n        onChange={setInputValue}\n        placeholder={'placeholder'}\n        icon={'user'}\n      ></NuitralInput>\n\n      <NuitralInput\n        value={inputValue}\n        onChange={setInputValue}\n        icon={'user'}\n        placeholder={'placeholder'}\n        iconPosition={'right'}\n        type={'password'}\n      ></NuitralInput>\n\n      <NuitralInput\n        value={inputValue}\n        onChange={setInputValue}\n        placeholder={'placeholder'}\n        disabled\n      ></NuitralInput>\n    </>\n  );\n};\n\nexport default ReactComponent;`}
						language="tsx"
						fileName={'ReactComponent.tsx'}
					></Snippet>
				</Tab>
				<Tab label="Vue">
					<Snippet
						code={`<script setup lang="ts">\nimport { ref } from 'vue';\nimport { NuitralInput } from '@nuitral/vue-ui-suite';\n\nconst inputModel = ref('Input test');\n</script>\n\n<template>\n  <NuitralInput v-model="inputModel" placeholder="placeholder" icon="user"></NuitralInput>\n  <NuitralInput v-model="inputModel" placeholder="placeholder" icon="user" type="password" icon-position="right"></NuitralInput>\n  <NuitralInput v-model="inputModel" placeholder="placeholder" :disabled="true"></NuitralInput>\n</template>`}
						language="vue"
						fileName={'VueComponent.vue'}
					></Snippet>
				</Tab>
			</Tabs>

			<div className="mt-1rem mb-2rem">
				Here is the result of the code above:
			</div>
			<p>Input with icon on the left:</p>
			<NuitralInput
				value={inputValue}
				onChange={setInputValue}
				placeholder={'placeholder'}
				icon={'user'}
			></NuitralInput>

			<p>Input with icon on the right and password type:</p>
			<NuitralInput
				value={inputValue}
				onChange={setInputValue}
				icon={'user'}
				placeholder={'placeholder'}
				iconPosition={'right'}
				type={'password'}
			></NuitralInput>

			<p>Disabled input:</p>
			<NuitralInput
				value={'Input test'}
				onChange={() => {}}
				placeholder={'placeholder'}
				disabled
			></NuitralInput>
		</>
	)
}

export default Input
