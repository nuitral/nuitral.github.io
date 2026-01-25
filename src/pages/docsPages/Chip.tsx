import { NuitralChip } from '@nuitral/react-ui-suite'

const Chip = () => {
	return (
		<>
			<div className="section-title">Chip:</div>
			<div className="hint mt-1_5rem mb-1rem">
				<p>This section is WIP.</p>
			</div>
			<div className="mt-1rem mb-1rem">
				Import <b>nuitral Chip</b> from the library you have installed.
			</div>
			<div className="my-2" />
			<b>Default Chip</b>
			<div className="my-1" />
			<NuitralChip primary icon="basket">
				Chip Primary with icon
			</NuitralChip>
			<div className="my-1" />
			<NuitralChip secondary>Chip Secondary</NuitralChip>
			<div className="my-1" />
			<NuitralChip accent-300>Chip accent 300</NuitralChip>
			<div className="my-1" />
			<NuitralChip error-400>Chip error 400</NuitralChip>
			<div className="my-1" />
			<NuitralChip success-700>Chip Success-700</NuitralChip>
			<div className="my-1" />
			<NuitralChip warning>Chip warning</NuitralChip>
			<div className="my-1" />
			<NuitralChip info>Chip info</NuitralChip>
			<div className="my-1" />
			<NuitralChip neutral>Chip neutral</NuitralChip>

			<div className="my-2" />
			<b>Outline Chip</b>
			<div className="my-1" />

			<NuitralChip primary-outline icon="basket">
				Chip Primary outline with icon
			</NuitralChip>
			<div className="my-1" />
			<NuitralChip secondary-outline>Chip Secondary</NuitralChip>
			<div className="my-1" />
			<NuitralChip accent-300-outline>Chip accent 300</NuitralChip>
			<div className="my-1" />
			<NuitralChip error-400-outline>Chip error 400</NuitralChip>
			<div className="my-1" />
			<NuitralChip success-700-outline>Chip Success-700</NuitralChip>
			<div className="my-1" />
			<NuitralChip warning-outline>Chip warning</NuitralChip>
			<div className="my-1" />
			<NuitralChip info-outline>Chip info</NuitralChip>
			<div className="my-1" />
			<NuitralChip neutral-outline>Chip neutral</NuitralChip>

			<div className="my-2" />
			<b>Gloss Chip</b>
			<div className="my-1" />

			<NuitralChip primary-gloss icon="basket">
				Chip Primary gloss with icon
			</NuitralChip>
			<div className="my-1" />
			<NuitralChip secondary-gloss>Chip Secondary</NuitralChip>
			<div className="my-1" />
			<NuitralChip accent-300-gloss>Chip accent 300</NuitralChip>
			<div className="my-1" />
			<NuitralChip error-400-gloss>Chip error 400</NuitralChip>
			<div className="my-1" />
			<NuitralChip success-700-gloss>Chip Success-700</NuitralChip>
			<div className="my-1" />
			<NuitralChip warning-gloss>Chip warning</NuitralChip>
			<div className="my-1" />
			<NuitralChip info-gloss>Chip info</NuitralChip>
			<div className="my-1" />
			<NuitralChip neutral-gloss>Chip neutral</NuitralChip>
		</>
	)
}
export default Chip
