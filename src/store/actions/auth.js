import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
		type:actionTypes.AUTH_START
    };
};

export const authSuccess = (token , userId) => {
	return {
		type:actionTypes.AUTH_SUCCESS,
		sessionToken:token,
		userId:userId
	};
};

export const authFail = (error) => {
	return {
		type:actionTypes.AUTH_FAIL,
		error:error
	};
};

export const registerAuth = ( username,password,email,repeatPass) => {
	return dispatch => {
		dispatch(authStart());
		const headers = {
			"X-Parse-Application-Id": "jhPII7vY81BUn3qDQFkSwcJhw6UVP3lOQw7HZBhP",

			"X-Parse-REST-API-Key": "NsQ83M6tPrTVCHJnhSAM0i8feJm0SsuXK5nbVZ4a",

			"X-Parse-Revocable-Session": 1,

			"Content-Type": "application/json"
		};
		const authData = {
			username:username,
			password:password,
			email:email,
			repeatPass:repeatPass,
		};
		axios.post('https://parseapi.back4app.com/users',authData,{headers:headers})
		.then(response => {
			console.log(response);
			dispatch(authSuccess(response.data));
		})
		.catch(error => {
			console.log(error);
			dispatch(authFail(error));
		})
	};
};

export const loginAuth = (username,password) => {
	return dispatch => {
		dispatch(authStart());
		const headers = {
			"X-Parse-Application-Id": "jhPII7vY81BUn3qDQFkSwcJhw6UVP3lOQw7HZBhP",

			"X-Parse-REST-API-Key": "NsQ83M6tPrTVCHJnhSAM0i8feJm0SsuXK5nbVZ4a",

			"X-Parse-Revocable-Session": 1
		};
		const authData = {
			username:username,
			password:password
		};
		console.log(authData);
		axios.post('https://parseapi.back4app.com/login',authData,{headers:headers})
		.then(response => {
			console.log(response);
			dispatch(authSuccess(response.data));
		})
		.catch(error => {
			console.log(error);
			dispatch(authFail(error));
		})
	};
};
