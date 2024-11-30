import { useState } from "react";
import Button from "../components/Button";
import FormRowVertical from "../components/FormRowVertical";

function ProfileSetting({ email, name, avatar, updateInfo, isUpdating }) {
  const [fullName, setFullName] = useState(name);
  const [img, setImg] = useState(null);

  function onhandleSubmit(e) {
    e.preventDefault();

    if (!fullName || (fullName === name && img === null)) return;

    updateInfo(
      { fullName, avatar: img },
      {
        onSuccess: () => {
          setImg(null);
          e.target.reset();
        },
      },
    );
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <h2 className="p-2 text-3xl">User Profile</h2>

      <form
        onSubmit={onhandleSubmit}
        className="flex w-full flex-col gap-5 rounded-lg bg-[#fff] p-7"
      >
        <img
          className="h-20 w-20 rounded-full"
          src={`${avatar || "../src/assets/images/default-user.jpg"}`}
        />

        <FormRowVertical>
          <label htmlFor="email" className="cursor-pointer">
            Email
          </label>
          <input
            id="email"
            type="email"
            defaultValue={email}
            disabled
            className="rounded-lg bg-[var(--background-color)] px-4 py-2 text-sm shadow-md focus:outline-none"
          />
        </FormRowVertical>

        <FormRowVertical>
          <label htmlFor="fullName" className="cursor-pointer">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="rounded-lg bg-[var(--background-color)] px-4 py-2 text-sm shadow-md focus:outline-none"
          />
        </FormRowVertical>

        <FormRowVertical>
          <label htmlFor="file">Avatar Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImg(e.target.files[0])}
            className="px-4 py-2 text-sm file:cursor-pointer file:rounded-md file:border-none file:bg-[var(--secondary-color)] file:px-4 file:py-2 file:text-[var(--secondary-text-color)] file:hover:bg-[var(--accent-color)] file:hover:outline-none"
          />
        </FormRowVertical>

        <FormRowVertical role={"button"}>
          <Button type="danger" disabled={isUpdating}>
            Cancel
          </Button>
          <Button role="submit" type="primary" disabled={isUpdating}>
            {isUpdating ? "Updating...." : "Update account"}
          </Button>
        </FormRowVertical>
      </form>
    </div>
  );
}

export default ProfileSetting;
