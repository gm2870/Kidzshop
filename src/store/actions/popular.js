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
export const addToCart = id => {
    return {
        type: actionTypes.ADD_TO_CART,
        id: id
    };
};
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
        // const headers = {
        //     "X-Parse-Application-Id":
        //         "jhPII7vY81BUn3qDQFkSwcJhw6UVP3lOQw7HZBhP",
        //     "X-Parse-REST-API-Key": "NsQ83M6tPrTVCHJnhSAM0i8feJm0SsuXK5nbVZ4a"
        // };
        fetch("http://localhost/laravel_kidzshop_adminlte/public/api/products")
            .then(response => response.json())
            .then(data => {
                const fetchPopularProducts = [];
                for (let key in data) {
                    fetchPopularProducts.push({
                        ...data[key],
                        id: key
                    });
                }
                console.log(fetchPopularProducts);
                dispatch(setPopular(fetchPopularProducts));
            });
        // axios
        //     .get(
        //         "http://localhost/laravel_kidzshop_adminlte/public/api/products"
        //     )
        //     .then(response => {
        //         console.log(response.data);
        //         // const fetchPopularProducts = [];
        //         // for (let key in data) {
        //         //     fetchPopularProducts.push({
        //         //         ...data[key],
        //         //         id: key
        //         //     });
        //         // }
        //         // dispatch(setPopular(fetchPopularProducts));
        //     });
        // .catch(error => {
        //     dispatch(getPopularFailed(error));
        // });
    };
};
