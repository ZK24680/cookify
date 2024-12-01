import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromSaved } from "../services/recipeApi";
import toast from "react-hot-toast";

function useRemoveSaved() {
  const queryClient = useQueryClient();
  const {
    mutate: unSave,
    isPending: isRemoving,
    error,
  } = useMutation({
    mutationFn: removeFromSaved,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["recipes", "saved"],
      });
      toast.success("Removed Successful🔨");
    },
  });

  return { unSave, isRemoving, error };
}

export default useRemoveSaved;
