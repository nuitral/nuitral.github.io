import Snippet from '../../components/Snippet.tsx'
import Tabs from '../../components/Tabs.tsx'
import Tab from '../../components/Tab.tsx'

const Install = () => {
	return (
		<>
			<div className="section-title">How to Install</div>
			<div className="mt-1rem mb-1rem">
				Install <b>nuitral</b> by running this command on your terminal
			</div>
			<Tabs>
				<Tab label="React">
					<Snippet
						code="npm i @nuitral/react-ui-suite"
						language="shell"
					></Snippet>
				</Tab>
				<Tab label="Vue">
					<Snippet
						code="npm i @nuitral/vue-ui-suite"
						language="shell"
					></Snippet>
				</Tab>
			</Tabs>
		</>
	)
}

export default Install
