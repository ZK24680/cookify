import { HiMenu } from "react-icons/hi";
import Button from "./Button";

function NavbarToggle({ onClick }) {
  return (
    <Button type="toggle" onClick={onClick}>
      <HiMenu />
    </Button>
  );
}

export default NavbarToggle;
