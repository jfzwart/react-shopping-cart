import Item1 from '../images/cocktail1.jpg'
import Item2 from '../images/cocktail2.jpg'
import Item3 from '../images/cocktail3.jpg'
import Item4 from '../images/cocktail4.jpg'
import Item5 from '../images/cocktail5.jpg'
import Item6 from '../images/cocktail6.jpg'
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_DISCOUNT, REMOVE_DISCOUNT } from '../actions/types'

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
    totalQuantity: 0,
    total: 0,
    discount: 0
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
                    total: state.total + addedItem.price,
                    totalQuantity: state.totalQuantity += 1
                }
            }
        else {
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal,
                totalQuantity: state.totalQuantity += 1
            }
        }
    }

    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal,
              totalQuantity: state.totalQuantity += 1
          }
    }

    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal,
                totalQuantity: state.totalQuantity -= 1

            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal,
                totalQuantity: state.totalQuantity -= 1
            }
        }
    }

    if(action.type === ADD_DISCOUNT){
        let newDiscount = state.total * 0.2
        let newTotal = state.total - newDiscount
        return { 
            ...state, 
            discount: newDiscount,
            total: newTotal
        }
    }

    if(action.type === REMOVE_DISCOUNT){
        let newTotal = state.total / 0.8
        return {...state,
            discount: 0,
            total: newTotal
        }
    }

    return state
}

export default cartReducer;