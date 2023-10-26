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

  console.log(res.data);

  return res.data;
};
