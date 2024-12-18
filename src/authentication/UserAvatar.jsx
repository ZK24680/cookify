import { HiArrowRightOnRectangle } from "react-icons/hi2";
import Button from "../components/Button";
import useLogout from "./useLogout";
import { useLocation, useNavigate } from "react-router-dom";
import SavedButton from "../components/SavedButton";

function UserAvatar({ avatar }) {
  const navigate = useNavigate();
  const { logout, isPending } = useLogout();

  const location = useLocation();

  const isAccountPage = location.pathname.includes("account");

  return (
    <div className="flex items-center gap-4">
      <img
        className="h-10 w-10 cursor-pointer rounded-full border border-[var(--border-color)] sm:h-14 sm:w-14"
        onClick={() => navigate("/account")}
        src={avatar || "/default-user.jpg"}
      />

      <SavedButton />

      {isAccountPage ? null : (
        <div className="hidden items-center justify-center sm:flex">
          <Button type="icon" disabled={isPending} onClick={() => logout()}>
            <HiArrowRightOnRectangle />
          </Button>
        </div>
      )}
    </div>
  );
}

export default UserAvatar;
