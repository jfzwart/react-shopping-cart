import React from 'react';
import Register from './Register'
import '../stylesheets/cart.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from '../actions/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class Cart extends React.Component {

    handleRemove = (id) => {
        this.props.removeItem(id);
    } // completely removes item from cart

    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    } // increments quantity to cart

    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id)
    } // subtract quantity from cart

    render(){
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item => {
                    return (
                        <li className="collection-item checkout" key={item.id}>
                            <div className="item-img"> 
                                <img src={item.img} alt={item.img} className=""/>
                                <button className="btn btn-warning removebutton" onClick={()=>{this.handleRemove(item.id)}}><FontAwesomeIcon icon={faTimes} /></button>
                            </div>
                            <div className="item-desc">
                                <h2 className="title">{item.title}</h2>
                                <p>{item.desc}</p>
                                <p><b>Price: {item.price}€</b></p> 
                                <p><b>Quantity: {item.quantity}</b></p>
                                <div className="add-remove">
                                    <Link to="/cart"><i className="btn btn-success" onClick={()=>{this.handleAddQuantity(item.id)}}>+</i></Link>
                                    <Link to="/cart"><i className="btn btn-danger" onClick={()=>{this.handleSubtractQuantity(item.id)}}>-</i></Link>
                                </div>
                            </div>
                        </li>                        
                    )
                })
            ):

            (
            <p>Nothing.</p>
            ) // if items are available, render them in the cart, else show "Nothing"

        return (
                <div className="container">
                    <div className="cart">
                        <h5>You have ordered:</h5>
                        <ul className="collection">
                            {addedItems}
                        </ul>
                    </div>  
                    <Register />
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.cart.addedItems,
        discountStatus: state.cart.discountStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => {dispatch(removeItem(id))},
        addQuantity: (id) => {dispatch(addQuantity(id))},
        subtractQuantity: (id) => {dispatch(subtractQuantity(id))}
    }   
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);