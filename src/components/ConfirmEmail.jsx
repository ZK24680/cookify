import { useEffect, useState } from "react";
import Button from "./Button";

function ConfirmEmail({ setShowMessage }) {
  const [totalSecond, setTotalSecond] = useState(180);

  const minute = Math.floor(totalSecond / 60);
  const second = totalSecond % 60;

  useEffect(() => {
    const countDown = setInterval(() => {
      setTotalSecond((second) => second - 1);
    }, 1000);

    if (totalSecond === 0) {
      clearInterval(countDown);
    }

    return () => clearInterval(countDown);
  }, [totalSecond]);

  return (
    <div className="flex w-11/12 flex-col items-center gap-3 rounded-xl bg-[var(--background-color)] p-4 shadow-2xl sm:w-4/5 md:w-2/3 md:pb-11 xl:w-2/5 xl:pb-16">
      {totalSecond === 0 ? (
        <>
          <p className="text-xl">⛔Link expired⛔</p>
          <Button onClick={() => setShowMessage(false)}>
            Back to Register
          </Button>{" "}
        </>
      ) : (
        <>
          <p className="text-center">
            ✅&quot;You&apos;re almost there! Check your inbox for a
            confirmation email and follow the steps to finish setting up your
            account.&quot;
          </p>
          <p className="text-center text-xs text-[var(--primary-color)]">
            link will expire in <span>{minute}</span>:
            <span>{second < 10 ? `0${second}` : second}</span>
          </p>
        </>
      )}
    </div>
  );
}

export default ConfirmEmail;

{
  /* <span className="text-sm">Or</span>
      <Button onClick={() => setShowMessage(false)}>Back to Register</Button> */
}
