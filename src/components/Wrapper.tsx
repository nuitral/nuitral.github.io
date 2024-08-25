import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.tsx'
import Docs from '../pages/Docs.tsx'
import About from '../pages/About.tsx'
import Icons from '../pages/docsPages/Icons.tsx'
import Button from '../pages/docsPages/Button.tsx'
import Colors from '../pages/docsPages/Colors.tsx'

const Wrapper = () => {
	return (
		<div className="wrapper">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/docs/*" element={<Docs />}>
					<Route path="colors" element={<Colors />} />
					<Route path="icons" element={<Icons />} />
					<Route path="button" element={<Button />} />
				</Route>
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	)
}

export default Wrapper
