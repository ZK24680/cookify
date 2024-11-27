import { useState } from "react";
import Logo from "./Logo";
import NavbarToggle from "./NavbarToggle";
import Navlinks from "./Navlinks";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import { HiUserCircle } from "react-icons/hi";
import { useAuth } from "../contexts/AuthContext";
import UserAvatar from "../authentication/UserAvatar";

function PageNav() {
  const { isAuthenticated, userID, avatar } = useAuth();

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const isAppLayout = location.pathname.includes("recipes");

  return (
    <nav
      className={`sticky top-0 z-50 mx-auto flex ${isAppLayout ? "w-full border-b border-[var(--border-color)] px-4 md:px-6" : "w-full px-4 sm:w-11/12"} items-center justify-between bg-[var(--background-fade)] py-2 backdrop-blur-sm ${isAppLayout ? "sm:justify-end" : ""} md:justify-between`}
    >
      <div className={`${isAppLayout ? "block sm:hidden" : ""} `}>
        <Logo style={"h-11 md:h-14 xl:h-24"} />
      </div>

      <Navlinks isOpen={isOpen} />

      <div className="flex items-center gap-x-1">
        {isAuthenticated ? (
          <UserAvatar avatar={avatar} />
        ) : (
          <Button type="signIn" onClick={() => navigate("/signin")}>
            <HiUserCircle size={"20px"} className="hidden sm:inline" />{" "}
            <span>Sign In</span>
          </Button>
        )}

        <NavbarToggle
          isOpen={isOpen}
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        />
      </div>
    </nav>
  );
}

export default PageNav;
