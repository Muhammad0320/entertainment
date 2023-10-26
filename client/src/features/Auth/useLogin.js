import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../api/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginApi,

    onSuccess: () => {
      toast.success("Login successful");
      navigate("/home");
    },

    onError: (error) => {
      console.log(error);

      toast.error(error.response.data.message);
    },
  });

  return { login, isLoading };
};
