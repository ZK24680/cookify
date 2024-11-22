import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../services/apiAuth";

function useUpdate() {
  const { mutate: updateInfo, isPending } = useMutation({
    mutationFn: ({ fullName, password, avatar }) =>
      updateUser({ fullName, password, avatar }),
  });

  return {
    updateInfo,
    isPending,
  };
}

export default useUpdate;
