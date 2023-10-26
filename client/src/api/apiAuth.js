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

export const signupApi = async ({ email, password, passwordConfirm }) => {
  const res = await axios({
    method: "POST",
    withCredentials: true,
    url: `${BASE_URL}/users/signup`,
    data: {
      email,
      password,
      passwordConfirm,
    },
  });

  console.log(res.data);

  return res.data;
};
