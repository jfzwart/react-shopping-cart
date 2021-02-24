import React from 'react';
import '../stylesheets/cart.css';
import { connect } from 'react-redux';
import { addDiscount, removeDiscount } from '../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSquare } from "@fortawesome/free-solid-svg-icons";

class Register extends React.Component {

    componentWillUnmount() {
        if(this.props.discount)
            this.props.removeDiscount()
    } // remove discount on unmount

    handleChecked = () => {
        if(!this.props.discount){
            this.props.addDiscount();
        }
        else{
            this.props.removeDiscount();
        }
    } // if no discount is added, add discount on checkmark, else remove upon uncheck

    renderDiscount() {
        if (this.props.discount) {
            return `(incl. € ${this.props.discount.toFixed(2)} discount)`
        }
        return ''
    }   // render discount if discount is checked

    renderCheckbox() {
        if (this.props.discountStatus) {
            return <FontAwesomeIcon icon={faCheckSquare} />
        }
        return <FontAwesomeIcon icon={faSquare} />
    } // render icon on check or no check
    
    render(){
        let addedItems = this.props.addedItems.length ?
        (  
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <div onClick= {this.handleChecked}>
                                {this.renderCheckbox()}
                                <span> Add discount (20%)</span>
                                </div>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total.toFixed(2)} € {this.renderDiscount()}</b></li>
                        <li className="collection-item"><b>Items: {this.props.totalQuantity}</b></li>
                    </div>
                    <div className="checkout">
                        <button className="btn btn-success">Checkout</button>
                    </div>
                </div>
        ):
        (
        <p>Go to the shop to place your order</p>
        )  
        return(
            <div>{addedItems}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        addedItems: state.cart.addedItems,
        discount: state.cart.discount,
        total: state.cart.total,
        discountStatus: state.cart.discountStatus,
        totalQuantity: state.cart.totalQuantity
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addDiscount: () => { dispatch(addDiscount()) },
        removeDiscount: () => { dispatch(removeDiscount()) }
    }
} // two action types are needed add and remove discount

export default connect(mapStateToProps, mapDispatchToProps)(Register);
