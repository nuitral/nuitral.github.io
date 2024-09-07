import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.scss'
import ScrollToTop from './widget/ScrollToTop.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<HashRouter>
			<ScrollToTop />
			<App />
		</HashRouter>
	</StrictMode>
)
