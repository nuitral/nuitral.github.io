import { Outlet } from 'react-router-dom'

const Docs = () => {
	return (
		<div className="docs">
			<div className="container docWrapper">
				<Outlet></Outlet>
			</div>
		</div>
	)
}

export default Docs
