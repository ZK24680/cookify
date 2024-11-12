import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRecipe } from "../services/recipeApi";

export function useRecipe() {
  const mealId = useParams().recipeID;

  const {
    data: recipe,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["recipeDetails", mealId],
    queryFn: () => getRecipe({ mealId }),
  });

  return { recipe, error, isLoading };
}
