import { useParams } from "react-router-dom";
import Ingredients from "../components/Ingredients";
import Instruction from "../components/Instruction";
import RecipeCategory from "../components/RecipeCategory";
import RecipeImage from "../components/RecipeImage";
import { useRecipe } from "./useRecipe";
import Spinner from "../components/Spinner";
import ButtonGroup from "../components/ButtonGroup";
import useRecipesByCate from "./useRecipesByCate";

function RecipeDetails() {
  const { recipe, error, isLoading } = useRecipe();
  const { data: savedRecipes, isLoading: isFetching } =
    useRecipesByCate("saved");

  const isSaved = savedRecipes
    ?.map((recipe) => recipe?.idMeal)
    .includes(Number(recipe?.idMeal));

  console.log(isSaved, recipe?.idMeal);

  if (isLoading || isFetching) return <Spinner />;

  return (
    <div className="h-full w-full overflow-scroll px-3 pb-9">
      <ButtonGroup isSaved={isSaved} recipe={recipe} />
      <RecipeCategory
        meal={recipe.strMeal}
        category={recipe.strCategory}
        area={recipe.strArea}
      />
      <RecipeImage img={recipe.strMealThumb} />

      <Ingredients recipe={recipe} />

      <Instruction
        instruction={recipe.strInstructions}
        videolink={recipe.strYoutube}
      />
    </div>
  );
}

export default RecipeDetails;
