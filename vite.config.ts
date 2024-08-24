import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
	/*	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @use '@nuitral/theming/dist/scss/index.scss' as *;
        `,
			},
		},
	},*/
	plugins: [react()],
})
