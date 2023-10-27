import { useQuery } from "@tanstack/react-query";
import { getMoviesByCategories } from "../../api/apiMovies";

export const useGetMoviesByCategory = () => {
  const { data: movieCategory, isLoading } = useQuery({
    queryFn: getMoviesByCategories,

    queryKey: ["movie-category"],
  });

  return { movieCategory, isLoading };
};
