import { NuitralCard } from '@nuitral/react-ui-suite'

const Card = () => {
	return (
		<>
			<div className="section-title">Card:</div>

			<div className="hint mt-1_5rem mb-1rem">
				<p>This section is WIP.</p>
			</div>
			<div className="mt-1rem mb-1rem">
				Import <b>nuitral Card</b> from the library you have installed.
			</div>
			<NuitralCard
				surface
				border-accent-900
				header={<div>Header</div>}
				footer={<div>Footer</div>}
			>
				Body
			</NuitralCard>
		</>
	)
}
export default Card
