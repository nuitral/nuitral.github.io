import Docs from '../src/pages/Docs.tsx'
import Home from '../src/pages/Home.tsx'
import About from '../src/pages/About.tsx'

import Install from '../src/pages/docsPages/Install.tsx'
import Theming from '../src/pages/docsPages/Theming.tsx'
import Colors from '../src/pages/docsPages/Colors.tsx'
import Icons from '../src/pages/docsPages/Icons.tsx'
import Box from '../src/pages/docsPages/Box.tsx'
import Button from '../src/pages/docsPages/Button.tsx'
import Card from '../src/pages/docsPages/Card.tsx'
import IconCmp from '../src/pages/docsPages/IconCmp.tsx'
import Input from '../src/pages/docsPages/Input.tsx'
import Tabs from '../src/pages/docsPages/Tabs.tsx'

export const paths = {
	home: {
		path: '/',
		component: Home,
	},
	about: {
		path: '/about',
		component: About,
	},
	docs: {
		path: '/docs/*',
		component: Docs,
		children: {
			howToInstall: {
				path: 'howToInstall',
				component: Install,
			},
			theming: {
				path: 'theming',
				component: Theming,
			},
			colors: {
				path: 'colors',
				component: Colors,
			},
			icons: {
				path: 'icons',
				component: Icons,
			},
			box: {
				path: 'box',
				component: Box,
			},
			button: {
				path: 'button',
				component: Button,
			},
			card: {
				path: 'card',
				component: Card,
			},
			icon: {
				path: 'icon',
				component: IconCmp,
			},
			input: {
				path: 'input',
				component: Input,
			},
			tabs: {
				path: 'tabs',
				component: Tabs,
			},
		},
	},
}
