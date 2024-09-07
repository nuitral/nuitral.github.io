import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'

const Sidebar = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const sidebarRef = useRef<HTMLDivElement>(null)

	const [isMobile, setIsMobile] = useState(window.innerWidth <= 480)

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 480)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const navigateTo = (path: string) => {
		navigate(path)
		sidebarRef.current?.classList.remove('open')
	}

	const isDocsRoute = location.pathname.startsWith('/docs')

	if (!isDocsRoute && !isMobile) {
		return null
	}

	return (
		<>
			<div ref={sidebarRef} className="sidebar">
				<div className="routes-section">
					<div onClick={() => navigateTo('/')}>Home</div>
					<div onClick={() => navigateTo('/docs')}>Docs</div>
					<div onClick={() => navigateTo('/about')}>About</div>
					<div className="divider"></div>
				</div>
				<div className="title">How to start</div>
				<div
					className="section"
					onClick={() => navigateTo('/docs/howToInstall')}
				>
					Install Nuitral
				</div>
				<div className="section" onClick={() => navigateTo('/docs/theming')}>
					Theming
				</div>
				<div className="title">Essentialt</div>
				<div className="section" onClick={() => navigateTo('/docs/colors')}>
					Colors
				</div>
				<div className="section" onClick={() => navigateTo('/docs/icons')}>
					Icons
				</div>
				<div className="title">Components</div>
				<div className="section" onClick={() => navigateTo('/docs/button')}>
					Button
				</div>
			</div>
		</>
	)
}

export default Sidebar
