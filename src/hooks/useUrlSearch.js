import { useSearchParams } from "react-router-dom";

export default function useUrlSearch() {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("main");

  return search;
}
