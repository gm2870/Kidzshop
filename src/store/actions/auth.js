import * as actionTypes from "./actionTypes";
import axios from "axios";
import { backendBaseUrl } from "../../shared/utility";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (access_token, userId, userName) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        access_token: access_token,
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
            .post(`${backendBaseUrl}/api/auth/register`, authData)
            .then(response => {
                if (response.data.status === "true") {
                    localStorage.setItem("token", response.data.access_token);
                    localStorage.setItem(
                        "username",
                        response.data.user.username
                    );
                    localStorage.setItem("userId", response.data.user.id);

                    dispatch(
                        authSuccess(
                            response.data.access_token,
                            response.data.user.username,
                            response.data.user.id
                        )
                    );
                } else {
                    dispatch(authFail(response.data.message));
                }
            })
            .catch(response => {
                dispatch(authFail(response.data.message));
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
            .post(`${backendBaseUrl}/api/auth/login`, authData)
            .then(response => {
                if (response.data.status === "true") {
                    localStorage.setItem("token", response.data.access_token);
                    localStorage.setItem(
                        "username",
                        response.data.user.username
                    );
                    localStorage.setItem("userId", response.data.user.id);
                    dispatch(
                        authSuccess(
                            response.data.access_token,
                            response.data.user.username,
                            response.data.user.id
                        )
                    );
                } else {
                    dispatch(authFail(response.data.message));
                }
            })
            .catch(response => {
                dispatch(authFail(response.data.message));
            });
    };
};
export const checkLoginStatus = () => {
    return dispatch => {
        const token = `Bearer ${localStorage.getItem("token")}`;

        fetch(`${backendBaseUrl}/api/auth/CheckLoginStatus`, {
            headers: {
                Accept: "aplication/json",
                "Content-Type": "aplication/json",
                Authorization: token
            }
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.user === null) {
                    dispatch(removeLocalStorage());
                }
            });
    };
};
export const logout = () => {
    return dispatch => {
        const token = `Bearer ${localStorage.getItem("token")}`;
        fetch(`${backendBaseUrl}/api/auth/logout`, {
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
