import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";
const initialState = {
    cart: [],
    totalPrice: 0
};

const addToCart = (state, action) => {
    const addedItem = action.item;
    addedItem.added = true;
    addedItem.qty = 1;
    const copiedState = Object.assign({}, state);
    copiedState.totalQty += 1;
    copiedState.totalPrice += addedItem.price;
    copiedState.cart.push(addedItem);
    const updatedState = {
        cart: copiedState.cart,
        totalPrice: copiedState.totalPrice
    };
    localStorage.setItem("cart_items", JSON.stringify(updatedState));
    return updateObject(state, updatedState);
};
const removeCartItem = (state, action) => {
    const item = JSON.parse(localStorage.getItem("cart_items")).cart.find(
        selectedItem => selectedItem.id === action.item.id
    );
    const copiedState = Object.assign({}, state);

    const updatedCart = copiedState.cart.filter(item2 => item2.id !== item.id);
    const updatedState = {
        cart: updatedCart,
        totalPrice: copiedState.totalPrice - item.price
    };
    console.log(updatedState);
    let cartObj;
    if (updatedState.cart.length === 0) {
        cartObj = {
            cart: [],
            totalQty: 0,
            totalPrice: 0
        };
    } else {
        cartObj = {
            cart: updatedState.cart,
            ...updatedState
        };
    }
    localStorage.setItem("cart_items", JSON.stringify(cartObj));

    return updateObject(state, updatedState);
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return addToCart(state, action);
        case actionTypes.REMOVE_CART_ITEM:
            return removeCartItem(state, action);
        default:
            return state;
    }
};
export default reducer;
