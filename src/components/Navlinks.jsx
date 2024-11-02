import { NavLink } from "react-router-dom";

function Navlinks({ isOpen }) {
  return (
    // absolute bottom-0 right-0 w-full translate-y-full items-center justify-end transition-all duration-75 md:static md:flex md:w-1/2 md:translate-y-0 md:flex-row md:justify-between md:gap-0 md:bg-transparent md:px-0 lg:w-1/3 xl:w-2/5 ${isOpen ? "flex gap-x-3 bg-[#f4e7d493] px-4" : "hidden"}
    <ul
      className={`page-nav absolute bottom-0 right-0 w-full translate-y-full items-center justify-end py-3 transition-all duration-75 md:static md:flex md:w-auto md:translate-y-0 md:flex-row md:justify-between md:gap-x-8 md:bg-transparent md:px-0 md:py-0 ${isOpen ? "flex gap-x-5 bg-[var(--background-color)] px-4" : "hidden"}`}
    >
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/recipes">Recipes</NavLink>
      </li>
      <li>
        <NavLink to={"/aboutus"}>About Us</NavLink>
      </li>
    </ul>
  );
}

export default Navlinks;
