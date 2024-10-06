import { NuitralIcons, NuitralIconsId } from '@nuitral/icons'
import IconCard from '../../components/IconCard.tsx'
import { Link } from 'react-router-dom'

const Icons = () => {
	const nuitralIcons: string[] = Object.values(NuitralIcons)
	return (
		<>
			<div className="section-title">Icons</div>
			<div className="mt-1rem mb-2rem">
				This is a list of all available icons:
				<p>
					Here{' '}
					<Link to="/docs/icon" className="link-button">
						how to use
					</Link>
				</p>
			</div>
			<div className="icon-list">
				{nuitralIcons.map((icon: string) => (
					<div key={icon}>
						<IconCard iconName={icon as NuitralIconsId}></IconCard>
					</div>
				))}
			</div>
		</>
	)
}

export default Icons
