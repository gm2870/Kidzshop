import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility'
const initialState = {
    items: 0,
    totalPrice:0
};
const addItem = (state,action) => {
    // const updatedItem = {[action.itemId]:state.items[action.itemId] + 1};
    // const updateItems = updateObject(state,updatedItem);
    // const updatedState = {
    //     items : 1,
    //     totalPrice:0
    // };
    return {
        ...state,
        [action.itemId]:state.items[action.itemId] + 1
    };
};
const removeItem = (state,action) => {
    const updatedItem = {[action.itemId]:state.items[action.itemId] - 1};
    const updateItems = updateObject(state,updatedItem);
    const updatedState = {
        items : 0,
        totalPrice:0
    };
    return updateObject(state,updatedState);
};
const reducer = (state=initialState,action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM: return addItem(state,action)
        case actionTypes.REMOVE_ITEM: return removeItem(state,action)
        default:
            return state
    }

};
export default reducer;