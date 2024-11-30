function Ingredients({ recipe }) {
  return (
    <section
      id="ingredients"
      className="mb-2 mt-5 border-t border-[var(--primary-text-color)] py-5"
    >
      <h2 className="mb-5 text-3xl tracking-tight">Ingredients</h2>

      <ul className="flex flex-col gap-2 text-sm">
        {Array.from({ length: 20 }).map((_, i) =>
          recipe[`strIngredient${i + 1}`] ? (
            <li key={i}>
              <span>{recipe[`strIngredient${i + 1}`]}</span> <span>-</span>{" "}
              <span>{recipe[`strMeasure${i + 1}`]}</span>
            </li>
          ) : null,
        )}
      </ul>
    </section>
  );
}

export default Ingredients;
