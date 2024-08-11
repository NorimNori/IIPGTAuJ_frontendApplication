import FondoPantalla from "../../components/fondoPantalla/FondoPantalla"
import Icono from "../../components/icono/Icono"
import PiePagina from "../../components/piePagina/PiePagina"
import './pantallaInicio.css'

function PantallaInicio() {

    return (
        <>
            <section>
                <div className='sec-1'>
                    <Icono />
                    <FondoPantalla />
                </div>
                <PiePagina />
            </section>

        </>
    )
}

export default PantallaInicio