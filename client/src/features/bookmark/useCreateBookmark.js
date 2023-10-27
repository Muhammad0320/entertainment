import { useMutation } from "@tanstack/react-query";
import { createBookmarkApi } from "../../api/apiBookmark";
import toast from "react-hot-toast";

export const useCreateBookmark = () => {
  const { mutate: addMovieToBookmark } = useMutation({
    mutationFn: createBookmarkApi,

    onSuccess: () => {
      toast.success("successfully added to bookmarks");
    },

    onError: () => {
      toast.error(" There was an error while adding to bookmark try again ");
    },
  });

  return { addMovieToBookmark };
};
