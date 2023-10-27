import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "../../api/apiMovies";

export const useGetTrendingMovies = () => {
  const { data: trendingMovies, isLoading } = useQuery({
    queryFn: getTrendingMovies,
    queryKey: ["trending movies"],
  });

  return { trendingMovies, isLoading };
};
