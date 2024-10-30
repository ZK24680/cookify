import { useState } from "react";
import Logo from "./Logo";
import NavbarToggle from "./NavbarToggle";
import Navlinks from "./Navlinks";

function PageNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 mx-auto flex w-11/12 items-center justify-between bg-[#f4e7d493] px-4 py-2 backdrop-blur-sm">
      <Logo />

      <Navlinks isOpen={isOpen} />

      <div className="flex items-center gap-1">
        <span>Sign in</span>
        <NavbarToggle onClick={() => setIsOpen((isOpen) => !isOpen)} />
      </div>
    </nav>
  );
}

export default PageNav;
