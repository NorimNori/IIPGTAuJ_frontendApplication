import './App.css'
import PantallaCarga from '@/pages/pantallaCarga/PantallaCarga'
import { useLoadingContext } from '@/contexct/LoadingContexct';
import PantallaInicio from '@/pages/pantallaInicio/PantallaInicio';
import { useOpenContext } from './contexct/OpenContext';
import PantallaCierre from './pages/pantallaCierre/PantallaCierre';

function App() {
    const { filled } = useLoadingContext();
    const { close } = useOpenContext();

    return (
        <>
            {filled < 101 && <PantallaCarga />}
            {filled === 101 && !close && <PantallaInicio />}
            {close && <PantallaCierre />}
        </>
    )
}

export default App
