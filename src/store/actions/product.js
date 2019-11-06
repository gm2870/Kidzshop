import * as actionTypes from "./actionTypes";
import Axios from "axios";
import { backendBaseUrl } from "../../shared/utility";
export const fetchProductStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCT_START
    };
};
export const fetchProductSuccess = product => {
    return {
        type: actionTypes.FETCH_PRODUCT_SUCCESS,
        product: product
    };
};
export const getProductFailed = error => {
    return {
        type: actionTypes.FETCH_PRODUCT_FAIL,
        error: error
    };
};

export const getProduct = id => {
    return dispatch => {
        dispatch(fetchProductStart());

        Axios.get(`${backendBaseUrl}/api/products/${id}`)
            .then(response => {
                dispatch(fetchProductSuccess(response.data.product));
            })
            .catch(error => {
                dispatch(getProductFailed(error));
            });
    };
};
