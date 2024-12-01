import { useQuery } from "@tanstack/react-query";
import { getRecipesByCategory, getSavedRecipes } from "../services/recipeApi";

function useRecipesByCate(category) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["recipes", category],
    queryFn: () =>
      category === "saved" ? getSavedRecipes() : getRecipesByCategory(category),
  });

  return { data, isLoading, error };
}

export default useRecipesByCate;
