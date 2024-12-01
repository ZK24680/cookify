import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Logo from "../components/Logo";
import { useEffect, useState } from "react";
import useLogin from "./useLogin";
import { useAuth } from "../contexts/AuthContext";

function Signinform() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login, isPending } = useLogin();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) navigate("/account");
  }, [isAuthenticated, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) {
      login({ email, password });
    }
  }

  return (
    <div className="flex w-11/12 flex-col items-center rounded-xl bg-[var(--background-color)] p-4 shadow-2xl sm:w-4/5 md:w-2/3 md:pb-11 xl:w-2/5 xl:pb-16">
      <Logo style={`xl:h-56 h-24 sm:h-44 `} />

      <form
        onSubmit={handleSubmit}
        className="flex w-11/12 flex-col items-center gap-5 md:text-xl xl:text-2xl"
      >
        <div className="flex w-full flex-col gap-3 sm:w-5/6">
          <label>Enter Email</label>
          <input
            type="email"
            required
            autoFocus
            value={email}
            disabled={isPending}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md border-2 border-[var(--secndary-color)] bg-none px-1 py-2 outline-none ring-[var(--accent-color)] focus:border-[var(--accent-color)] focus:ring-2 md:text-sm xl:text-xl"
          />
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-5/6">
          <label>Enter Password</label>
          <input
            type="password"
            required
            disabled={isPending}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-md border-2 border-[var(--secndary-color)] bg-none px-1 py-2 outline-none ring-[var(--accent-color)] focus:border-[var(--accent-color)] focus:ring-2 md:text-sm xl:text-xl"
          />
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-5/6">
          <Button role="submit" type="submit" disabled={isPending}>
            {isPending ? "Signing In...." : "Sign In"}
          </Button>
        </div>
      </form>
      <p className="mt-6 w-full text-center text-xs sm:w-5/6 sm:text-sm xl:text-lg">
        Don&apos;t have an account?{" "}
        <Link
          to={`/signup`}
          className={`${isPending ? "pointer-events-none" : ""} text-blue-800 underline hover:text-[var(--primary-color)]`}
        >
          Sign Up here
        </Link>
      </p>
    </div>
  );
}

export default Signinform;
