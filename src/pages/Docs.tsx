import { Outlet } from 'react-router-dom'
import Sidebar from '../widget/Sidebar.tsx'

const Docs = () => {
	return (
		<div className="docs">
			<Sidebar></Sidebar>
			<Outlet></Outlet>
		</div>
	)
}

export default Docs
