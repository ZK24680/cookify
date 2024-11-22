import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/apiAuth";

export default function useUser() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { data, error, isLoading };
}
