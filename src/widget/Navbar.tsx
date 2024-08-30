import { NuitralButton, useNuitralTheming } from '@nuitral/react-ui-suite'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
	const { manageDarkMode, hasDarkTheme, manageTheme } = useNuitralTheming({
		theme: 'nuitral',
		darkMode: true,
		id: 'demo-app',
	})
	const navigate = useNavigate()

	const navigateTo = (path: string) => {
		navigate(path)
	}

	const sidebarRef = document.getElementsByClassName('sidebar')

	const [theme, setTheme] = useState('nuitral')

	const toggleTheme = () => {
		const newTheme = theme === 'nuitral' ? 'pop' : 'nuitral'
		setTheme(newTheme)
		manageTheme(newTheme)
	}

	const openSidebar = () => {
		if (sidebarRef.length > 0) {
			sidebarRef[0].classList.add('open')
		}
	}

	return (
		<div className="navbar">
			<div className="sidebar-toggle" onClick={() => openSidebar()}>
				<div className="hamburger-menu">
					<div className="bar"></div>
					<div className="bar"></div>
					<div className="bar"></div>
				</div>
			</div>
			<div className="logo">nuitral</div>
			<div className="elements">
				<div onClick={() => navigateTo('/')}>Home</div>
				<div onClick={() => navigateTo('/docs')}>Docs</div>
				<div onClick={() => navigateTo('/about')}>About</div>
				<NuitralButton primary onClick={manageDarkMode}>
					{hasDarkTheme ? 'Dark' : 'Light'}
				</NuitralButton>
				<NuitralButton primary onClick={toggleTheme}>
					Switch to {theme === 'nuitral' ? 'Pop' : 'Nuitral'}
				</NuitralButton>
			</div>
		</div>
	)
}

export default Navbar
