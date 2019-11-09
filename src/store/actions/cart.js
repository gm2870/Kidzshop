import * as actionTypes from "./actionTypes";

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
