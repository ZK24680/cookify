import RecipeItem from "./RecipeItem";

function Recipes({ recipes = [], query }) {
  // {
  //     strMeal: "Chick-Fil-A Sandwich",
  //     strMealThumb:
  //       "https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg",
  //     idMeal: "53016",
  //   }

  return (
    <section className="mt-5 h-full w-full overflow-scroll overflow-x-hidden overflow-y-scroll pb-28">
      <ul className="flex h-auto w-full flex-wrap justify-center gap-5">
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.idMeal} recipe={recipe} />
        ))}
      </ul>
    </section>
  );
}

export default Recipes;
