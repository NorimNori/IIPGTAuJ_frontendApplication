import './icono.css'

function Icono() {

    return (
        <>
            <aside className='icn-cont'>
                <figure className="icn" >
                    <img className="icn-img"src="./src/assets/notes.png"/>
                    <span className='ltrs'>Notas</span>
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