import FondoPantalla from "@/components/fondoPantalla/FondoPantalla"
import Icono from "@/components/icono/Icono"
import NotasModal from "@/components/notasModal/NotasModal"
import PiePagina from "@/components/piePagina/PiePagina"
import { useOpenContext } from "@/contexct/OpenContext"
import useOpen from "@/hooks/useOpen"
import './pantallaInicio.css'

function PantallaInicio() {
    const { open } = useOpenContext();
    const { isClose, isShutDown } = useOpen();
    return (
        <>
            <section>
                <div className='sec-1'>
                    <Icono />
                    {open && <NotasModal isClose={isClose} />}
                    <FondoPantalla />
                </div>
                <PiePagina isShutDown={isShutDown}/>
            </section>

        </>
    )
}

export default PantallaInicio