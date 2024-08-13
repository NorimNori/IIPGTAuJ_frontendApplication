import { SiWindows } from "react-icons/si";
import './piePagina.css'

function PiePagina({ isShutDown }) {

    return (
        <>
            <footer>
                <button className='btn-logo' onClick={isShutDown}>
                    <SiWindows className='w-logo'/>
                   CERRAR
                </button>
                <div></div>
            </footer>

        </>
    )
}

export default PiePagina