import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'
import { LoadingProvider } from '@/contexct/LoadingContexct.jsx'
import { OpenProvider } from '@/contexct/OpenContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <LoadingProvider>
            <OpenProvider>
                <App />
            </OpenProvider>
        </LoadingProvider>
    </StrictMode>,
)
