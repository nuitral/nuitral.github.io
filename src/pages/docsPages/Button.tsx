import { NuitralButton } from '@nuitral/react-ui-suite'
import Snippet from '../../components/Snippet.tsx'

const Button = () => {
	const buttonImport =
		"import { NuitralButton } from '@nuitral/react-ui-suite' \n ... \n ... \n <NuitralButton primary>Simple Button</NuitralButton>"
	return (
		<>
			<div className="sectionTitle">Button</div>
			<div className="divider"></div>
			<div className="text-description-head">Example of A simple Button</div>
			<NuitralButton primary>Simple Button</NuitralButton>
			<div className="divider"></div>
			<div className="text-description-head">Usage</div>
			<Snippet code={buttonImport} language="ts"></Snippet>
			<div className="divider"></div>
			<div className="text-description">
				<ul>
					<li>
						<strong>secondary</strong>
						<NuitralButton secondary>Button</NuitralButton>
					</li>
					<li>
						<strong>accent</strong>
						<NuitralButton accent>Button</NuitralButton>
					</li>
					<li>
						<strong>error</strong>
						<NuitralButton error>Button</NuitralButton>
					</li>
					<li>
						<strong>success</strong>
						<NuitralButton success>Button</NuitralButton>
					</li>
					<li>
						<strong>warning</strong>
						<NuitralButton warning>Button</NuitralButton>
					</li>
					<li>
						<strong>info</strong>
						<NuitralButton info>Button</NuitralButton>
					</li>
					<li>
						<strong>neutral</strong>
						<NuitralButton neutral>Button</NuitralButton>
					</li>
				</ul>
			</div>
			<div className="divider"></div>
		</>
	)
}

export default Button
