import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
	const navigate = useNavigate()

	const navigateTo = (path: string) => {
		navigate('/docs' + path)
	}

	return (
		<>
			<div className="sidebar">
				<div onClick={() => navigateTo('/icons')}>Icons</div>
				<div onClick={() => navigateTo('/button')}>Button</div>
			</div>
		</>
	)
}

export default Sidebar
