import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const bookmarkApi = async () => {
  const res = await axios({
    method: "GET",
    url: `${BASE_URL}/bookmarks/my-bookmarks`,
    withCredentials: true,
  });

  return res.data.data?.bookmarks;
};

export const createBookmarkApi = async ({ movieId }) => {
  if (!movieId) return;

  const res = await axios({
    method: "POST",
    url: `${BASE_URL}/movies/${movieId}/bookmarks`,
    withCredentials: true,
  });

  console.log(movieId);

  console.log(res.data);

  return res.data;
};
