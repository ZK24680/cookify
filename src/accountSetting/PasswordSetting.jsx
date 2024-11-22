import Button from "../components/Button";
import FormRowVertical from "../components/FormRowVertical";

function PasswordSetting() {
  return (
    <div className="flex w-full flex-col gap-3">
      <h2 className="p-2 text-3xl">Update Password</h2>

      <form className="flex w-full flex-col gap-5 rounded-lg bg-[#fff] p-7">
        <FormRowVertical>
          <label htmlFor="password" className="cursor-pointer">
            New Password (min 8 chars)
          </label>
          <input
            id="password"
            type="password"
            className="rounded-lg bg-[var(--background-color)] px-4 py-2 text-sm shadow-md focus:outline-none"
          />
        </FormRowVertical>

        <FormRowVertical>
          <label htmlFor="confirmpassword" className="cursor-pointer">
            Confirm Password
          </label>
          <input
            id="confirmpassword"
            type="password"
            className="rounded-lg bg-[var(--background-color)] px-4 py-2 text-sm shadow-md focus:outline-none"
          />
        </FormRowVertical>

        <FormRowVertical role={"button"}>
          <Button type="danger">Cancel</Button>
          <Button>Update Password</Button>
        </FormRowVertical>
      </form>
    </div>
  );
}

export default PasswordSetting;
