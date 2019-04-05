// import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility'
const initialState = {
    items: null,
    totalPrice:0
};
const addItem = (state,action) => {
    const updatedItem = {[action.itemId]:state.item[action.itemId] + 1};
    const updateItems = updateObject(state,updatedItem);
    const updatedState = {
        items : updateItems,
        totalPrice:0
    }
    return updateObject(state,updatedState)
};
const reducer = (state=initialState,action) => {

};
export default reducer;