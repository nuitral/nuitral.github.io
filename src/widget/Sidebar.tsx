import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
	const navigate = useNavigate()

	const navigateTo = (path: string) => {
		navigate('/docs' + path)
	}

	return (
		<>
			<div className="sidebar">
				<div className="title">How to start</div>
				<div className="section" onClick={() => navigateTo('/howToInstall')}>
					Install Nuitral
				</div>
				<div className="title">Essentialt</div>
				<div className="section" onClick={() => navigateTo('/colors')}>
					Colors
				</div>
				<div className="section" onClick={() => navigateTo('/icons')}>
					Icons
				</div>
				<div className="title">Components</div>
				<div className="section" onClick={() => navigateTo('/button')}>
					Button
				</div>
			</div>
		</>
	)
}

export default Sidebar
