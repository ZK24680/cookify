import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../services/recipeApi";
import useUrlSearch from "../hooks/useUrlSearch";

function useRecipes() {
  const searchQuery = useUrlSearch();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["recipes", searchQuery],
    queryFn: () => getRecipes({ searchQuery }),
    enabled: false,
  });

  return { data, isLoading, error, refetch };
}

export default useRecipes;
