import Signupform from "../authentication/Signupform";

function Signup() {
  return (
    <div className="flex h-screen w-full items-center justify-center overflow-hidden bg-[var(--secondary-background-color)]">
      <Signupform />
    </div>
  );
}

export default Signup;
