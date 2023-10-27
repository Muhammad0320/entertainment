import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const getMe = async () => {
  const res = await axios({
    method: "GET",
    url: `${BASE_URL}/users/me`,

    withCredentials: true,
  });

  console.log(res.data);
  return res.data;
};
