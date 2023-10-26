import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const loginApi = ({ email, password }) => {
  const res = axios({
    method: "POST",
    withCredentials: true,
    url: `${BASE_URL}/users/login`,
    data: {
      email,
      password,
    },
  });

  console.log(res.data);

  return res.data;
};
