import { Outlet } from 'react-router-dom'
import Sidebar from '../widget/Sidebar.tsx'

const Docs = () => {
	return (
		<div className="docs">
			<Sidebar></Sidebar>
			<div className="docWrapper">
				<Outlet></Outlet>
			</div>
		</div>
	)
}

export default Docs
