const Layout = () => {
	return (
		<>
			<div className="section-title">Layout:</div>
			<div className="hint mt-1_5rem mb-1rem">
				<p>This section is WIP.</p>
			</div>

			<div className="layout-flex mb-2">
				<div className="col-3 nuitral-background-secondary-300">col-3</div>
				<div className="col-4 nuitral-background-secondary-400">col-4</div>
				<div className="col nuitral-background-secondary-300">col</div>
			</div>

			<div className="layout-flex mb-2">
				<div className="col-3 nuitral-background-secondary-300">col-3</div>
				<div className="col-3 nuitral-background-secondary-400">col-3</div>
				<div className="col-3 nuitral-background-secondary-500">col-3</div>
				<div className="col-3 nuitral-background-secondary-600">col-3</div>
			</div>
			<div className="layout-flex mb-2">
				<div className="col-auto nuitral-background-secondary-300">
					col-auto
				</div>
				<div className="col-auto nuitral-background-secondary-500">
					col-auto
				</div>
			</div>
			<div className="layout-flex mb-2">
				<div className="col nuitral-background-secondary-300">col</div>
				<div className="col nuitral-background-secondary-400">col</div>
				<div className="col-auto nuitral-background-secondary-500">
					col-auto
				</div>
			</div>

			<div className="layout-flex mb-2">
				<div className="mobile-col-12 tablet-col-6 laptop-col-3 nuitral-background-accent-300">
					mobile-col-12 tablet-col-6 laptop-col-3
				</div>
				<div className="mobile-col-12 tablet-col-6 laptop-col-3 nuitral-background-accent-400">
					mobile-col-12 tablet-col-6 laptop-col-3
				</div>
				<div className="mobile-col-12 tablet-col-6 laptop-col-3 nuitral-background-accent-500">
					mobile-col-12 tablet-col-6 laptop-col-3
				</div>
				<div className="mobile-col-12 tablet-col-6 laptop-col-3 nuitral-background-accent-600">
					mobile-col-12 tablet-col-6 laptop-col-3
				</div>
			</div>
		</>
	)
}
export default Layout
