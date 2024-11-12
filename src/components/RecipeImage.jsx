function RecipeImage({ img }) {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
      }}
      className={`mx-auto h-36 w-4/5 overflow-hidden rounded-sm border-[2px] border-amber-900 bg-cover bg-center sm:h-48 sm:border-[4px] md:h-60 md:w-2/4 xl:h-80 2xl:h-96`}
    ></div>
  );
}

export default RecipeImage;
