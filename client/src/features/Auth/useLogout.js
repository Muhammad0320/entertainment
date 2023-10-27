import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../api/apiAuth";
import toast from "react-hot-toast";

export const useLogout = () => {
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading: isLoggingOut } = useMutation({
    mutationFn: logoutApi,

    onSuccess: () => {
      toast.success("Log out successful");
      queryClient.resetQueries({ queryKey: ["me"] });
    },

    onError: () => {
      toast.error("An error occured while logging out");
    },
  });

  return { logout, isLoggingOut };
};
