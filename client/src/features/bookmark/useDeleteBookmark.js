import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBookmarkApi } from "../../api/apiBookmark";
import toast from "react-hot-toast";

export const useDeleteBookmark = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteBookmark, isLoading } = useMutation({
    mutationFn: deleteBookmarkApi,

    onSuccess: () => {
      toast.success("succesfully deleted bookmark");

      queryClient.invalidateQueries({ queryKey: ["my-bookmarks"] });
    },

    onError: () => {
      toast.error("An error occured while deleting your bookmark");
    },
  });

  return { deleteBookmark, isLoading };
};
