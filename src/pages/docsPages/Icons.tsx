import { NuitralIcons, NuitralIconsId } from '@nuitral/icons'
import IconCard from '../../components/IconCard.tsx'

const Icons = () => {
	const nuitralIcons: string[] = Object.values(NuitralIcons)
	return (
		<>
			<div className="section-title">Icons</div>
			<div className="section-subtitle mt-1rem mb-2rem">
				This is a list of all available icons:
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
