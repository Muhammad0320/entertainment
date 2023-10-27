import { useQuery } from "@tanstack/react-query";
import { getMoviesByCategories } from "../../api/apiMovies";

export const useGetMoviesByCategory = (category) => {
  const { data: movieCategory, isLoading } = useQuery({
    queryFn: () => getMoviesByCategories(category),

    queryKey: ["movie-category"],
  });

  return { movieCategory, isLoading };
};
