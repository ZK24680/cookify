import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../services/apiAuth";
import toast from "react-hot-toast";

function useUpdate() {
  const queryClient = useQueryClient();
  const { mutate: updateInfo, isPending } = useMutation({
    mutationFn: ({ fullName, password, avatar }) =>
      updateUser({ fullName, password, avatar }),
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
      toast.success("Update Successful🔨");
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    updateInfo,
    isPending,
  };
}

export default useUpdate;
