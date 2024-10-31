import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import Button from "./Button";

function NavbarToggle({ onClick, isOpen }) {
  return (
    <Button type="toggle" onClick={onClick}>
      {isOpen ? <HiOutlineX /> : <HiMenuAlt3 />}
    </Button>
  );
}

export default NavbarToggle;
