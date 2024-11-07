import { useEffect, useState } from "react";
import Search from "../components/Search";
import Recipes from "./Recipes";
import useRecipes from "./useRecipes";
import Message from "../components/Message";
import Spinner from "../components/Spinner";

function SearchRecipes() {
  const [query, setQuery] = useState("");

  const { data, error, isLoading, refetch } = useRecipes(query);

  console.log(data);

  useEffect(
    function () {
      if (query === "") return;
      refetch();
    },
    [query, refetch],
  );

  return (
    <div className="h-full w-full">
      <Search setQuery={setQuery} isLoading={isLoading} refetch={refetch} />

      {isLoading && <Spinner />}

      {data === null && (
        <Message message={`😔 Oops! We couldn’t find any recipes for that!`} />
      )}

      {data === undefined && !isLoading && (
        <Message
          message={
            "🧑‍🍳 Start your cooking journey by searching for delicious meals 🍴"
          }
        />
      )}

      {data && <Recipes recipes={data} />}
    </div>
  );
}

export default SearchRecipes;
