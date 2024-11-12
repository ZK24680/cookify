import { Link } from "react-router-dom";

function RecipeItem({ recipe }) {
  return (
    <li className="inline-block">
      <Link to={`/recipes/${recipe.idMeal}`}>
        <div className="flex h-80 w-64 flex-col items-center justify-around rounded-md border bg-[#ffffff] shadow-sm shadow-[#D3CBB8] hover:bg-[#FFF8E7] hover:text-[var(--primary-color)]">
          <div className="h-44 w-44 overflow-hidden rounded-full shadow-lg">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          </div>
          <p className="text-center text-xl">{recipe.strMeal}</p>
        </div>
      </Link>
    </li>
  );
}

export default RecipeItem;
