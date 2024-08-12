import { MdOutlineNotes } from "react-icons/md";
import { AiOutlineFolder } from "react-icons/ai";
import useOpen from '@/hooks/useOpen'
import './icono.css'

function Icono() {
    const { isOpen } = useOpen();
    return (
        <>
            <aside className='icn-cont'>
                <figure className="icn" onClick={isOpen}>
                    <MdOutlineNotes className="icn-img"/>
                    <span className='ltrs'>Adopta_un_junior.txt</span>
                </figure>
                <figure className="icn">
                    <AiOutlineFolder className="icn-img"/>
                    <span className='ltrs'>Documentos</span>
                </figure>
            </aside>
        </>
    )
}

export default Icono