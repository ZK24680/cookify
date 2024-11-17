import Signinform from "../authentication/Signinform";

function Signin() {
  return (
    <div className="flex h-screen items-center justify-center overflow-hidden bg-[var(--secondary-background-color)]">
      <Signinform />
    </div>
  );
}

export default Signin;
