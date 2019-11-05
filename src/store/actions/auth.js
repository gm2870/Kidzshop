import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId, userName) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        sessionToken: token,
        objectId: userId,
        username: userName
    };
};

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("username");

    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const setAuthTimeout = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, 24 * 60000);
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
            .post(
                "http://localhost/laravel_kidzshop_backend/public/api/register",
                authData
            )
            .then(response => {
                if (response.data.status === "true") {
                    const expirationDate = new Date(
                        new Date().getTime() + 24 * 60000
                    );
                    localStorage.setItem("token", response.data.sessionId);
                    localStorage.setItem("expirationDate", expirationDate);
                    localStorage.setItem("username", username);
                    localStorage.setItem("userId", response.data.userId);

                    dispatch(authSuccess(response.data));
                } else {
                    // console.log(response.data);
                    dispatch(authFail(response.data.message));

                    console.log(response.data.message);
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
            .post(
                "http://localhost/laravel_kidzshop_backend/public/api/login",
                authData
            )
            .then(response => {
                if (response.data.status === "true") {
                    const expiresIn = 24 * 60000;
                    const expirationDate = new Date(
                        new Date().getTime() + expiresIn
                    );
                    localStorage.setItem("token", response.data.sessionId);
                    localStorage.setItem("expirationDate", expirationDate);
                    localStorage.setItem("username", response.data.username);
                    localStorage.setItem("userId", response.data.userId);

                    dispatch(
                        authSuccess(
                            response.data.sessionId,
                            response.data.username
                        )
                    );
                    dispatch(setAuthTimeout(24 * 60000));
                } else {
                    dispatch(authFail(response.data.message));
                }
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem("token");
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(
                localStorage.getItem("expirationDate")
            );
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem("userId");
                dispatch(authSuccess(token, userId));
                dispatch(
                    setAuthTimeout(
                        (expirationDate.getTime() - new Date().getTime()) / 1000
                    )
                );
            }
        }
    };
};
