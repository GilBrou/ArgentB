import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  isLogged: false,
  token: "",
};

export const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return { isLogged: true, token: action.token };
    case USER_LOGIN_FAIL:
      return { isLogged: false, token: null, error: action.error };
    case USER_LOGOUT:
      return { isLogged: false, token: "" };
    default:
      return state;
  }
};
