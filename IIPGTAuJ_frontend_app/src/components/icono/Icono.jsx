import useOpen from '@/hooks/useOpen'
import './icono.css'

function Icono() {
    const { isOpen } = useOpen();
    return (
        <>
            <aside className='icn-cont'>
                <figure className="icn" onClick={isOpen}>
                    <img className="icn-img"src="./src/assets/notes.png"/>
                    <span className='ltrs'>Block de notas</span>
                </figure>
                <figure className="icn">
                    <img  className="icn-img" src="./src/assets/folder.png"/>
                    <span className='ltrs'>Documentos</span>
                </figure>
            </aside>
        </>
    )
}

export default Icono