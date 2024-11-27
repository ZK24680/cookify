import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutApi } from "../services/apiAuth";

function useLogout() {
  const queryClient = useQueryClient();
  const {
    mutate: logout,
    isPending,
    error,
  } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });

  return { logout, isPending, error };
}

export default useLogout;
