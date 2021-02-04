import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../stylesheets/navbar.css';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Navbar extends React.Component {
    
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-shopping">
                <Link to="/" className="navbar-brand">Shopping</Link>
                    <ul className="navbar-nav">
                        <li className="nav-item active"><Link className="nav-link" to="/">Shop</Link></li>
                        <li 
                        className="nav-item">
                            <Link className="nav-link" to="/cart">
                                My cart ({this.props.totalQuantity})
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </Link>
                        </li>
                    </ul>
            </nav>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        totalQuantity: state.cart.totalQuantity
    }
}

export default connect(mapStatetoProps)(Navbar);