import { useNavigate } from "react-router-dom";
import useLogout from "../authentication/useLogout";
import useUpdate from "../authentication/useUpdate";

import Button from "../components/Button";
import { useAuth } from "../contexts/AuthContext";
import PasswordSetting from "./PasswordSetting";
import ProfileSetting from "./ProfileSetting";
import { useEffect } from "react";

function AccountSettings() {
  const navigate = useNavigate();
  const { logout, isPending } = useLogout();
  const { isAuthenticated, email, isLoading, fullName, avatar } = useAuth();

  const { updateInfo, isPending: isUpdating } = useUpdate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/signin");
  }, [isAuthenticated, navigate, isLoading]);

  return (
    <div className="mx-auto flex h-auto w-full flex-col gap-7 bg-[var(--secondary-background-color)] py-6 sm:w-11/12 sm:px-4">
      <div className="flex items-center justify-between p-4">
        <h1 className="px-2 text-2xl">Settings</h1>
        <Button
          type="danger"
          disabled={isPending}
          onClick={() => {
            logout(null, {
              onSuccess: () => {
                navigate("/recipes");
              },
            });
          }}
        >
          Log Out
        </Button>
      </div>
      <ProfileSetting
        email={email}
        name={fullName}
        avatar={avatar}
        isUpdating={isUpdating}
        updateInfo={updateInfo}
      />
      <PasswordSetting updateInfo={updateInfo} isUpdating={isUpdating} />
    </div>
  );
}

export default AccountSettings;
