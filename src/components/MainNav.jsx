import { GiBroccoli, GiCakeSlice, GiKnifeFork, GiShrimp } from "react-icons/gi";
import { HiSearch } from "react-icons/hi";
import { MdOutlineBreakfastDining } from "react-icons/md";
import { NavLink } from "react-router-dom";

function MainNav() {
  const style = {
    navlinkStyle: `flex w-full h-full sm:h-auto sm:w-auto items-center   mx-auto justify-center sm:justify-start gap-3 rounded-md  sm:px-6 sm:py-3 text-sm hover:bg-[var(--primary-color)] hover:text-[var(--secondary-text-color)]`,
    navText: `hidden sm:inline`,
    navIcon: `text-xl `,
  };

  return (
    <ul className="main-nav grid h-full w-full grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] overflow-hidden bg-[#ffffff42] px-4 py-2 backdrop-blur-md sm:flex sm:h-auto sm:w-auto sm:flex-col 2xl:w-5/6">
      <li className="w-full sm:w-auto">
        <NavLink to={"search"} className={`${style["navlinkStyle"]}`}>
          <HiSearch className={style["navIcon"]} />

          <span className={style["navText"]}>Search</span>
        </NavLink>
      </li>
      <li className="w-full sm:w-auto">
        <NavLink to={"breakfast"} className={`${style["navlinkStyle"]}`}>
          <MdOutlineBreakfastDining className={style["navIcon"]} />
          <span className={style["navText"]}>Breakfast</span>
        </NavLink>
      </li>
      <li className="w-full sm:w-auto">
        <NavLink to={"seafood"} className={`${style["navlinkStyle"]}`}>
          <GiShrimp className={style["navIcon"]} />{" "}
          <span className={style["navText"]}>Seafood</span>
        </NavLink>
      </li>
      <li className="w-full sm:w-auto">
        <NavLink to={"vegan"} className={`${style["navlinkStyle"]}`}>
          <GiBroccoli className={style["navIcon"]} />
          <span className={style["navText"]}>Vegan</span>
        </NavLink>
      </li>
      <li className="w-full sm:w-auto">
        <NavLink to={"side"} className={`${style["navlinkStyle"]}`}>
          <GiKnifeFork className={style["navIcon"]} />
          <span className={style["navText"]}>Side</span>
        </NavLink>
      </li>
      <li className="w-full sm:w-auto">
        <NavLink to={"dessert"} className={`${style["navlinkStyle"]}`}>
          <GiCakeSlice className={style["navIcon"]} />
          <span className={style["navText"]}>Dessert</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default MainNav;
