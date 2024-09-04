import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Docs = () => {
	const navigate = useNavigate()

	useEffect(() => {
		if (location.hash === '#/docs') {
			navigate('/docs/howToInstall')
		}
	}, [location.pathname, location.hash, navigate])
	return (
		<div className="docs">
			<div className="container doc-wrapper">
				<Outlet></Outlet>
			</div>
		</div>
	)
}

export default Docs
