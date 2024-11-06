import { Link } from "react-router-dom";
import RecipeItem from "./RecipeItem";

function Recipes({ recipes }) {
  // {
  //     strMeal: "Chick-Fil-A Sandwich",
  //     strMealThumb:
  //       "https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg",
  //     idMeal: "53016",
  //   }
  return (
    <section className="mt-5 h-full w-full overflow-scroll overflow-x-hidden overflow-y-scroll pb-28">
      <ul className="flex h-auto w-full flex-wrap justify-center gap-4">
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.idMeal} recipe={recipe} />
        ))}
      </ul>
    </section>
  );
}

export default Recipes;
