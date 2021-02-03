import React from 'react';
import { connect } from 'react-redux';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addToCart } from '../actions/index'

class Home extends React.Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        let itemList = this.props.items.map(item => {
            console.log(item)
        return(
            <div className="card" key={item.id}>
                <div className="card-image">
                    <img src={item.img} alt={item.title} />
                    <span className="card-title">{item.title}</span>
                    <span 
                        className="card-plusbutton" 
                        onClick={()=>{this.handleClick(item.id)}}>
                        <FontAwesomeIcon icon={faPlus} />
                    </span>
                </div>

                <div className="card-content">
                    <p>{item.desc}</p>
                    <p><b>Price: {item.price}$</b></p>
                </div>
            </div>
        )
    })

        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
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
}

export default connect(mapStatetoProps, mapDispatchToProps)(Home);
