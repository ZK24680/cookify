function RecipeCategory({ meal, category, area }) {
  return (
    <div className="mb-12 flex flex-col items-center justify-center gap-y-3 border-b border-[var(--primary-text-color)] pb-9 pt-4 md:flex-row md:justify-between md:gap-0">
      <h1 className="text-center text-2xl font-bold tracking-tight text-[var(--accent-color)]">
        {meal}
      </h1>

      <div className="flex gap-6">
        <span className="inline-block rounded-xl bg-[var(--accent-color)] px-2 py-1 text-center text-[10px] text-[var(--secondary-text-color)] md:text-sm">
          {category}
        </span>
        <span className="rounded-xl bg-[var(--secondary-color)] px-2 py-1 text-center text-[10px] text-[var(--secondary-text-color)] md:text-sm">
          {area}
        </span>
      </div>
    </div>
  );
}

export default RecipeCategory;
