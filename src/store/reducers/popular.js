import * as actionTypes from "../actions/actionTypes";
// import { removeCartItem, getState } from "../actions";

const initialState = {
    popular: [],
    isFetched: false,
    loading: false
};

// const incrementQty = (state, action) => {
//     let addedItem = state.popular.find(
//         item => item.objectId === action.payload.id
//     );
//     if (addedItem.availableQty > addedItem.qty) {
//         addedItem.qty += 1;
//     } else {
//         addedItem.qty = addedItem.availableQty;
//     }
//     return {
//         ...state,
//         popular: [...state.popular]
//     };
// };
// const decrementQty = (state, action) => {
//     let addedItem = state.popular.find(
//         item => item.objectId === action.payload.id
//     );
//     if (addedItem.qty > 1) {
//         addedItem.qty -= 1;
//     } else {
//         addedItem.qty = 1;
//     }
//     return {
//         ...state,
//         popular: [...state.popular]
//     };
// };
const getPopularProducts = (state, action) => {
    return {
        ...state,
        popular: [...action.payload],
        isFetched: true
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_POPULAR:
            return getPopularProducts(state, action);
        // case actionTypes.REMOVE_CART_ITEM:
        //     return removeCartItem(state, action);
        // case actionTypes.INCREMENT_QTY:
        //     return incrementQty(state, action);
        // case actionTypes.DECREMENT_QTY:
        //     return decrementQty(state, action);
        default:
            return state;
    }
};
export default reducer;
