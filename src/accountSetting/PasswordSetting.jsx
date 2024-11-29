import { useState } from "react";
import Button from "../components/Button";
import FormRowVertical from "../components/FormRowVertical";

function PasswordSetting({ updateInfo, isUpdating }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function onhandleSubmit(e) {
    e.preventDefault();
    if (
      password !== confirmPassword ||
      password === "" ||
      confirmPassword === "" ||
      password.length < 8
    )
      return;

    updateInfo(
      { password },
      {
        onSuccess: () => {
          setPassword("");
          setConfirmPassword("");
        },
      },
    );
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <h2 className="p-2 text-3xl">Update Password</h2>

      <form
        onSubmit={onhandleSubmit}
        className="flex w-full flex-col gap-5 rounded-lg bg-[#fff] p-7"
      >
        <FormRowVertical>
          <label htmlFor="password" className="cursor-pointer">
            New Password (min 8 chars)
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg bg-[var(--background-color)] px-4 py-2 text-sm shadow-md focus:outline-none"
          />
          {password.length >= 8 || password === "" ? null : (
            <p className="text-[#9b1a1a] sm:px-4">
              Password must be minimun 8 Characters
            </p>
          )}
        </FormRowVertical>

        <FormRowVertical>
          <label htmlFor="confirmpassword" className="cursor-pointer">
            Confirm Password
          </label>
          <input
            id="confirmpassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="rounded-lg bg-[var(--background-color)] px-4 py-2 text-sm shadow-md focus:outline-none"
          />
          {password === confirmPassword || confirmPassword === "" ? null : (
            <p className="text-[#9b1a1a] sm:px-4">password do not match</p>
          )}
        </FormRowVertical>

        <FormRowVertical role={"button"}>
          <Button type="danger" disabled={isUpdating}>
            Cancel
          </Button>
          <Button disabled={isUpdating}>
            {isUpdating ? "Updating..." : "Update Password"}
          </Button>
        </FormRowVertical>
      </form>
    </div>
  );
}

export default PasswordSetting;
