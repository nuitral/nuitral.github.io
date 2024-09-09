import Snippet from '../../components/Snippet.tsx'
import Tabs from '../../components/Tabs.tsx'
import Tab from '../../components/Tab.tsx'

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
				The main idea behind nuitral theming is that every theme includes both
				light and dark modes, so you no longer need separate themes for each.
			</div>

			<div className="mt-1rem mb-1rem">
				Just like you can switch between modes, you can also switch between
				themes, and each theme will have both light and dark modes.
			</div>

			<div className="section-title mb-1rem">Change default colors:</div>
			<Snippet
				code={
					'// Import of nuitral theming scss\n' +
					"@use '@nuitral/theming/dist/scss/index.scss' as nuitral with (\n" +
					'\t// Override primary color for light-mode\n' +
					'\t$primary-light: #00d8ff\n' +
					'\t// Override accent color for dark-mode\n' +
					'\t$accent-dark: #ffdc00\n' +
					'\t// Other variables\n' +
					'\t// ...\n' +
					');\n' +
					'\n' +
					'// Default theme with overrides\n' +
					'@include nuitral.generate-theme(nuitral.$light-mode, nuitral.$dark-mode);'
				}
				language="scss"
				fileName="index.scss"
			></Snippet>
			<div className="section-title mb-1rem mt-2rem">
				Generate and manage a new theme:
			</div>
			<div className="mt-1rem mb-1rem">
				In addition to integrating the Nuitral theming, this hook also provides
				complete control over theme management.
			</div>
			<div className="mt-1rem mb-1rem">
				<p>
					- <b>isDarkMode</b> value indicates the current mode.
				</p>
				<p>
					- <b>manageDarkMode</b> allows switching between light and dark mode.
				</p>
				<p>
					-The <b>manageTheme</b> function enables selecting the active theme,
					in this case, either the default 'nuitral' theme or the 'pop' theme.
				</p>
			</div>

			<div className="hint mt-1_5rem mb-1rem">
				<p>
					The theme name is assigned using the `generate-theme` mixin in the
					main stylesheet, where nuitral theming is applied.
				</p>
			</div>

			<Tabs>
				<Tab label="React">
					<Snippet
						code={
							"import { useNuitralTheming } from '@nuitral/react-ui-suite'\n" +
							'\n' +
							'const ReactComponent = () => {\n' +
							'\tconst { manageDarkMode, isDarkMode, manageTheme } = useNuitralTheming({\n' +
							"\t\ttheme: 'nuitral',\n" +
							'\t\tdarkMode: true,\n' +
							"\t\tid: 'demo-app',\n" +
							'\t})\n' +
							'\n' +
							'\treturn <>\n' +
							"\t\t<button onClick={manageDarkMode}>{isDarkMode ? 'Set light mode' : ' Set dark mode'}</button>\n" +
							"\t\t<button onClick={() => manageTheme('nuitral')}>Set nuitral theme</button>\n" +
							"\t\t<button onClick={() => manageTheme('pop')}>Set pop theme</button>\n" +
							'\t</>\n' +
							'}\n' +
							'\n' +
							'export default ReactComponent\n'
						}
						language="ts"
						fileName="ReactComponent.ts"
					></Snippet>
				</Tab>
				<Tab label="Vue">
					<Snippet
						code={'<script lang="ts" setup>\n' +
							'import { useNuitralTheming } from \'@nuitral/vue-ui-suite\'\n' +
							'\n' +
							'const { isDarkMode, manageDarkMode, manageTheme } = useNuitralTheming({\n' +
							'\ttheme: \'nuitral\',\n' +
							'\tdarkMode: true,\n' +
							'\tid: \'demo-app\',\n' +
							'})\n' +
							'</script>'}
						language="ts"
						fileName={'VueComponent.vue'}
					></Snippet>
					<Snippet
						code={'<template>\n' +
							'\t<button @click="manageDarkMode">\n' +
							'\t\t{{ isDarkMode ? \'Set light mode\' : \' Set dark mode\' }}\n' +
							'\t</button>\n' +
							'\t<button @click="manageTheme(\'nuitral\')">Set nuitral theme</button>\n' +
							'\t<button @click="manageTheme(\'pop\')">Set pop theme</button>\n' +
							'</template>\n'}
						language="html"
						fileName={'VueComponent.vue'}
					></Snippet>
				</Tab>
			</Tabs>



			<div className="mt-1rem mb-1rem">
				To generate a new theme, simply select the desired base colors. Using
				the generate-color-scale function, color shades from 100 to 900 will be
				automatically generated.
			</div>
			<div className="mt-1rem mb-1rem">
				Simply associate your custom color scales with the $light-mode and
				$dark-mode maps, then pass them as parameters to the generate-theme
				mixin, where the theme name can be assigned.
			</div>

			<div className="hint mb-1rem mt-1rem">
				<p>
					The chosen theme name will be used to manage theme switching through
					the <b>useNuitralTheming</b> hook.
				</p>
				<p>
					Choose it carefully, as the name must match exactly for the theming
					system to function correctly.
				</p>
			</div>
			<Snippet
				code={
					'// Import of nuitral theming scss\n' +
					"@use '@nuitral/theming/dist/scss/index.scss' as nuitral;\n" +
					'\n' +
					'// Default "nuitral" theme\n' +
					'@include nuitral.generate-theme(nuitral.$light-mode, nuitral.$dark-mode);\n' +
					'\n' +
					'// "pop" theme\n' +
					'\n' +
					'// "pop" theme colors scales for light-mode\n' +
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
					'// "pop" scale for light mode\n' +
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
					'// "pop" theme colors scales for dark mode\n' +
					'$primary-dark-scale: nuitral.generate-color-scale(#ff337a);\n' +
					'$secondary-dark-scale: nuitral.generate-color-scale(#00a3cc);\n' +
					'$accent-dark-scale: nuitral.generate-color-scale(#ffd700);\n' +
					'$error-dark-scale: nuitral.generate-color-scale(#ff6347);\n' +
					'$success-dark-scale: nuitral.generate-color-scale(#28a745);\n' +
					'$warning-dark-scale: nuitral.generate-color-scale(#ff7733);\n' +
					'$info-dark-scale: nuitral.generate-color-scale(#006699);\n' +
					'$neutral-dark-scale: nuitral.generate-color-scale(#a569bd);\n' +
					'$background-dark-scale: nuitral.generate-color-scale(#1e1e1e);\n' +
					'$surface-dark-scale: nuitral.generate-color-scale(#121212);\n' +
					'\n' +
					'// "pop" scale for dark mode\n' +
					'$dark-mode: (\n' +
					'\tprimary: $primary-dark-scale,\n' +
					'\tsecondary: $secondary-dark-scale,\n' +
					'\taccent: $accent-dark-scale,\n' +
					'\tbackground: $background-dark-scale,\n' +
					'\tsurface: $surface-dark-scale,\n' +
					'\terror: $error-dark-scale,\n' +
					'\tsuccess: $success-dark-scale,\n' +
					'\twarning: $warning-dark-scale,\n' +
					'\tinfo: $info-dark-scale,\n' +
					'\tneutral: $neutral-dark-scale,\n' +
					');\n' +
					'\n' +
					"// Mixin to generate new theme 'pop' with custom $light-mode and $dark-mode scales\n" +
					"// The name of the theme is a parameter, in this case 'pop'\n" +
					"@include nuitral.generate-theme($light-mode, $dark-mode, 'pop');"
				}
				language="scss"
				fileName="index.scss"
			></Snippet>
			<div className="mt-1rem mb-1rem">
				It's also possible to generate only a color map for one theme, leaving
				the light or dark mode as the default from Nuitral.
			</div>
			<div className="hint mt-1rem mb-1rem">
				<p>
					In this example, only the light mode map has been generated, while the
					dark mode will be handled using the default map.
				</p>
			</div>
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
