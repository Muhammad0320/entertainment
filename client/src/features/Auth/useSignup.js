import toast from "react-hot-toast";
import { signupApi } from "../../api/apiAuth";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

export const useSignup = () => {
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,

    onSuccess: () => {
      toast.success("Account created successfully");

      navigate("/home");
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  return { signup, isLoading };
};
