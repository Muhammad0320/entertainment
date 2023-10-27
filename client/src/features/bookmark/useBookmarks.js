import { useQuery } from "@tanstack/react-query";
import { bookmarkApi } from "../../api/apiBookmark";

export const useBookmarks = () => {
  const { data: myBookmarks, isLoading } = useQuery({
    queryFn: bookmarkApi,

    queryKey: ["my-bookmark"],
  });

  return { myBookmarks, isLoading };
};
