import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../index.css';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Navbar extends React.Component {
    render() {

        console.log(this.props.addedItems)
        return(
            <nav className="navbar navbar-expand-sm navbar-light navbar-shopping">
                <Link to="/" className="navbar-brand">Shopping</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active"><Link className="nav-link" to="/">Shop</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/cart">My cart {this.props.addedItems.length}<FontAwesomeIcon icon={faShoppingCart} /></Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        addedItems: state.cart.addedItems
    }
}

export default connect(mapStatetoProps)(Navbar);