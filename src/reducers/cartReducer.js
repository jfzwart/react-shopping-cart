import Item1 from '../images/cocktail1.jpg'
import Item2 from '../images/cocktail2.jpg'
import Item3 from '../images/cocktail3.jpg'
import Item4 from '../images/cocktail4.jpg'
import Item5 from '../images/cocktail5.jpg'
import Item6 from '../images/cocktail6.jpg'
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_DISCOUNT, REMOVE_DISCOUNT } from '../actions/types'

// created an object that contains the items, as well as an empty shopping cart, quantities and price
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
    discount: 0,
    discountStatus: false
}

const cartReducer= (state = initState,action) => {
// checks if the item is already in the shopping cart, if not add it, if yes increment the quantity and price
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

// find the item that needs to be removed, filter for the items that are remaining, create a new total price and quantity
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        let newTotalQuantity = state.totalQuantity - itemToRemove.quantity
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal,
            totalQuantity: newTotalQuantity
        }
    }

// increment the quantity and base the price on added discount or not. If discount if added before incrementing or reducing the quantity. Remove the discount first.
    if(action.type=== ADD_QUANTITY){
        let discountStatus = state.discountStatus
        if(discountStatus){
            let addedItem = state.items.find(item=> item.id === action.id)
            addedItem.quantity += 1 
            let newTotal = (state.total / 0.8) + addedItem.price
            return{
                ...state,
                discountStatus: false,
                discount: 0,
                total: newTotal,
                totalQuantity: state.totalQuantity += 1
            }
        }
        else {
            let addedItem = state.items.find(item=> item.id === action.id)
            addedItem.quantity += 1 
            let newTotal = state.total + addedItem.price
            return{
                ...state,
                discountStatus: false,
                total: newTotal,
                totalQuantity: state.totalQuantity += 1
            }
        }
    }

    if(action.type=== SUB_QUANTITY){  
        let discountStatus = state.discountStatus
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(discountStatus){
            if(addedItem.quantity === 1){
                let new_items = state.addedItems.filter(item=>item.id !== action.id)
                let newTotal = (state.total / 0.8) - addedItem.price
                return{
                    ...state,
                    discountStatus: false,
                    discount: 0,
                    addedItems: new_items,
                    total: newTotal,
                    totalQuantity: state.totalQuantity -= 1
                }
            }
            else {
                addedItem.quantity -= 1
                let newTotal = (state.total / 0.8) - addedItem.price
                return{
                    ...state,
                    discountStatus: false,
                    discount: 0,
                    total: newTotal,
                    totalQuantity: state.totalQuantity -= 1
                }
            }
        }
        else {
            if(addedItem.quantity === 1){
                let new_items = state.addedItems.filter(item=>item.id !== action.id)
                let newTotal = state.total - addedItem.price
                return{
                    ...state,
                    discountStatus: false,
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
    }

    if(action.type === ADD_DISCOUNT){
        let newDiscount = (state.total * 0.2)
        let newTotal = state.total - newDiscount
        return { 
            ...state, 
            discount: newDiscount,
            total: newTotal,
            discountStatus: true
        }
    }

    if(action.type === REMOVE_DISCOUNT){
        let newTotal = (state.total / 0.8)
        return {...state,
            discount: 0,
            total: newTotal,
            discountStatus: false
        }
    }

    return state
}

export default cartReducer;