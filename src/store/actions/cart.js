import * as actionTypes from "./actionTypes";
// import Axios from "axios";
// import { backendBaseUrl } from "../../shared/utility";

export const incrementQty = id => {
    return {
        type: actionTypes.INCREMENT_QTY,
        payload: {
            id: id
        }
    };
};
export const decrementQty = id => {
    return {
        type: actionTypes.DECREMENT_QTY,
        payload: {
            id: id
        }
    };
};
export const addItemToCart = item => {
    return {
        type: actionTypes.ADD_TO_CART,
        item: item
    };
};

export const removeCartItem = item => {
    return {
        type: actionTypes.REMOVE_CART_ITEM,
        item: item
    };
};
// export const addToCart = item => {
//     return dispatch => {
//         const data = { product_id: item.id };
//         Axios.post(`${backendBaseUrl}/api/cart`, data, {
//             withCredentials: true
//         }).then(response => console.log(response));
//     };
// };
// item comes from cardView component
// export const addToCart = item => {
//     return (dispatch, getState) => {
//         const { popular } = getState();
//         const selectedItem = popular.popular.find(
//             productItem => productItem.id === item.id
//         );
//         addItemToCart(selectedItem);
//     };
// };
export const checkCartExpiryStatus = () => {
    return dispatch => {
        if (
            JSON.parse(localStorage.getItem("cart_items")) &&
            JSON.parse(localStorage.getItem("cart_items")).cart &&
            new Date(
                JSON.parse(localStorage.getItem("cart_items")).expirationDate
            ) <= new Date()
        ) {
            localStorage.removeItem("cart_items");
        }
    };
};
