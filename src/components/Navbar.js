import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-sm navbar-light navbar-lewagon">
            <Link to="/" className="navbar-brand">Shopping</Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active"><Link className="nav-link" to="/">Shop</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/cart">My cart</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;