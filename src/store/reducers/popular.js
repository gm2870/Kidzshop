import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';
const initialState = {
    popularProduct:[],
    total:false,
    new:null
}; 
const getPopular = (state,action) => {
    for (let key in action.payload){
        state.popularProduct.push({
            ...action.payload[key],
            id:key
        })
    } 
    const popularP =state.popularProduct;
    console.log(popularP)
}
 const reducer = (state = initialState,action) => {
    switch (action.type) {
        case actionTypes.GET_POPULAR:return getPopular(state,action);
        default:return state;
    }
};
export default reducer ;