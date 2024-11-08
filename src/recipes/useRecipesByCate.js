import { useQuery } from "@tanstack/react-query";
import { getRecipesByCategory } from "../services/recipeApi";

function useRecipesByCate(category) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["recipes", category],
    queryFn: () => getRecipesByCategory(category),
  });

  return { data, isLoading, error };
}

export default useRecipesByCate;
