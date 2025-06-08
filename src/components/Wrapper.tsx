import { Routes, Route } from 'react-router-dom'
import Sidebar from '../widget/Sidebar.tsx'
import {paths} from '../../utils'

const Wrapper = () => {
	return (
		<div className="wrapper">
			<Sidebar></Sidebar>
			<div className="router-container">
				<Routes>
					<Route path={paths.home.path} element={<paths.home.component />} />

					<Route path={paths.docs.path} element={<paths.docs.component />}>
						{Object.entries(paths.docs.children).map(([key, { path, component: ChildComponent }]) => (
							<Route key={key} path={path} element={<ChildComponent />} />
						))}
					</Route>

					<Route path={paths.about.path} element={<paths.about.component />} />
				</Routes>
			</div>
		</div>
	)
}

export default Wrapper
