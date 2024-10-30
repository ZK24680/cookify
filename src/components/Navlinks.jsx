function Navlinks({ isOpen }) {
  return (
    <ul
      className={`absolute bottom-0 right-0 w-auto translate-y-full justify-between transition-all duration-75 md:static md:flex md:w-1/3 md:translate-y-0 md:gap-0 md:px-0 lg:w-2/5 xl:w-5/12 ${isOpen ? "flex gap-x-2 px-4" : "hidden"}`}
    >
      <li>Home</li>
      <li>Recipes</li>
      <li>About Us</li>
    </ul>
  );
}

export default Navlinks;
