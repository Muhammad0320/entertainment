import { useQuery } from "@tanstack/react-query";
import { getMe as getMeApi } from "../../api/apiUser";

export const useGetMe = () => {
  const { data: me, isLoading } = useQuery({
    queryFn: getMeApi,

    queryKey: ["me"],
  });

  return { me, isLoading };
};
