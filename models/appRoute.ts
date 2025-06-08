import { ComponentType } from 'react'

interface AppRoute {
	path: string
	component: ComponentType
	children?: RouteGroup[]
	name: string
	label: string
}

interface RouteGroup {
	section: string
	children: AppRoute[]
}

export type { AppRoute, RouteGroup }
