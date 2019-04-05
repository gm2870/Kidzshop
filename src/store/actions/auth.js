import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
		type:actionTypes.AUTH_START
    };
};

export const authSuccess = (token , userId,userName) => {
	return {
		type:actionTypes.AUTH_SUCCESS,
		sessionToken:token,
		objectId:userId,
		username:userName
	};
};
export const logout = () => {
	localStorage.removeItem('token');
	localStorage.removeItem('expirationDate');
	localStorage.removeItem('userId');
	localStorage.removeItem('username');

	return {
		type:actionTypes.AUTH_LOGOUT
	};
};

export const setAuthTimeout = () => {
	return dispatch => {
		setTimeout(() => {
			dispatch(logout())
		}, 24*60000);
	}
}
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
			const expirationDate = new Date(new Date().getTime() + 24*60000);
			localStorage.setItem('token',response.data.sessionToken);
			localStorage.setItem('expirationDate',expirationDate);
			localStorage.setItem('userId',response.data.objectId);
			localStorage.setItem('username',response.data.username);

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
			const expiresIn = 24*60000;
			const expirationDate = new Date(new Date().getTime() + expiresIn);
			localStorage.setItem('token',response.data.sessionToken);
			localStorage.setItem('expirationDate',expirationDate);
			localStorage.setItem('userId',response.data.objectId);
			localStorage.setItem('username',response.data.username);

			dispatch(authSuccess(response.data.sessionToken ,response.data.objectId,response.data.username));
			dispatch(setAuthTimeout(24*60000))
		})
		.catch(error => {
			console.log(error.response.data.error);
			dispatch(authFail(error.response.data.code));
		});
	};
};

export const authCheckState = () => {
	return dispatch => {
		const token = localStorage.getItem('token');
		if(!token){
			dispatch(logout());
		}else {
			const expirationDate = new Date(localStorage.getItem('expirationDate'));
			if(expirationDate <= new Date()){
				dispatch(logout());
			}else{
				const userId = localStorage.getItem('userId');
				dispatch(authSuccess(token,userId));
				dispatch(setAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
			}
		}
	}
}
