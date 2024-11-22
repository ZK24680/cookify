import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../services/apiAuth";

function useUpdate() {
  const queryClient = useQueryClient();
  const { mutate: updateInfo, isPending } = useMutation({
    mutationFn: ({ fullName, password, avatar }) =>
      updateUser({ fullName, password, avatar }),
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
    },
  });

  return {
    updateInfo,
    isPending,
  };
}

export default useUpdate;
