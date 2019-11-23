// import axios from "axios";
import * as actionTypes from "./actionTypes";
import { backendBaseUrl } from "../../shared/utility";

export const setPopular = payload => {
    return {
        type: actionTypes.GET_POPULAR,
        payload
    };
};
export const getPopularFailed = () => {
    return {
        type: actionTypes.GET_POPULAR_FAILED
    };
};
export const getPopularProducts = () => {
    return dispatch => {
        fetch(`${backendBaseUrl}/api/products`)
            .then(response => response.json())
            .then(data => {
                const fetchPopularProducts = [];
                for (let key in data) {
                    fetchPopularProducts.push({
                        ...data[key],
                        id: data[key].id
                    });
                }
                dispatch(setPopular(fetchPopularProducts));
            })
            .catch(error => {
                dispatch(getPopularFailed(error));
            });
    };
};
