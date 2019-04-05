import * as actionTypes from './actionTypes';
export const addItem = (id) => {
    return {
        type:actionTypes.ADD_ITEM,
        itemId:id
    };
};
export const removeItem = (id) => {
    return {
        type:actionTypes.REMOVE_ITEM,
        itemId:id
    };
};