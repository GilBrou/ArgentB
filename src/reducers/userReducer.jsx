import {
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAIL,
} from "../actions/actionTypes";

const INITIAL_STATE = { success: false, firstName: "", lastName: "" };

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER_PROFILE_SUCCESS:
        return {
        success: true,
        ...action.data,
      };
    case UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        success: true,
        firstName: action.firstName,
        lastName: action.lastName,
      };
    case GET_USER_PROFILE_FAIL:
    case UPDATE_USER_PROFILE_FAIL:
      return {
        success: false,
        firstName: "",
        lastName: "",
      };
    default:
      return state;
  }
};