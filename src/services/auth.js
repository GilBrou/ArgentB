import axios from "axios";

// Login

export const login = (email, password) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  return axios.post(
    "http://localhost:3001/api/v1/user/login",
    { email, password },
    config
  );
};