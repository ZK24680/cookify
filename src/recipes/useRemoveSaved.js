import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromSaved } from "../services/recipeApi";

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
    },
  });

  return { unSave, isRemoving, error };
}

export default useRemoveSaved;
