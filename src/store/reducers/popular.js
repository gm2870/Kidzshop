import * as actionTypes from '../actions/actionTypes';
const initialState = {
    cc:[]
}
const getPopular = (state,action) => {
    for (let key in action.payload){
        state.cc.push({
            ...action.payload[key],
            id:key
        })
    }
    // console.log(state.popularProduct)
    return state;
//     const arrayToObject = (array) =>
//    array.reduce((obj, item) => {
//      obj[item.id] = item
//      return obj
//    }, {})
//  arrayToObject(state.popularProduct)
};
 const reducer = (state = initialState,action) => {
    switch (action.type) {
        case actionTypes.GET_POPULAR:return getPopular(state,action);
        default:return state;
    }
};
export default reducer ;