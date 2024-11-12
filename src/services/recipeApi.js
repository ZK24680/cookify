export async function getRecipe({ mealId }) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`,
    );

    if (!res.ok) throw new Error("Something went wrong");

    const data = await res.json();

    return data.meals[0];
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getRecipes({ searchQuery }) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchQuery}`,
    );

    if (!res.ok) throw new Error("Something went wrong");

    const data = await res.json();

    return data.meals;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getRecipesByCategory(category) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    );

    if (!res.ok) throw new Error("Something went wrong");

    const data = await res.json();

    console.log(data);
    return data.meals;
  } catch (err) {
    throw new Error(err.message);
  }
}
