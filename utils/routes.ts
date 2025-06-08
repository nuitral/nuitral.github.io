import Docs from '../src/pages/Docs'
import Home from '../src/pages/Home'
import About from '../src/pages/About'

import Install from '../src/pages/docsPages/Install'
import Theming from '../src/pages/docsPages/Theming'
import Colors from '../src/pages/docsPages/Colors'
import Icons from '../src/pages/docsPages/Icons'
import Box from '../src/pages/docsPages/Box'
import Button from '../src/pages/docsPages/Button'
import Card from '../src/pages/docsPages/Card'
import IconCmp from '../src/pages/docsPages/IconCmp'
import Input from '../src/pages/docsPages/Input'
import Tabs from '../src/pages/docsPages/Tabs'

import type { AppRoute } from '../models'

export const routes: AppRoute[] = [
	{
		name: 'home',
		label: 'Home',
		path: '/',
		component: Home,
	},
	{
		name: 'about',
		label: 'About',
		path: '/about',
		component: About,
	},
	{
		name: 'docs',
		label: 'Docs',
		path: '/docs/*',
		component: Docs,
		children: [
			{
				section: 'Getting Started',
				children: [
					{
						name: 'docs.howToInstall',
						label: 'Install nuitral',
						path: 'howToInstall',
						component: Install,
					},
					{
						name: 'docs.theming',
						label: 'Theming',
						path: 'theming',
						component: Theming,
					},
				],
			},
			{
				section: 'Essentials',
				children: [
					{
						name: 'docs.colors',
						label: 'Colors',
						path: 'colors',
						component: Colors,
					},
					{
						name: 'docs.icons',
						label: 'Icons',
						path: 'icons',
						component: Icons,
					},
				],
			},
			{
				section: 'Components',
				children: [
					{
						name: 'docs.box',
						label: 'Box',
						path: 'box',
						component: Box,
					},
					{
						name: 'docs.button',
						label: 'Button',
						path: 'button',
						component: Button,
					},
					{
						name: 'docs.card',
						label: 'Card',
						path: 'card',
						component: Card,
					},
					{
						name: 'docs.icon',
						label: 'Icon',
						path: 'icon',
						component: IconCmp,
					},
					{
						name: 'docs.input',
						label: 'Input',
						path: 'input',
						component: Input,
					},
					{
						name: 'docs.tabs',
						label: 'Tabs',
						path: 'tabs',
						component: Tabs,
					},
				],
			},
		],
	},
]
