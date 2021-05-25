import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
    product: {},
    error: null,
    isFetched: false
};

const getProductSuccess = (state, action) => {
    return updateObject(state, {
        product: action.product,
        loading: false,
        isFetched: true
    });
};

const getProductFailed = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCT_SUCCESS:
            return getProductSuccess(state, action);
        case actionTypes.FETCH_PRODUCT_FAIL:
            return getProductFailed(state, action);
        default:
            return state;
    }
};
export default reducer;
