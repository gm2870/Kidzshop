import axios from 'axios';
import * as actionTypes from './actionTypes';
export const incrementQty = (id) => {
    return {
        type:actionTypes.INCREMENT_QTY,
        payload:{
            id:id
        }
    };
};
export const decrementQty = (id) => {
    return {
        type:actionTypes.DECREMENT_QTY,
        id
    };
};
export const setPopular = (payload) => {
    return {
        type:actionTypes.GET_POPULAR,
        payload
    };
};
export const getPopularFailed = () => {
    return {
        type:actionTypes.GET_POPULAR_FAILED
    };
};
export const getPopularProducts = () => {
    return dispatch => {
        const headers = {
			"X-Parse-Application-Id": "jhPII7vY81BUn3qDQFkSwcJhw6UVP3lOQw7HZBhP",
            "X-Parse-REST-API-Key": "NsQ83M6tPrTVCHJnhSAM0i8feJm0SsuXK5nbVZ4a",
        };
        axios.get('https://kidzshop.back4app.io/classes/Popular',{headers:headers})
        .then(response => {
            const fetchPopularProducts = [];
            for (let key in response.data.results){
                fetchPopularProducts.push({
                    ...response.data.results[key],
                    id:key
                })
            }
            dispatch(setPopular(fetchPopularProducts));
        })
        .catch( error => {
            dispatch(getPopularFailed());
        } );
    };
};