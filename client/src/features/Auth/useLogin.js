import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../api/apiAuth";
import toast from "react-hot-toast";

export const useLogin = () => {
  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginApi,

    onSuccess: () => {
      toast.success("Login successful");
    },

    onError: (error) => {
      console.log(error);

      toast.error(error.response.data.message);
    },
  });

  return { login, isLoading };
};
