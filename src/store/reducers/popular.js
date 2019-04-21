import * as actionTypes from '../actions/actionTypes';
const initialState = {
    popular:[],
    isFetched:false
}
const getPopular = (state,action) => {
    return {
        ...state,
        popular:[...action.payload],
        isFetched:true
    };
};
 const reducer = (state = initialState,action) => {
    switch (action.type) {
        case actionTypes.GET_POPULAR:return getPopular(state,action);
        default:return state;
    }
};
export default reducer ;