import { useNavigate, useLocation } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import { routes } from '../../utils'
import type { RouteGroup } from '../../models'

const Sidebar = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const sidebarRef = useRef<HTMLDivElement>(null)
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 480)

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 480)
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const closeSidebar = () => {
		sidebarRef.current?.classList.remove('open')
	}

	const navigateTo = (path: string) => {
		navigate(path)
		closeSidebar()
	}

	const isDocsRoute = location.pathname.startsWith('/docs')
	if (!isDocsRoute && !isMobile) return null

	const docsRoute = routes.find(route => route.name === 'docs')
	const docGroups = docsRoute?.children ?? []

	const renderGroup = (group: RouteGroup) => (
		<div key={group.section} className="mb-1_5">
			<div className="title nuitral-color-primary-300">{group.section}</div>
			{group.children.map(item => (
				<div
					key={item.name}
					className="section link"
					onClick={() => navigateTo(`/docs/${item.path}`)}
				>
					{item.label}
				</div>
			))}
		</div>
	)

	return (
		<div ref={sidebarRef} className="sidebar">
			<div className="close-icon" onClick={closeSidebar}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					viewBox="0 0 16 16"
				>
					<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
				</svg>
			</div>

			<div className="nav-section">
				<div className="link" onClick={() => navigateTo('/')}>
					Home
				</div>
				<div className="link" onClick={() => navigateTo('/docs')}>
					Docs
				</div>
				<div className="link" onClick={() => navigateTo('/about')}>
					About
				</div>
				<div className="divider" />
			</div>

			{docGroups.map(renderGroup)}
		</div>
	)
}

export default Sidebar
