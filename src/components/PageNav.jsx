import { useState } from "react";
import Logo from "./Logo";
import NavbarToggle from "./NavbarToggle";
import Navlinks from "./Navlinks";
import { useLocation } from "react-router-dom";

function PageNav() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const isAppLayout = location.pathname.includes("recipes");

  return (
    <nav
      className={`sticky top-0 mx-auto flex ${isAppLayout ? "w-full" : "w-11/12"} items-center justify-between bg-[#f4e7d493] px-4 py-2 backdrop-blur-sm sm:justify-end md:justify-between`}
    >
      <div className={`${isAppLayout ? "block sm:hidden" : ""} `}>
        <Logo />
      </div>

      <Navlinks isOpen={isOpen} />

      <div className="flex items-center gap-x-6">
        <span>Sign in</span>
        <NavbarToggle
          isOpen={isOpen}
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        />
      </div>
    </nav>
  );
}

export default PageNav;
