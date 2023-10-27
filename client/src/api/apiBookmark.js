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

  return res.data;
};

export const deleteBookmarkApi = async ({ movieId }) => {
  if (!movieId) return;

  const res = await axios({
    method: "DELETE",
    url: `${BASE_URL}/bookmarks/delete-bookmark/${movieId}`,
    withCredentials: true,
  });

  return res.data;
};
