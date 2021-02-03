import React from 'react';
import { connect } from 'react-redux';
import { addDiscount, removeDiscount } from '../actions/index';

class Register extends React.Component {

    componentWillUnmount() {
        if(this.refs.discount.checked)
            this.props.removeDiscount()
    }

    handleChecked = (e) => {
        if(e.target.checked){
            this.props.addDiscount();
        }
        else{
            this.props.removeDiscount();
        }
    }

    render(){
        console.log(this.props.total)
        
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="discount" onChange= {this.handleChecked} />
                                <span>Discount(20%)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div>
                    <div className="checkout">
                        <button className="btn btn-success">Checkout</button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        addedItems: state.cart.addedItems,
        total: state.cart.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addDiscount: () => { dispatch( {type: 'ADD_DISCOUNT'} )},
        removeDiscount: () => { dispatch( { type: 'REMOVE_DISCOUNT'} )}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);