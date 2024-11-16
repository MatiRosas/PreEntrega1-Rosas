import { useState } from "react";
import { FaBars } from "react-icons/fa";
import CartWidget from "./CartWidget";

function NavBar({ totalItems, onCartClick }) {
const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => {
    setIsOpen(!isOpen);
};

return (
    <>
    <header>
        <div className="container">
        <nav>
            <div className="logo">
            <h2>NUTRIRE</h2>
            </div>
            <ul className={isOpen ? "nav-link active" : "nav-link"}>
            <li>
                <a href="/home" className="active">Home</a>
            </li>
            <li>
                <a href="/nosotros">Nosotros</a>
            </li>
            <li>
                <a href="#products">Productos</a>
            </li>
            <li>
                <a href="#" onClick={onCartClick}>
                Ver Carrito <CartWidget totalItems={totalItems} />
                </a>
            </li>
            </ul>
            <div className="icon" onClick={toggleMenu}>
            <FaBars />
            </div>
        </nav>
        </div>
    </header>
    <section>
        <div className="container">
        <div className="content">
            <h2>¡Bienvenidos a NUTRIRE!</h2>
            <h4>¿Querés conocer todos nuestros productos?</h4>
        </div>
        </div>
    </section>
    </>
);
}

export default NavBar;
