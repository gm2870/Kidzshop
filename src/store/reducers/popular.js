import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';
const initialState = {
    popular:[],
    isFetched:false,
}
const incrementQty = (state,action) => {
    let addedItem = state.popular.find(item => item.objectId === action.payload.id);
   
    addedItem.qty += 1 ;
    console.log(addedItem.qty)
    return state;
}
const decrementQty = (state,action) => {
   
    return {
        ...state,
        itemQty:state.itemQty - 1
    }

}
const getPopularProducts = (state,action) => {
    return {
        ...state,
        popular:[...action.payload],
        isFetched:true
    };
};
 const reducer = (state = initialState,action) => {
    switch (action.type) {
        case actionTypes.GET_POPULAR:return getPopularProducts(state,action);
        case actionTypes.INCREMENT_QTY:return incrementQty(state,action);
        case actionTypes.DECREMENT_QTY:return decrementQty(state,action)
        default:return state;
    }
};
export default reducer ;