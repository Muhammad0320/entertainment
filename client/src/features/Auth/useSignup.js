import { useMutation } from "@tanstack/react-query";
import { signupApi } from "../../api/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
