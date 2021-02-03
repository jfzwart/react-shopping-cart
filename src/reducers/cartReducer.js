import Item1 from '../images/cocktail1.jpg'
import Item2 from '../images/cocktail2.jpg'
import Item3 from '../images/cocktail3.jpg'
import Item4 from '../images/cocktail4.jpg'
import Item5 from '../images/cocktail5.jpg'
import Item6 from '../images/cocktail6.jpg'
import { ADD_TO_CART } from '../actions/types'

const initState = {
    items: [
        {id:1,title:'Winter', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:9,img:Item1},
        {id:2,title:'Dark', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:8,img: Item2},
        {id:3,title:'Stormy', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:10,img: Item3},
        {id:4,title:'Fruity', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:7,img:Item4},
        {id:5,title:'Grapefruit', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:9,img: Item5},
        {id:6,title:'Pepper', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:10,img: Item6}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action) => {

    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find((item) => item.id === action.id )
        let existedItem = state.addedItems.find((item) => action.id === item.id )
        if(existedItem)
            {
            addedItem.quantity += 1
            return {
                    ...state, 
                    total: state.total + addedItem.price
                }
            }
        else {
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }
        }
    }
    else {
        return state;  
    }
}

export default cartReducer;