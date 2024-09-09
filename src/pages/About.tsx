import Snippet from '../components/Snippet.tsx'
import { Link } from 'react-router-dom'

const About = () => {
	return (
		<>
			<div className="container about-container">
				<div className="section-title">
					<b>nuitral</b> UI Suite{' '}
					<span className="font-size-12px">alpha version</span>
				</div>
				<div className="mt-2rem">
					<b>nuitral</b> is being developed to improve the development
					experience and unify the approach to integrating and customizing
					components in web app development with a single UI Suite.
				</div>
				<div className="mt-1rem mb-1rem">
					Though still in alpha, it already includes a core theming system that
					supports light and dark modes without requiring separate themes for
					each.
				</div>
				<div className="mt-2rem mb-1rem">
					One of its standout features is the ability to use an SCSS variable
					that dynamically changes at runtime through a CSS variable acting as a
					bridge, allowing values to adjust based on the selected theme and
					mode.
				</div>
				<div className="mt-1rem mb-1rem">
					Normally, SCSS variables cannot change at runtime, but this system
					overcomes that limitation by leveraging CSS variables to handle
					runtime changes.
				</div>
				<Snippet
					code={
						"@use '@nuitral/theming/dist/scss/variables' as var;\n" +
						'\n' +
						'.custom-bg-class {\n' +
						'\tbackground-color: var.$background-400;\n' +
						'}'
					}
					language="scss"
					fileName="_custom.scss"
				></Snippet>
				<div className="mt-1rem mb-1rem">
					For instance, the background-400 value changes dynamically based on
					the theme and light/dark mode, eliminating the need for complex
					stylesheet management or value overrides.
				</div>
				<div className="mt-1rem mb-1rem">
					To apply a background color to an element like a button, for example,
					you simply add the attribute corresponding to the color name, such as
					primary, primary-300, accent and other colors available{' '}
					<Link to="/docs/colors" className="link-button">
						here
					</Link>
					. This simplifies the process and improves the developer experience.
				</div>
				<Snippet
					code={`<NuitralButton primary>Button Text</NuitralButton>`}
					language="html"
				></Snippet>
				<div className="mt-4rem">
					This library will receive constant updates to ensure it can be easily
					integrated into various projects, enhancing the developer experience
					for everyone.
				</div>
				<div className="mt-1rem">
					Remember to visit this site regularly to stay updated on the latest features and improvements. See you soon!
				</div>
			</div>
		</>
	)
}

export default About
