import { NavLink } from "react-router-dom";

function Navlinks({ isOpen }) {
  return (
    <ul
      className={`absolute bottom-0 right-0 w-full translate-y-full items-center justify-end transition-all duration-75 md:static md:flex md:w-1/3 md:translate-y-0 md:flex-row md:justify-between md:gap-0 md:bg-transparent md:px-0 lg:w-2/5 xl:w-5/12 ${isOpen ? "flex gap-x-3 bg-[#f4e7d493] px-4" : "hidden"}`}
    >
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to="/recipes">Recipes</NavLink>
      <NavLink to={"/aboutus"}>About Us</NavLink>
    </ul>
  );
}

export default Navlinks;
