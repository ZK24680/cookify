import AboutusSections from "../components/AboutusSections";
import PageNav from "../components/PageNav";

function Aboutus() {
  const aboutusContent = [
    {
      title: "About Us",
      content: `At Cookify, we believe that cooking is more than just making
    meals—it’s an art, a joy, and a way to connect with others. Our
    mission is to make delicious recipes accessible to everyone, whether
    you&apos;re just starting out in the kitchen or are a culinary pro
    seeking inspiration.`,
    },
    {
      title: "What Drives Us",
      content: `Cooking can be intimidating, but it doesn’t have to be. Cookify was
      created to simplify your cooking experience while unlocking
      creativity and excitement in the kitchen. We aim to be your go-to
      companion for exploring diverse cuisines, mastering new techniques,
      and creating meals you’re proud of.`,
    },
  ];

  const offerContent = [
    {
      title: "Diverse Recipes",
      content:
        "Explore a curated collection of recipes from quick snacks to elaborate dishes, tailored for all dietary needs and preferences.",
    },
    {
      title: "Intuitive Tools",
      content:
        "Discover recipes effortlessly with our easy-to-use search and filtering options.",
    },
    {
      title: "Personalized Experience",
      content:
        "Save your favorite recipes, create custom collections, and bring your culinary ideas to life.",
    },
  ];

  return (
    <div className="grid h-screen grid-rows-[5rem_1fr] overflow-scroll bg-[var(--background-color)]">
      <PageNav />

      <main className="mx-auto w-11/12 p-10 pt-4">
        <AboutusSections
          sectionHeader={"Welcome to Cookify"}
          contents={aboutusContent}
        />

        <AboutusSections
          sectionHeader={"What We Offer"}
          contents={offerContent}
        />

        <section>
          <h3 className="mb-2 text-3xl font-bold tracking-tight text-[#978d84]">
            Contact Us
          </h3>
          <p className="mb-2 text-sm">
            We would love to hear from you! if you have questions, suggestions,
            or feedback, feel free to reach out to us.
          </p>
          <p className="">Email : support@cookify.com </p>
          <p>Phone : +1 234 567 890</p>
          <address>Address: 123 Cookify Lane, Food City, FC 56789</address>
        </section>
      </main>

      <footer className="mx-auto w-11/12 bg-[var(--secondary-color)] p-4">
        <p className="text-center text-[var(--secondary-text-color)]">
          &copy; {new Date().getFullYear()} Cookify. Your Recipe Partner.All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Aboutus;
