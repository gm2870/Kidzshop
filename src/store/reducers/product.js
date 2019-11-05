import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
    product: {},
    isFetched: false,
    loading: false,
    error: null
};
const getProductstart = (state, action) => {
    return updateObject(state, { loading: true });
};
const getProductSuccess = (state, action) => {
    const product = action.product;
    return updateObject(state, { loading: false, product: product });
};

const getProductFailed = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCT_START:
            return getProductstart(state, action);
        case actionTypes.FETCH_PRODUCT_SUCCESS:
            return getProductSuccess(state, action);
        case actionTypes.FETCH_PRODUCT_FAIL:
            return getProductFailed(state, action);
        default:
            return state;
    }
};
export default reducer;
