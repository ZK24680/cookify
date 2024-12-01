import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutApi } from "../services/apiAuth";
import toast from "react-hot-toast";

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
      toast.success("Logout Successful😊");
    },
    onError: (err) => toast.error(err.message),
  });

  return { logout, isPending, error };
}

export default useLogout;
