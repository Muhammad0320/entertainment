import { useQuery } from "@tanstack/react-query";
import { getAllMovies } from "../../api/apiMovies";

export const useGetMovies = () => {
  const { data: allMovies, isLoading } = useQuery({
    queryFn: getAllMovies,

    queryKey: ["all movies"],
  });

  return { allMovies, isLoading };
};
