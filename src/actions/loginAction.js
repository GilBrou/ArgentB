import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../actions/actionTypes";

// Login action

export const loginSucces = (token) => ({
  type: USER_LOGIN_SUCCESS,
  token,
});

export const loginFail = (error) => ({
  type: USER_LOGIN_FAIL,
  error,
});

// Logout action
export const logout = () => ({
  type: USER_LOGOUT,  
});
