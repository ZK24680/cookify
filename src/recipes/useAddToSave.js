import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToSaved } from "../services/recipeApi";
import toast from "react-hot-toast";

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
      toast.success("Saved🧑‍🍳");
    },
    onError: (err) => toast.error(err.message),
  });

  return { save, isSaving, error };
}

export default useAddToSave;
