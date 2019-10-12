export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};
export const updateObject2 = (oldObject, newValues) => {
    return Object.assign({}, oldObject, newValues);
};
