import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const loginApi = async ({ email, password }) => {
  const res = await axios({
    method: "POST",
    withCredentials: true,
    url: `${BASE_URL}/users/login`,
    data: {
      email,
      password,
    },
  });

  return res.data;
};

export const logout = async () => {
  const res = await axios({
    method: "POST",
    url: `${BASE_URL}/users/logout`,
    withCredentials: true,
  });

  return res.data;
};

export const signupApi = async ({ name, email, password, passwordConfirm }) => {
  const res = await axios({
    method: "POST",
    withCredentials: true,
    url: `${BASE_URL}/users/signup`,
    data: {
      name,
      email,
      password,
      passwordConfirm,
    },
  });

  console.log(res.data);

  return res.data;
};
