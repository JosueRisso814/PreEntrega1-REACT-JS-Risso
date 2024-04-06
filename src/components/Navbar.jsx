import './navbar.css'
import icon from '../assets/icon.png'
import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <nav className='navbar'>
        <div>
          <img className='icon' src={icon} alt="" />
        </div>
        <ul className='navbar-links'>
          <li className='navbar-item'>
            <a href="">Inicio</a>
          </li>
          <li className='navbar-item'>
            <a href="">Productos</a>
          </li>
          <li className='navbar-item'>
            <a href="">Quien soy</a>
          </li>
        </ul>
        <div className="carrito">
          <CartWidget/>
          <span className="badge">2</span>
        </div>
    </nav>
  )
}

export default Navbar
