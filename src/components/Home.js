import React from 'react';
import '../stylesheets/home.css';
import { connect } from 'react-redux';
import { addToCart } from '../actions/index'

class Home extends React.Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    } // add item to shopping cart

    render() {
        let itemList = this.props.items.map(item => {
        return(
            <div className="card" key={item.id}>
                <div className="card-image">
                    <img src={item.img} alt={item.title} />
                    <button 
                        className="btn btn-success" 
                        onClick={()=>{this.handleClick(item.id)}}>
                        Add to cart
                    </button>
                </div>
                <div className="card-content">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.desc}</p>
                    <p><b>Price: {item.price}€</b></p>
                </div>
            </div>
        )
    }) // create a list of items from the reducer object. Creates cards with Image, Price, Title and Description
        return(
            <div className="container">
                <h3 className="center">Our items:</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        ) // return complete list of items
    }
}

const mapStatetoProps = (state) => {
    return {
        items: state.cart.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        addToCart: (id) => { dispatch(addToCart(id)) }     
    }
} // only one dispatch function is needed, adding items to the cart. 

export default connect(mapStatetoProps, mapDispatchToProps)(Home);
