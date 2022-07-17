import {
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAIL,
} from "../actions/actionTypes";

// User's profile action
export const getUserProfileSuccess = (data) => ({
  type: GET_USER_PROFILE_SUCCESS,
  data,
});

export const getUserProfileFail = (error) => ({
  type: GET_USER_PROFILE_FAIL,
  error,
});

// User's update profile
export const updateUserProfileSuccess = (newFirstName, newLastName) => ({
  type: UPDATE_USER_PROFILE_SUCCESS,
  firstName: newFirstName,
  lastName: newLastName,
});

export const updateUserProfileFail = (error) => ({
  type: UPDATE_USER_PROFILE_FAIL,
  error,
});
