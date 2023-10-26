import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const getAllMovies = async () => {
  const res = await axios.get(`${BASE_URL}/movies`, { withCredentials: true });

  return res.data;
};
