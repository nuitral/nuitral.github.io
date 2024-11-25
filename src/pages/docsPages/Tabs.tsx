import Snippet from '../../components/Snippet.tsx'
import { NuitralTabs, NuitralTab } from '@nuitral/react-ui-suite'
import { Link } from 'react-router-dom'

const Tabs = () => {
	return (
		<>
			<div className="section-title">Tabs:</div>
			<div className="mt-1rem mb-1rem">
				Import <b>nuitral Tabs</b> and <b>nuitral Tab</b> from the installed
				library.
			</div>
			<NuitralTabs primary>
				<NuitralTab label="React">
					<div className="mt-1rem mb-1rem">
						It is possible to define tabs using the <b>items</b> prop by
						providing an array of tab definitions:
					</div>
					<Snippet
						code={`import { useState } from 'react';
import { NuitralTabs, NuitralTab } from '@nuitral/react-ui-suite';
import DemoComponentOne from './DemoComponentOne';
import DemoComponentTwo from './DemoComponentTwo';

const [tabItems, setTabItems] = useState<Partial<NuitralTabProps>[]>([
  {
    label: 'A',
    icon: 'user',
    component: DemoComponentOne,
  },
  { label: 'B', icon: 'basket', component: DemoComponentTwo },
  { label: 'C', icon: 'basket', component: null, disabled: true },
]);

const ReactTabsExample = () => {
  return (
    <NuitralTabs
      primary
      selected={0}
      items={tabItems}
      onSelection={(e) => console.log(e)}
    />
  );
};

export default ReactTabsExample;`}
						language="tsx"
						fileName={'ReactComponent.tsx'}
					></Snippet>
					<div className="mt-1rem mb-1rem">
						Alternatively, tabs can be defined directly using <b>NuitralTab</b>{' '}
						components:
					</div>
					<Snippet
						code={`<NuitralTabs primary onSelection={(e) => console.log(e)}>
  <NuitralTab label="A" icon="user">
    <DemoComponentOne />
  </NuitralTab>
  <NuitralTab label="B" icon="basket">
    <DemoComponentTwo />
  </NuitralTab>
  <NuitralTab label="C" icon="basket" disabled>
    This content will not be visible because the tab is disabled.
  </NuitralTab>
</NuitralTabs>`}
						language="tsx"
						fileName={'ReactComponent.tsx'}
					></Snippet>
					<div className="mt-1rem mb-1rem">
						The <b>onSelection</b> prop is a callback function that is invoked
						when a tab is selected. It receives the content, index, and item of
						the selected tab, giving you access to properties like label, icon,
						and component for easier customization or handling.
					</div>
				</NuitralTab>
				<NuitralTab label="Vue">
					<div className="mt-1rem mb-1rem">
						It is possible to define tabs using the <b>items</b> prop by
						providing an array of tab definitions:
					</div>
					<Snippet
						code={`<script setup lang="ts">
import { ref } from 'vue';
import { NuitralTabs, NuitralTab } from '@nuitral/vue-ui-suite';
import DemoComponentOne from './DemoComponentOne.vue';
import DemoComponentTwo from './DemoComponentTwo.vue';

const tabItems = ref<Partial<NuitralTabProps>[]>([
  {
    label: 'A',
    icon: 'user',
    component: DemoComponentOne,
  },
  { label: 'B', icon: 'basket', component: DemoComponentTwo },
  { label: 'C', icon: 'basket', component: null, disabled: true },
]);
</script>

<template>
  <NuitralTabs
    primary
    :selected="0"
    :items="tabItems"
    @onSelection="($event) => { console.log($event) }"
  />
</template>`}
						language="vue"
						fileName={'VueComponent.vue'}
					></Snippet>
					<div className="mt-1rem mb-1rem">
						Alternatively, tabs can be defined directly using <b>NuitralTab</b>{' '}
						components:
					</div>
					<Snippet
						code={`<template>
  <NuitralTabs primary @onSelection="($event) => { console.log($event) }">
    <NuitralTab label="A" icon="user">
      <DemoComponentOne />
    </NuitralTab>
    <NuitralTab label="B" icon="basket">
      <DemoComponentTwo />
    </NuitralTab>
    <NuitralTab label="C" icon="basket" :disabled="true">
      This content will not be visible because the tab is disabled.
    </NuitralTab>
  </NuitralTabs>
</template>`}
						language="vue"
						fileName={'VueComponent.vue'}
					></Snippet>
					<div className="mt-1rem mb-1rem">
						The <b>onSelection</b> emit is an event handler that is triggered
						when a tab is selected. It receives the content, index, and item of
						the selected tab, giving you access to properties like label, icon,
						and component for easier customization or handling.
					</div>
				</NuitralTab>
			</NuitralTabs>
			<div className="mt-1rem mb-1rem">
				The <b>Nuitral UI Suite</b> offers a flexible and scalable way to manage
				components and their styles.
			</div>
			<div className="mt-1rem mb-1rem">
				The Tabs component is neutral by default. To specify its color, simply
				use the color attribute with the name of a color from the{' '}
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
				code={`<NuitralTabs primary>
  <NuitralTab label="Tab 1">Content 1</NuitralTab>
  <NuitralTab label="Tab 2">Content 2</NuitralTab>
</NuitralTabs>

<NuitralTabs secondary-400>
  <NuitralTab label="Tab A">Content A</NuitralTab>
  <NuitralTab label="Tab B">Content B</NuitralTab>
</NuitralTabs>

<NuitralTabs accent>
  <NuitralTab label="Tab X">Content X</NuitralTab>
  <NuitralTab label="Tab Y">Content Y</NuitralTab>
</NuitralTabs>`}
				language="tsx"
				fileName={''}
			></Snippet>

			<div className="mt-1rem mb-2rem">
				The following is the result of the code above:
			</div>

			<p>
				Tabs with <b>primary</b> color:
			</p>
			<NuitralTabs primary>
				<NuitralTab label="Tab 1">Content 1</NuitralTab>
				<NuitralTab label="Tab 2">Content 2</NuitralTab>
			</NuitralTabs>

			<p className="mt-1rem">
				Tabs with <b>secondary-400</b> color:
			</p>
			<NuitralTabs secondary-400>
				<NuitralTab label="Tab A">Content A</NuitralTab>
				<NuitralTab label="Tab B">Content B</NuitralTab>
			</NuitralTabs>

			<p className="mt-1rem">
				Tabs with <b>accent</b> color:
			</p>
			<NuitralTabs accent>
				<NuitralTab label="Tab X">Content X</NuitralTab>
				<NuitralTab label="Tab Y">Content Y</NuitralTab>
			</NuitralTabs>

			<div className="mt-1rem mb-1rem">
				It is also possible to add icons, custom content on the left or right,
				and manage the active state of the tabs.
			</div>

			<div className="mt-1rem mb-1rem">Advanced example:</div>

			<NuitralTabs primary>
				<NuitralTab label="React">
					<div className="mt-1rem mb-1rem">
						The advanced example in React can be implemented as follows:
					</div>
					<Snippet
						code={`<NuitralTabs primary selected={2}>
  <NuitralTab label="Tab with Icon" icon="user">
    Content of Tab with Icon
  </NuitralTab>
  <NuitralTab label="Disabled Tab" disabled>
    This content will not be visible because the tab is disabled.
  </NuitralTab>
  <NuitralTab label="Tab with leftSide and rightSide" leftSide={<div>L - </div>} rightSide={<div>- R</div>}>
    Tab Content
  </NuitralTab>
</NuitralTabs>`}
						language="tsx"
						fileName={'ReactComponent.tsx'}
					></Snippet>
				</NuitralTab>
				<NuitralTab label="Vue">
					<div className="mt-1rem mb-1rem">
						The advanced example in Vue can be implemented as follows:
					</div>
					<Snippet
						code={`<template>
  <NuitralTabs
    primary
    :selected="2"
  >
    <NuitralTab label="Tab with Icon" icon="user">
      Content of Tab with Icon
    </NuitralTab>
    <NuitralTab label="Disabled Tab" :disabled="true">
      This content will not be visible because the tab is disabled.
    </NuitralTab>
    <NuitralTab
      label="Tab with leftSide and rightSide"
    >
      <template #leftSide>
        <div>L -</div>
      </template>
      <template #rightSide>
        <div>- R</div>
      </template>
      Tab Content
    </NuitralTab>
  </NuitralTabs>
</template>`}
						language="vue"
						fileName={'VueComponent.vue'}
					></Snippet>
				</NuitralTab>
			</NuitralTabs>

			<div className="mt-1rem mb-2rem">
				Here is the result of the code above:
			</div>

			<NuitralTabs primary selected={2}>
				<NuitralTab label="Tab with Icon" icon="user">
					Content of Tab with Icon
				</NuitralTab>
				<NuitralTab label="Disabled Tab" disabled>
					This content will not be visible because the tab is disabled.
				</NuitralTab>
				<NuitralTab
					label="Tab with leftSide and rightSide"
					leftSide={<div>L - </div>}
					rightSide={<div>- R</div>}
				>
					Tab Content
				</NuitralTab>
			</NuitralTabs>
		</>
	)
}

export default Tabs
