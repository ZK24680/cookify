import Message from "../components/Message";
import Spinner from "../components/Spinner";
import Recipes from "./Recipes";
import useRecipesByCate from "./useRecipesByCate";

function RecipesShowCase({ category }) {
  const { data, isLoading, error } = useRecipesByCate(category);

  return (
    <div className="h-full w-full">
      {isLoading && <Spinner />}

      {error && <Message message={error} />}

      {data?.length === 0 && (
        <Message message={"🍳 There is no saved recipes 🥘"} />
      )}

      {data && <Recipes recipes={data} />}
    </div>
  );
}

export default RecipesShowCase;
