import * as actionTypes from "./actionTypes";
import axios from "axios";
import { backendBaseUrl } from "../../shared/utility";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId, userName) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        access_token: "true",
        objectId: userId,
        username: userName
    };
};

export const removeLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");

    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};
export const registerAuth = (username, password, email, repeatPass) => {
    return dispatch => {
        dispatch(authStart());

        const authData = {
            username: username,
            password: password,
            email: email,
            repeatPass: repeatPass
        };
        axios
            .post(`${backendBaseUrl}/api/register`, authData)
            .then(response => {
                if (response.data.status === "true") {
                    localStorage.setItem("token", response.data.access_token);
                    localStorage.setItem("username", username);
                    localStorage.setItem("userId", response.data.userId);

                    dispatch(authSuccess(response.data));
                } else {
                    dispatch(authFail(response.data.message));
                }
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const loginAuth = (username, password) => {
    return dispatch => {
        dispatch(authStart());

        const authData = {
            username: username,
            password: password
        };
        axios
            .post(`${backendBaseUrl}/api/login`, authData)
            .then(response => {
                if (response.data.status === "true") {
                    localStorage.setItem("token", response.data.access_token);
                    localStorage.setItem("username", response.data.username);
                    localStorage.setItem("userId", response.data.userId);

                    dispatch(
                        authSuccess(
                            response.data.access_token,
                            response.data.username
                        )
                    );
                } else {
                    dispatch(authFail(response.data.message));
                }
            })
            .catch(error => {
                console.log(error);
            });
    };
};
export const checkLoginStatus = () => {
    return dispatch => {
        const token = `Bearer ${localStorage.getItem("token")}`;
        fetch(`${backendBaseUrl}/api/CheckLoginStatus`, {
            headers: new Headers({
                Accept: "aplication/json",
                Authorization: token
            })
        })
            .then(response => response.json())
            .then(response => {
                if (response.user === null) {
                    dispatch(removeLocalStorage());
                }
            });
    };
};
export const logout = () => {
    return dispatch => {
        const token = `Bearer ${localStorage.getItem("token")}`;
        fetch(`${backendBaseUrl}/api/logout`, {
            headers: new Headers({
                Accept: "aplication/json",
                Authorization: token
            })
        })
            .then(response => response.json())
            .then(() => {
                dispatch(removeLocalStorage());
            });
    };
};
