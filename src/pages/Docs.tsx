import { Outlet } from 'react-router-dom'

const Docs = () => {
	return (
		<div className="docs">
			<div className="docWrapper">
				<Outlet></Outlet>
			</div>
		</div>
	)
}

export default Docs
