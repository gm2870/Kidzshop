import * as actionTypes from './actionTypes';
export const addItem = (id) => {
    return {
        type:actionTypes.ADD_ITEM,
        id
    };
};
export const removeItem = (id) => {
    return {
        type:actionTypes.REMOVE_ITEM,
        id
    };
};