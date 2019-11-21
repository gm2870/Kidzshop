export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};
// export const updateObject2 = (oldObject, newValues) => {
//     return Object.assign({}, oldObject, newValues);
// };
export const backendBaseUrl =
    "http://localhost/laravel_kidzshop_backend/public";
