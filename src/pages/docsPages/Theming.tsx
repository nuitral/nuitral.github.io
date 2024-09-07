import Snippet from '../../components/Snippet.tsx'

const Theming = () => {
	return (
		<>
			<div className="section-title">Theming:</div>
			<div className="mt-1rem mb-1rem">
				<b>nuitral</b> theming makes it easy to create one or more custom
				themes, with a focus on improving the developer experience.
			</div>
			<div>
				Each theme has its own color set, giving you full control over
				customization.
			</div>

			<div>
				The main idea behind Nuitral Theming is that every theme includes both
				light and dark modes, so you no longer need separate themes for each.
			</div>

			<div className="mt-1rem mb-1rem">
				Just like you can switch between modes, you can also switch between
				themes, and each theme will have both light and dark modes.
			</div>

			<div className="section-title mb-1rem">Change default colors:</div>
			<Snippet code={'// Import of nuitral theming scss\n' +
				'@use \'@nuitral/theming/dist/scss/index.scss\' as nuitral with (\n' +
				'\t// Override primary color\n' +
				'\t$primary-light: #00d8ff\n' +
				'\t// ...\n' +
				'\t// Other variables\n' +
				');\n' +
				'\n' +
				'// Default theme with overrides\n' +
				'@include nuitral.generate-theme(nuitral.$light-mode, nuitral.$dark-mode);'} language='scss' fileName='index.html'></Snippet>
			<div className="section-title mb-1rem mt-2rem">Generate a new theme:</div>

			<Snippet
				code={
					'// Import of nuitral theming scss\n' +
					"@use '@nuitral/theming/dist/scss/index.scss' as nuitral;\n" +
					'\n' +
					'// Default theme\n' +
					'@include nuitral.generate-theme(nuitral.$light-mode, nuitral.$dark-mode);\n' +
					'\n' +
					'// "pop" theme\n' +
					'\n' +
					'// "pop" theme colors scales\n' +
					'$primary-light-scale: nuitral.generate-color-scale(#ff0054);\n' +
					'$secondary-light-scale: nuitral.generate-color-scale(#00d8ff);\n' +
					'$accent-light-scale: nuitral.generate-color-scale(#ffdc00);\n' +
					'$error-light-scale: nuitral.generate-color-scale(#ff4136);\n' +
					'$success-light-scale: nuitral.generate-color-scale(#2ecc40);\n' +
					'$warning-light-scale: nuitral.generate-color-scale(#ff851b);\n' +
					'$info-light-scale: nuitral.generate-color-scale(#0074d9);\n' +
					'$neutral-light-scale: nuitral.generate-color-scale(#b10dc9);\n' +
					'$background-light-scale: nuitral.generate-color-scale(#fdfefe);\n' +
					'$surface-light-scale: nuitral.generate-color-scale(#ffffff);\n' +
					'\n' +
					'// "pop" colors scales for light mode\n' +
					'$light-mode: (\n' +
					'\tprimary: $primary-light-scale,\n' +
					'\tsecondary: $secondary-light-scale,\n' +
					'\taccent: $accent-light-scale,\n' +
					'\tbackground: $background-light-scale,\n' +
					'\tsurface: $surface-light-scale,\n' +
					'\terror: $error-light-scale,\n' +
					'\tsuccess: $success-light-scale,\n' +
					'\twarning: $warning-light-scale,\n' +
					'\tinfo: $info-light-scale,\n' +
					'\tneutral: $neutral-light-scale,\n' +
					');\n' +
					'\n' +
					"// Mixin to generate new theme 'pop' with colors scale $light-mode e default $dark-mode scale\n" +
					"@include nuitral.generate-theme($light-mode, nuitral.$dark-mode, 'pop');"
				}
				language="scss"
				fileName="index.scss"
			></Snippet>
		</>
	)
}

export default Theming
