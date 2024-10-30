import Button from "../components/Button";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <main className="grid h-screen grid-rows-[5rem_1fr] overflow-scroll bg-[#f4e7d4]">
      <PageNav />

      <section className="mx-auto grid w-11/12 grid-cols-2 grid-rows-[2fr_1fr] p-10">
        <div className="flex flex-col justify-center px-4">
          <div className="w-11/12 text-5xl">
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

          <p className="mt-5 w-11/12 text-xl tracking-wide">
            With Cookify, every recipe is a new adventure—explore flavors,
            create magic, and savor every moment of your culinary journey!
          </p>

          <div className="mt-8">
            <Button type="primary">Explore now</Button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img src="../src/assets/images/food2.png" width="90%" height="90%" />
        </div>

        <div className="col-span-2">Slider</div>
      </section>
    </main>
  );
}

export default Homepage;
