import axios from "axios";

// User profile

export const getUserProfile = (token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.post(
    "http://localhost:3001/api/v1/user/profile",
    { token },
    config
  );
};

// Update User profile

export const updateUserProfile = (token, newFirstName, newLastName) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.put(
    "http://localhost:3001/api/v1/user/profile",
    { firstName: newFirstName, lastName: newLastName },
    config
  );
};