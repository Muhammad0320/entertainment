import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const bookmarkApi = async () => {
  const res = await axios({
    method: "GET",
    url: `${BASE_URL}/api/v1/bookmarks/my-bookmarks`,
    withCredentials: true,
  });

  return res.data;
};
