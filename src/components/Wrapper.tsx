import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.tsx'
import Docs from '../pages/Docs.tsx'
import About from '../pages/About.tsx'
import Icons from '../pages/docsPages/Icons.tsx'
import Button from '../pages/docsPages/Button.tsx'
import Colors from '../pages/docsPages/Colors.tsx'
import Sidebar from '../widget/Sidebar.tsx'
import Install from '../pages/docsPages/Install.tsx'
import Theming from '../pages/docsPages/Theming.tsx'
import IconCmp from '../pages/docsPages/IconCmp.tsx'
import Box from '../pages/docsPages/Box.tsx'
import Input from '../pages/docsPages/Input.tsx'

const Wrapper = () => {
	return (
		<div className="wrapper">
			<Sidebar></Sidebar>
			<div className="router-container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/docs/*" element={<Docs />}>
						<Route path="howToInstall" element={<Install />} />
						<Route path="theming" element={<Theming />} />
						<Route path="colors" element={<Colors />} />
						<Route path="icons" element={<Icons />} />
						<Route path="box" element={<Box />} />
						<Route path="button" element={<Button />} />
						<Route path="icon" element={<IconCmp />} />
						<Route path="input" element={<Input />} />
					</Route>
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</div>
	)
}

export default Wrapper
