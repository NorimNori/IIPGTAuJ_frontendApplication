import './App.css'
import PantallaCarga from '@/pages/pantallaCarga/PantallaCarga'
import { useLoadingContext } from '@/contexct/LoadingContexct';
import PantallaInicio from '@/pages/pantallaInicio/PantallaInicio';

function App() {
    const { filled } = useLoadingContext();
    return (
        <>
            {filled < 101 && <PantallaCarga />}
            {filled === 101 && <PantallaInicio />}
        </>
    )
}

export default App
