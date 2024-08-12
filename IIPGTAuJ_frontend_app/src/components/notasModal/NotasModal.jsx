import { AiFillCloseSquare } from "react-icons/ai";
import './notasModal.css'

function NotasModal({ isClose }) {
    return (
        <>
            <section className='cont-nt'>
                <header
                    className='header'
                >
                    adopta_un_junior.txt
                    <span><AiFillCloseSquare onClick={isClose} id="close-nt"/></span>
                </header>
                <p className="wish">A quien corresponda.</p>
                <p className="wish">
                Los motivos por los que me gustaría unirme a los grupos de trabajo de Adopta un Junior porque siento una profunda motivación por seguir aprendiendo y creciendo, no solo en el ámbito técnico, sino también a nivel personal. Creo que compartir esta etapa de mi carrera con otros que también están comenzando su camino en el desarrollo web será una experiencia invaluable. Para mí, la colaboración y el intercambio de experiencias son más que simples oportunidades de aprendizaje; son momentos para construir conexiones significativas y apoyarnos mutuamente en este emocionante, aunque a veces desafiante, viaje profesional
                </p>
                <p className="wish">
                Veo en esta iniciativa una excelente oportunidad para mejorar mis habilidades de colaboración y comunicación, desafiando mi naturaleza introvertida, y para sumergirme en un entorno donde la responsabilidad y el compromiso no solo se valoran, sino que se viven día a día. Quiero formar parte de una comunidad en la que podamos crecer juntos, aprender de nuestros errores y celebrar nuestros éxitos, apoyándonos unos a otros a lo largo del camino.
                </p>
                <p className="wish">
                Por supuesto, mi objetivo final es encontrar un trabajo donde pueda continuar este viaje, obteniendo una mayor perspectiva de cómo es realmente el mundo laboral y aplicando todo lo aprendido durante esta etapa. Además, quiero estar mejor preparada para enfrentar las dificultades que se presentan en el ámbito laboral, tanto al momento de buscar un empleo como al desempeñarme en un puesto, especialmente con mi estatus de desarrolladora junior sin experiencia previa.
                </p>
                <p className="wish">
                Finalmente, pero no menos importante, quiero devolver todo el apoyo que se me ha brindado durante el tiempo que he estado aprendiendo las bases. Esta oportunidad sería el primer paso para comenzar a demostrar, sin arrepentimientos, que todo ha valido la pena y que estoy lista para enfrentar lo que venga.
                </p>
                <p className="wish">
                    Muchas gracias por su apoyo, dedicación y tiempo.
                </p>
                <p className="wish">- Gloria.</p>

            </section>
        </>
    )
}

export default NotasModal