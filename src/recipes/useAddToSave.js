import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToSaved } from "../services/recipeApi";

function useAddToSave() {
  const queryClient = useQueryClient();
  const {
    mutate: save,
    isPending: isSaving,
    error,
  } = useMutation({
    mutationFn: addToSaved,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["recipes", "saved"],
      });
    },
  });

  return { save, isSaving, error };
}

export default useAddToSave;
