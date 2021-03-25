import { ADD_TO_CART, REMOVE_TO_CART,EMPTY_CART_ITEMS } from "./cartTypes"

const initialState = {cartItems:[]}
export const cartReducer = (state = initialState,action) => {
    switch(action.type){
        case EMPTY_CART_ITEMS:
            return {...state,cartItems:[]}
        case ADD_TO_CART:
            return {...state,cartItems:action.payload}
        case REMOVE_TO_CART:
            return {...state,cartItems:action.payload}
        default :
            return {...state}        
    }
}