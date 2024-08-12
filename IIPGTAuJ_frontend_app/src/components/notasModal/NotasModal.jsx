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
                <p className="wish">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta excepturi minus accusamus maiores aperiam nulla quod eaque quam sunt, veritatis ipsam veniam aliquid nihil tempore culpa harum consequatur labore sapiente?</p>

            </section>
        </>
    )
}

export default NotasModal