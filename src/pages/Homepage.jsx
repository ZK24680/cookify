import Button from "../components/Button";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <main className="grid h-screen grid-rows-[5rem_1fr] overflow-scroll bg-[#f4e7d4]">
      <PageNav />

      <section className="mx-auto grid w-11/12 grid-cols-1 p-10 md:grid-cols-2 md:grid-rows-[2fr_1fr]">
        <div className="flex flex-col justify-center">
          <div className="w-full text-center text-2xl sm:text-4xl md:w-11/12 md:text-start md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-5xl">
            <h1 className="font-bold tracking-tighter text-[#991b1b]">
              Cookify
            </h1>
            <span className="font-bold tracking-tighter">
              Discover{" "}
              <span className="font-bold text-[#F4D35E]">Bold Flavors</span>,
              Master Every{" "}
              <span className="font-bold text-[#991b1b]">Dish</span>
            </span>
          </div>

          <p className="mt-5 w-11/12 text-center text-[10px] tracking-wide sm:text-xs md:text-start md:text-sm lg:text-lg xl:text-xl">
            With Cookify, every recipe is a new adventure—explore flavors,
            create magic, and savor every moment of your culinary journey!
          </p>

          <div className="mt-8 flex justify-center md:justify-start">
            <Button type="primary">Explore now</Button>
          </div>
        </div>

        <div className="hidden items-center justify-center md:flex">
          <img src="../src/assets/images/food2.png" width="90%" height="90%" />
        </div>

        <div className="md:col-span-2">Slider</div>
      </section>
    </main>
  );
}

export default Homepage;
