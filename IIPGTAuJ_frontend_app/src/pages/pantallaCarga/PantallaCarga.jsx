import BarraCarga from '../../components/barraCarga/BarraCarga'
import LogoCarga from '../../components/logoCarga/LogoCarga'
import './pantallaCarga.css'

const PantallaCarga = () => {

    return(
        <>
            <section className='logo'>
                <LogoCarga />
                <BarraCarga />
            </section>
        </>
    )
}

export default PantallaCarga