import './App.css'
import PantallaCarga from '@/pages/pantallaCarga/PantallaCarga'
import { LoadingProvider } from './contexct/LoadingContexct'

function App() {

    return (
        <>
            <LoadingProvider>
                {/* <h1>Hola mundo! ˣ‿ˣ</h1> */}
                <PantallaCarga />
            </LoadingProvider>
        </>
    )
}

export default App
