import { Routes, Route } from 'react-router-dom'
import Sidebar from '../widget/Sidebar.tsx'
import { routes } from '../../utils'
import { AppRoute, RouteGroup } from '../../models'
import { ReactElement } from 'react'

const Wrapper = () => {
	const renderChildRoutes = (groups?: RouteGroup[]): ReactElement[] => {
		if (!groups) return []

		return groups.flatMap(group =>
			group.children.map(({ name, path, component: Component, children }) => (
				<Route key={name} path={path} element={<Component />}>
					{children && renderChildRoutes(children)}
				</Route>
			))
		)
	}

	const renderRoutes = (routesArray: AppRoute[]): ReactElement[] =>
		routesArray.map(({ name, path, component: Component, children }) => (
			<Route key={name} path={path} element={<Component />}>
				{children && renderChildRoutes(children)}
			</Route>
		))

	return (
		<div className="wrapper">
			<Sidebar />
			<div className="router-container">
				<Routes>{renderRoutes(routes)}</Routes>
			</div>
		</div>
	)
}

export default Wrapper
