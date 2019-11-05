import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";
const initialState = {
    cart: [],
    totalQty: 0
};

const addToCart = (state, action) => {
    const addedItem = action.item;
    addedItem.added = true;
    const copiedState = Object.assign({}, state);
    copiedState.totalQty += 1;
    copiedState.cart.push(addedItem);

    const updatedState = {
        cart: copiedState.cart,
        totalQty: copiedState.totalQty
    };
    console.log(updatedState);
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
        totalQty: state.totalQty - 1
    };
    var cartObj = {
        cart: updatedState.cart,
        totalQty: updatedState.totalQty
    };

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
