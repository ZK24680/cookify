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
      className={`sticky top-0 mx-auto flex ${isAppLayout ? "w-full border-b border-[var(--border-color)] px-4 md:px-6" : "w-11/12 px-4"} items-center justify-between bg-[var(--background-fade)] py-2 backdrop-blur-sm ${isAppLayout ? "sm:justify-end" : ""} md:justify-between`}
    >
      <div className={`${isAppLayout ? "block sm:hidden" : ""} `}>
        <Logo style={"h-11 md:h-14 xl:h-24"} />
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
