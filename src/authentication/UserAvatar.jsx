import { HiArrowRightOnRectangle } from "react-icons/hi2";
import Button from "../components/Button";
import useLogout from "./useLogout";
import { useLocation, useNavigate } from "react-router-dom";

function UserAvatar({ avatar, fullName }) {
  const navigate = useNavigate();
  const { logout, isPending } = useLogout();

  const location = useLocation();

  const isAccountPage = location.pathname.includes("account");

  return (
    <div className="flex items-center gap-4">
      <img
        className="h-14 w-14 cursor-pointer rounded-full border border-[var(--border-color)]"
        onClick={() => navigate("/account")}
        src={avatar || "../src/assets/images/default-user.jpg"}
      />

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
