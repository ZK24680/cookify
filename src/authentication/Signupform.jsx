import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Logo from "../components/Logo";
import useSignup from "./useSignup";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import ConfirmEmail from "../components/ConfirmEmail";

function Signupform() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const { signup, isPending } = useSignup();

  const { isAuthenticated } = useAuth();

  const isValidEmail = /^\S+@\S+\.\S+$/.test(email);

  useEffect(() => {
    if (isAuthenticated) navigate("/account");
  }, [isAuthenticated, navigate]);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !isValidEmail ||
      password !== confirmPassword ||
      password === "" ||
      confirmPassword === "" ||
      password.length < 8 ||
      fullName === ""
    )
      return;

    signup(
      { email, password, fullName },
      {
        onSuccess: () => {
          setShowMessage(true);
        },
      },
    );
  }

  return showMessage ? (
    <ConfirmEmail setShowMessage={setShowMessage} />
  ) : (
    <div className="flex w-11/12 flex-col items-center rounded-xl bg-[var(--background-color)] p-4 shadow-2xl sm:w-4/5 md:w-2/3 md:pb-11 xl:w-2/5 xl:pb-16">
      <Logo style={` h-24 sm:h-40 `} />

      <form
        onSubmit={handleSubmit}
        className="flex w-11/12 flex-col items-center gap-3 md:text-xl xl:text-2xl"
      >
        <div className="flex w-full flex-col gap-2 sm:w-5/6">
          <label className="text-sm">Full Name</label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            autoFocus
            disabled={isPending}
            className="rounded-md border-2 border-[var(--secndary-color)] bg-none px-1 py-1 outline-none ring-[var(--accent-color)] focus:border-[var(--accent-color)] focus:ring-2 md:text-sm xl:text-lg"
          />
        </div>
        <div className="flex w-full flex-col gap-2 sm:w-5/6">
          <label className="text-sm">Enter Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isPending}
            className="rounded-md border-2 border-[var(--secndary-color)] bg-none px-1 py-1 outline-none ring-[var(--accent-color)] focus:border-[var(--accent-color)] focus:ring-2 md:text-sm xl:text-lg"
          />
          {email === "" || isValidEmail ? null : (
            <p className="text-xs text-[#9b1a1a]">Email is not valid</p>
          )}
        </div>

        <div className="flex w-full flex-col gap-2 sm:w-5/6">
          <label className="text-sm">Password (min 8 characters)</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isPending}
            className="rounded-md border-2 border-[var(--secndary-color)] bg-none px-1 py-1 outline-none ring-[var(--accent-color)] focus:border-[var(--accent-color)] focus:ring-2 md:text-sm xl:text-lg"
          />
          {password === "" || password.length >= 8 ? null : (
            <p className="text-xs text-[#9b1a1a]">
              Password must be minimun 8 Characters
            </p>
          )}
        </div>

        <div className="flex w-full flex-col gap-2 sm:w-5/6">
          <label className="text-sm">Confirm Password</label>
          <input
            type="password"
            required
            disabled={isPending}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="rounded-md border-2 border-[var(--secndary-color)] bg-none px-1 py-1 outline-none ring-[var(--accent-color)] focus:border-[var(--accent-color)] focus:ring-2 md:text-sm xl:text-lg"
          />
          {password === confirmPassword || confirmPassword === "" ? null : (
            <p className="text-xs text-[#9b1a1a]">Password do not match!</p>
          )}
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-5/6">
          <Button role="submit" type="submit" disabled={isPending}>
            {isPending ? "Loading...." : "Register"}
          </Button>
        </div>
      </form>
      <p className="mt-6 w-full text-center text-xs sm:w-5/6 sm:text-sm xl:text-lg">
        Already have an account?{" "}
        <Link
          to={`/signin`}
          className={`${isPending ? "pointer-events-none" : ""} text-blue-800 underline hover:text-[var(--primary-color)]`}
        >
          Sign In here
        </Link>
      </p>
    </div>
  );
}

export default Signupform;
