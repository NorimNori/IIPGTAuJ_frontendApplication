import useReload from "@/hooks/useReload";
import './pantallaCierre.css'

function PantallaCierre() {
    const { handleRefresh } = useReload();
    return (
        <>
            <main className="fn-cont">
                <h1>STATUS: FINALIZADO</h1>
                <h2>|| Sistema apagado exitosamente ||</h2>
                <h2>Por favor, si desea volver a iniciar el sistema oprima el botón que se encuentra justo debajo de esta sentencia.
                </h2>
                <button onClick={handleRefresh} className="fn-btn">INICIAR</button>
            </main>
        </>
    );
}

export default PantallaCierre;