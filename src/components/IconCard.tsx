import { NuitralIcon } from '@nuitral/react-ui-suite'
import { NuitralIconsId } from '@nuitral/icons'

interface IconCardProps {
	iconName: NuitralIconsId
}

const IconCard = ({ iconName }: IconCardProps) => {
	return (
		<>
			<div className="icon-card">
				<div className="icon-view">
					<NuitralIcon icon={iconName} />
				</div>
				<div className="icon-card-description">
					<div className="text">{iconName}</div>
				</div>
			</div>
		</>
	)
}
export default IconCard
