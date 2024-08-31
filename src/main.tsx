import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.scss'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<HashRouter>
			<App />
		</HashRouter>
	</StrictMode>
)