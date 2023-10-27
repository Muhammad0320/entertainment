import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const getAllMovies = async () => {
  const res = await axios.get(`${BASE_URL}/movies`, { withCredentials: true });

  return res.data.data.document;
};

export const getTrendingMovies = async () => {
  const res = await axios.get(`${BASE_URL}/movies?isTrending=true`);

  return res.data;
};
