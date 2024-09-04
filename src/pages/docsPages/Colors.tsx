import PantoneCard from '../../components/PantoneCard.tsx'

const Colors = () => {
	const colors = [
		'primary',
		'secondary',
		'accent',
		'error',
		'success',
		'warning',
		'info',
		'neutral',
		'background',
		'surface',
	]
	const scales = ['100', '200', '300', '400', '500', '600', '700', '800', '900']

	return (
		<>
			<div className="section-title">Colors</div>
			<div className="section-subtitle mt-1rem">
				This is a list of all available colors:
			</div>
			<div className="mt-1rem mb-2rem">
				"For each color (e.g., primary), the corresponding shade is the
				primary-500."
			</div>

			{colors.map((color: string) => (
				<div key={color}>
					<div className="color-name mb-1rem mt-1rem">{color}</div>

					<div className="colors-list">
						{scales.map((scale: string) => (
							<PantoneCard
								key={color + '-' + scale}
								colorName={color + '-' + scale}
								backgroundColor={'nuitral-background-' + color + '-' + scale}
							/>
						))}
					</div>
				</div>
			))}
		</>
	)
}

export default Colors
