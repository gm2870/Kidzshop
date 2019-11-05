// import axios from "axios";
import * as actionTypes from "./actionTypes";
export const incrementQty = id => {
    return {
        type: actionTypes.INCREMENT_QTY,
        payload: {
            id: id
        }
    };
};
export const decrementQty = id => {
    return {
        type: actionTypes.DECREMENT_QTY,
        payload: {
            id: id
        }
    };
};
// export const addToCart = id => {
//     return {
//         type: actionTypes.ADD_TO_CART,
//         id: id
//     };
// };
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
        fetch("http://localhost/laravel_kidzshop_backend/public/api/products")
            .then(response => response.json())
            .then(data => {
                const fetchPopularProducts = [];
                for (let key in data) {
                    fetchPopularProducts.push({
                        ...data[key],
                        id: data[key].id
                    });
                }
                console.log(data);

                dispatch(setPopular(fetchPopularProducts));
            })
            .catch(error => {
                dispatch(getPopularFailed(error));
            });
    };
};
