import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginApi } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      navigate("/recipes");
    },
  });

  return { login, isPending };
}
