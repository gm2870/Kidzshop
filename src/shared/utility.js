export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const backendBaseUrl = "http://kidsadmin.alifarzanegan.ir";
// export const backendBaseUrl = "http://localhost:8000";
