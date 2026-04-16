import Snippet from '../../components/Snippet.tsx'
import { NuitralTab, NuitralTabs } from '@nuitral/react-ui-suite'

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

			<NuitralTabs primary>
				<NuitralTab label="React">
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
				</NuitralTab>
				<NuitralTab label="Vue">
					<Snippet
						code={
							'<script lang="ts" setup>\n' +
							"import { useNuitralTheming } from '@nuitral/vue-ui-suite'\n" +
							'\n' +
							'const { isDarkMode, manageDarkMode, manageTheme } = useNuitralTheming({\n' +
							"\ttheme: 'nuitral',\n" +
							'\tdarkMode: true,\n' +
							"\tid: 'demo-app',\n" +
							'})\n' +
							'</script>'
						}
						language="ts"
						fileName={'VueComponent.vue'}
					></Snippet>
					<Snippet
						code={
							'<template>\n' +
							'\t<button @click="manageDarkMode">\n' +
							"\t\t{{ isDarkMode ? 'Set light mode' : ' Set dark mode' }}\n" +
							'\t</button>\n' +
							'\t<button @click="manageTheme(\'nuitral\')">Set nuitral theme</button>\n' +
							'\t<button @click="manageTheme(\'pop\')">Set pop theme</button>\n' +
							'</template>\n'
						}
						language="html"
						fileName={'VueComponent.vue'}
					></Snippet>
				</NuitralTab>
			</NuitralTabs>

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
				code={`
@use '@nuitral/theming' as nuitral;

$light-mode: (
        primary: #ff0054,
        secondary: #00d8ff,
        accent: #ffdc00,
        error: #ff4136,
        success: #2ecc40,
        warning: #ff851b,
        info: #0074d9,
        neutral: #b10dc9,
        background: #fdfefe,
        surface: #ffffff
);

$dark-mode: (
        primary: #ff337a,
        secondary: #00a3cc,
        accent: #ffd700,
        error: #ff6347,
        success: #28a745,
        warning: #ff7733,
        info: #006699,
        neutral: #a569bd,
        background: #1e1e1e,
        surface: #121212
);

$theme-pop: nuitral.generate-theme((
        theme-name: "pop",
        scale-light: $light-mode,
        scale-dark: $dark-mode,
        variables: (
                misc: (
                        height-atoms: 30px,
                        border-radius-atoms: 25px,
                        corner-shape-atoms: circle,
                        border-radius-molecules: 25px,
                        corner-shape-molecules: circle
\t\t\t\t)
        )
));

@include nuitral.apply-theme($theme-pop);
`}
				language="scss"
				fileName="index.scss"
			/>

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
				code={`
@use '@nuitral/theming' as nuitral;

$light-mode: (
        primary: #ff0054,
        secondary: #00d8ff,
        accent: #ffdc00,
        error: #ff4136,
        success: #2ecc40,
        warning: #ff851b,
        info: #0074d9,
        neutral: #b10dc9,
        background: #fdfefe,
        surface: #ffffff
);


$theme-pop: nuitral.generate-theme((
        theme-name: "pop",
        scale-light: $light-mode,
));

@include nuitral.apply-theme($theme-pop);
`}
				language="scss"
				fileName="index.scss"
			/>
		</>
	)
}

export default Theming
