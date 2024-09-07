import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		const scroll = () => {
			const routerContainer = document.querySelector('.router-container')
			if (routerContainer) {
				routerContainer.scrollTo({
					top: 0,
				})
			}
		}

		scroll()
	}, [pathname])
	return null
}

export default ScrollToTop
