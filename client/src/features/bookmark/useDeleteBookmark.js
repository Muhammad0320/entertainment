import toast from "react-hot-toast";
import { deleteBookmarkApi } from "../../api/apiBookmark";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteBookmark = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteBookmark, isLoading } = useMutation({
    mutationFn: deleteBookmarkApi,

    onSuccess: () => {
      toast.success("Bookmark successfully removed");

      queryClient.invalidateQueries({ queryKey: ["my-bookmarks"] });
    },

    onError: () => {
      toast.error("An error occured while deleting your bookmark");
    },
  });

  return { deleteBookmark, isLoading };
};
