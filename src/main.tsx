import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import ScrollToTop from './widget/ScrollToTop.tsx'
import App from './App.tsx'
import './index.scss'
import '@nuitral/icons/dist/nuitral-icons.scss'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<HashRouter>
			<ScrollToTop />
			<App />
		</HashRouter>
	</StrictMode>
)
