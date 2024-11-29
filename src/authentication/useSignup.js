import { useMutation } from "@tanstack/react-query";
import { signUp } from "../services/apiAuth";

function useSignup() {
  const {
    mutate: signup,
    isPending,
    error,
  } = useMutation({
    mutationFn: signUp,
  });

  return { signup, isPending, error };
}

export default useSignup;
