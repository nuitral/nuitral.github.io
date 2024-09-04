interface PantoneCardProps {
	colorName: string
	backgroundColor: string
}

const PantoneCard = ({ colorName, backgroundColor }: PantoneCardProps) => {
	return (
		<>
			<div className="pantone-card">
				<div className={`pantone-card-color ${backgroundColor}`}></div>
				<div className="pantone-card-description">
					<div className="text">{colorName}</div>
				</div>
			</div>
		</>
	)
}
export default PantoneCard
